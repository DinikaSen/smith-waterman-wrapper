import child_process from 'child_process';
import fs from 'fs';
import path from 'path';

const smithW = {};

/*
Align 2 sequences.
 */
smithW.alignPair = (sequence1, sequence2, matchScore, misMatchScore, gapScore, callback) => {
    stringAlignment(sequence1,sequence2,'no',matchScore,misMatchScore,gapScore,callback);
}

/*
Align 2 sequences and output alignment along with score matrix.
 */
smithW.alignPairGetMatrix = (sequence1, sequence2, matchScore, misMatchScore, gapScore, callback) => {
    stringAlignment(sequence1,sequence2,'yes',matchScore,misMatchScore,gapScore,callback);
}

/*
Align sequence file. Read 2 sequences at a time and align them.
 */
smithW.alignFile = (inputFile, matchScore, misMatchScore, gapScore, callback) => {
    fileAlignment(inputFile,'no',matchScore,misMatchScore,gapScore,callback);
}

/*
Align sequence file. Read 2 sequences at a time.
Output pairwise alignment along with score matrix.
 */
smithW.alignFileGetMatrix = (inputFile, matchScore, misMatchScore, gapScore, callback) => {
    fileAlignment(inputFile,'yes',matchScore,misMatchScore,gapScore,callback);
}


function stringAlignment(sequence1, sequence2, matrixFlag, matchScore, misMatchScore, gapScore, callback) {
    let command = `./smith_waterman --match ${matchScore} --mismatch ${misMatchScore} --gapopen ${gapScore} --colour `;
    if (matrixFlag === 'yes') {
        command += (`--printmatrices ${sequence1} ${sequence2}`);
    } else {
        command += (`${sequence1} ${sequence2}`);
    }
    run(command, (err, stdOut, stdError) => callback(err, stdOut, stdError));
}

function fileAlignment(inputFile, matrixFlag, matchScore, misMatchScore, gapScore, callback) {
    if (fs.existsSync(inputFile)){
        let command = `./smith_waterman --match ${matchScore} --mismatch ${misMatchScore} --gapopen ${gapScore} --colour `;
        if (matrixFlag === 'yes') {
            command += '--printmatrices ';
        }
        command += (`--file ${path.resolve(inputFile)}`);
        run(command, (err, stdOut, stdError) => callback(err, stdOut, stdError));
    }else{
        const err = 'Input file does not exist';
        return callback(err,null)
    }

}

function run(command, callback) {
    const execLocation = path.resolve(path.join(__dirname,'../util/seq_align/bin'));
    const fullCommand = `${execLocation}/${command}`;
    const cp = child_process.exec(fullCommand, {maxBuffer: 1024 * 1000}, callback);
}

module.exports = smithW;
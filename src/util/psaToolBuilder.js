import child_process from 'child_process';

function buildPSATool () {
    child_process.exec('make', {cwd: '../../src/util/seq-align'}, err => {
        if (err) {
            console.log(err);
        } else {
            console.log('Build successful..!');
        }
    });
};

buildPSATool();
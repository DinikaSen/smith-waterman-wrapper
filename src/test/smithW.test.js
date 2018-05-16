require('mocha');
const assert = require('assert');
import { expect } from 'chai';
import {should} from 'chai';
import {stdout} from "test-console";

let restoreStdout;

import smithW from '../lib/smithW';

describe('#Align an unaligned sequence file', function () {
    it('should execute command with no error', function (done) {
        const inspect = stdout.inspect();
        smithW.alignFile('src/test/samples/example.fasta',2,-2,-10,function(err){
            if (err) {
                console.log(err);
            }
            else {
                console.log('Success.!');
            }
            inspect.restore();
            assert.deepEqual(inspect.output[0], "Success.!\n");
            done();
        });
    });

    it('should give message that file does not exist', function (done) {
        var inspect = stdout.inspect();
        smithW.alignFile('src/test/samples/examples.fasta',2,-2,-10,function(err){
            if (err) {
                console.log(err);
            }
            else {
                console.log('Success.!');
            }
            inspect.restore();
            assert.deepEqual(inspect.output[0], 'Input file does not exist\n');
            done();
        });
    });
});

describe('#Align an unaligned sequence file and return score matrices with alignment', function () {
    it('should execute command with no error', function (done) {
        var inspect = stdout.inspect();
        smithW.alignFileGetMatrix('src/test/samples/example.fasta',2,-2,-10,function(err){
            if (err) {
                console.log(err);
            }
            else {
                console.log('Success.!');
            }
            inspect.restore();
            assert.deepEqual(inspect.output[0], "Success.!\n");
            done();
        });
    });
});

describe('#Align a pair of sequence inputs', function () {
    it('should execute command with no error', function (done) {
        var inspect = stdout.inspect();
        var sequence1 = 'AADBFGTRHYSRRFDERSGVSDEAERSG';
        var sequence2 = 'AADGTDRSYSRFFDERTSDNDBSHRDSG';
        smithW.alignPair(sequence1,sequence2,2,-2,-10,function(err){
            if (err) {
                console.log(err);
            }
            else {
                console.log('Success.!');
            }
            inspect.restore();
            assert.deepEqual(inspect.output[0], "Success.!\n");
            done();
        });
    });
});

describe('#Align a pair of sequence inputs and return score matrix with alignment', function () {
    it('should execute command with no error', function (done) {
        var inspect = stdout.inspect();
        var sequence1 = 'AADBFGTRHYSRRFDERSGVSDEAERSG';
        var sequence2 = 'AADGTDRSYSRFFDERTSDNDBSHRDSG';
        smithW.alignPairGetMatrix(sequence1,sequence2,2,-2,-10,function(err){
            if (err) {
                console.log(err);
            }
            else {
                console.log('Success.!');
            }
            inspect.restore();
            assert.deepEqual(inspect.output[0], "Success.!\n");
            done();
        });
    });
});


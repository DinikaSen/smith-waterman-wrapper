'use strict';

var _child_process = require('child_process');

var _child_process2 = _interopRequireDefault(_child_process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildPSATool() {
    _child_process2.default.exec('make', { cwd: '../../src/util/seq-align' }, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Build successful..!');
        }
    });
};

buildPSATool();
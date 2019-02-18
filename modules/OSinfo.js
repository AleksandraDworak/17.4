var os = require('os');
var colors = require('colors');
var changeTime = require('../modules/changeTime');
function getOSinfo() {
    var type = os.type();
    if (type === 'Darwin') {
        type = 'OSX';
    } else if (type === 'Windows_NT') {
        type = 'Windows';
    }
    console.log(('System:').magenta, type);
    var release = os.release();
    console.log(('Release:').green, release);
    var cpu = os.cpus()[0].model;
    console.log(('CPU model:').yellow, cpu);
    var uptime = os.uptime()
    console.log(('Uptime: ').cyan + (changeTime.print(uptime)));
    var userInfo = os.userInfo();
    console.log(('User name:').rainbow + userInfo.username);
    console.log(('Home dir:').red + userInfo.homedir);
};
exports.print = getOSinfo;



// console.log("🚀 ~ process.platform", process.platform)
const { spawn } = require('child_process');
// spawn(process.platform === "win32" ? "npm.cmd" : "npm", ['install'], {
//     stdio: 'inherit',
//     cwd: "./"
// });
// const subprocess = spawn(process.platform === "win32" ? "npm.cmd" : "npm", ['run','dev'], {
//     stdio: 'inherit',
//     cwd: "./"
// })
const subprocess = spawn('dir');

subprocess.stdout.on('data', (data) => {
    console.log(`接收到数据块 ${data.toString()}`);
});

// ps.on('error', function(err) {
//     console.log(err);
// });

// ps.on('exit', function (err) {
//     console.log('exit');
// });
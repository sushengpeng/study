#!C:\PROGRA~1\nodejs\node.exe
const fs = require('fs')
const inquirer = require('inquirer')
let path = "D:\\jzBank\\"
const params = []
let project = ""
const operatingEnv = ["Uat", "Sit", "Xhx", "Czq","Nuat1"]
const cprocess = require('child_process')
//选择测试生产环境
let chooseProject = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'project',
      message: '选择运行项目',
      choices: ["pwxvue", "pwxvueProd"]
    }
  ]).then(res => {
    path = path + res.project
    project = res.project
    chooseEnv()
  })
}
let chooseEnv = (flag) => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'env',
      message: '进行开发还是进行打包',
      choices: ["dev", "build"]
    }
  ]).then(res => {
    pushParams(res.env)
    if (res.env === 'dev') {
      inquirer.prompt([
        {
          type: 'list',
          name: 'operationMode',
          message: '运行整个项目还是运行单个项目',
          choices: ["single", "all"]
        }
      ]).then(res1 => {
        pushParams(res1.operationMode)
        getModules()
      })
    } else {
      inquirer.prompt([
        {
          type: 'list',
          name: 'operationMode',
          message: '打包整个项目还是运行单个项目',
          choices: ["single", "all"]
        }
      ]).then(res1 => {
        pushParams(res1.operationMode)
        getModules()
      })
    }
  })
}

let getModules = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'selectEnv',
      message: '选择环境',
      choices: operatingEnv
    }
  ]).then(res1 => {
    pushParams(res1.selectEnv)
    if (params[1] !== "all") {
      fs.readdir((path) + '\\src\\modules', (error, filelist) => {
        inquirer.prompt([
          {
            type: 'list',
            name: 'module',
            message: '选择模块名',
            choices: filelist
          }
        ]).then(res2 => {
          pushParams(res2.module)
          console.log(params)
          getCmd()
        })
      })
    } else {
      getCmd()
    }
  })

}
let pushParams = (val) => {
  params.push(val)
}
let getCmd = () => {
  //npm run buildSingleXhx bankLife xhx
  //npm run buildSingle bankLife uat
  //npm run build uat
  //npm run devSingleXhx bankLife Xhx
  //npm run dev uat
  //npm run devXhx
  let cmd = `cd ${path} && D: && npm run ${params[0]}${params[1] === 'all' ? '' : 'Single'}${project =='pwxvue'?params[2]:''}${params[1] === 'all' ? '' : (" " + params[3])}`
  console.log(cmd)
  let dev = cprocess.exec(cmd, { detached: true, maxBuffer: 10 * 1024 * 1024 }, function (error, stdout, stderr) {
    if (error) console.log(error)
  })
  dev.stdout.pipe(process.stdout);
  dev.stderr.pipe(process.stderr);
  // exec(str, {}, (error, stdout, stderr) => {
  //   if (error) {
  //     console.error(`执行的错误: ${error}`);
  //     return;
  //   }
  //   console.log(`stdout: ${stdout}`);
  //   console.error(`stderr: ${stderr}`);
  // })
}
chooseProject()

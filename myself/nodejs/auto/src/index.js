#!C:\PROGRA~1\nodejs\node.exe
// console.log(process.argv);
const inquirer = require("inquirer")
const fs = require("fs")
const path = "D:\\jzBank\\pwxvue"

inquirer.prompt([
  {
    name: "env",
    type: "list",
    message: "请选择开发环境",
    choices: ["测试", "开发"]
  }
]).then(res => {
  console.log(res)
  let { env } = res
  let fileList = []
  fs.readdir(path + '\\src\\modules', (err, file) => {
    fileList = file
  })
  if (env === '测试') {
    inquirer.prompt([
      {
        name: "testEnv",
        type: "list",
        message: "请选择运行项目",
        choices: ["旅生活", "旅金融", "视频银行", "海免商户贷"]
      }
    ]).then(answers => {
      console.log(answers)
    })
  } else {
    inquirer.prompt([
      {
        name: "proEnv",
        type: "list",
        message: "请选择打包",
        choices: ["旅生活", "旅金融", "视频银行", "海免商户贷"]
      }
    ]).then(answers => {
      console.log(answers)
    })
  }

})


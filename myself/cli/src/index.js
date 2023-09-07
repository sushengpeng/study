#!D:\nodejs\node
// #!D:\nodejs\node.exe
// #!C:\PROGRA~1\nodejs\node.exe
// #!C:\PROGRA~1\nodejs\node.exe
/**
 * 创建link
 * npm link
 * npm link mycli
 * 卸载link
 * npm unlink mycli
 */

const fs = require("fs");
const cprocess = require("child_process");
const inquirer = require("inquirer");
const utils = require("./utils");
const operatingEnv = ["Uat", "Sit", "Xhx", "Czq", "Nuat1", "Nuat2"];
const runCopy = require("./copy");
const params = [];
let path = "D:\\github\\package";
let project = "";
let history_cli_list = utils.get().list.map((item) => item.cli);
//选择测试生产环境
let chooseProject = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "project",
        message: "选择运行项目",
        choices: ["history", "pwxvue", "pwxvueProd", "createMoules", "serve"],
      },
    ])
    .then((res) => {
      // path = path + res.project;
      project = res.project;
      if (project === "history") {
        selectHistory();
      } else if (project === "创建模板") {
        runCopy()
      } else if (project === "serve") {
        runServer();
      } else {
        chooseEnv();
      }
    });
};
let chooseEnv = (flag) => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "env",
        message: "进行开发还是进行打包",
        choices: ["dev", "build"],
      },
    ])
    .then((res) => {
      pushParams(res.env);
      if (res.env === "dev") {
        inquirer
          .prompt([
            {
              type: "list",
              name: "operationMode",
              message: "运行整个项目还是运行单个项目",
              choices: ["single", "all"],
            },
          ])
          .then((res1) => {
            pushParams(res1.operationMode);
            getModules();
          });
      } else {
        inquirer
          .prompt([
            {
              type: "list",
              name: "operationMode",
              message: "打包整个项目还是运行单个项目",
              choices: ["single", "all"],
            },
          ])
          .then((res1) => {
            pushParams(res1.operationMode);
            getModules();
          });
      }
    });
};

let getModules = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "selectEnv",
        message: "选择环境",
        choices: operatingEnv,
      },
    ])
    .then((res1) => {
      pushParams(res1.selectEnv);
      if (params[1] !== "all") {
        fs.readdir(path + "\\src\\modules", (error, filelist) => {
          inquirer
            .prompt([
              {
                type: "list",
                name: "module",
                message: "选择模块名",
                choices: filelist,
              },
            ])
            .then((res2) => {
              pushParams(res2.module);
              console.log(params);
              getCmd();
            });
        });
      } else {
        getCmd();
      }
    });
};
let pushParams = (val) => {
  params.push(val);
};
let getCmd = (val) => {
  //npm run buildSingleXhx bankLife xhx
  //npm run buildSingle bankLife uat
  //npm run build uat
  //npm run devSingleXhx bankLife Xhx
  //npm run dev uat
  //npm run devXhx
  let cmd =
    val ||
    `cd ${path} && D: && npm run ${params[0]}${params[1] === "all" ? "" : "Single"
    }${project == "pwxvue" ? params[2] : ""}${params[1] === "all" ? "" : " " + params[3]
    }`;
  if (!history_cli_list.includes(cmd)) utils.set(cmd);
  let dev = cprocess.exec(
    cmd,
    { detached: true, maxBuffer: 10 * 1024 * 1024 },
    function (error, stdout, stderr) {
      if (error) console.log(error);
    }
  );
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
};
let selectHistory = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "history",
        message: "选择历史运行项目",
        choices: history_cli_list,
      },
    ])
    .then((res) => {
      getCmd(res.history);
    });
};
let server = (cmd) => {
  let dev = cprocess.exec(cmd,
    { detached: true, maxBuffer: 10 * 1024 * 1024 },
    function (error, stdout, stderr) {
      if (error) console.log(error);
    }
  );
  dev.stdout.pipe(process.stdout);
  dev.stderr.pipe(process.stderr);
}
let runServer = () => {
  const cmd = `npm run server`
  server(cmd)
}
chooseProject();
// utils.copy("./modules/template", "./modules/template1");

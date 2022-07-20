#!D:\nodejs\node.exe
// const chalk = require("chalk")
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const { throws } = require("assert");
const { error, info } = require("console");
// console.log(process.execPath);
// console.log(__dirname);
// console.log(process.cwd()); // 当前的命令地址
// 截取当前目录下的项目名称
let projectUrl = process.cwd().split("src").shift();
const baseUrl = path.join(projectUrl, "./src/modules");
console.log(baseUrl);
let selectCopyModule = async () => {
	await fs.readdir(baseUrl, (error, filelist) => {
		if (filelist) {
			inquirer.prompt([
				{
					type: "list",
					name: "sourceDir",
					message: "选择要复制的模块",
					choices: filelist,
				},
			]).then((res) => {
				sourceDir = path.join(projectUrl, `./src/modules/${res.sourceDir}`)
				inputCopyToModule()
			});
		} else {
			// console.log(chalk.blue(`the base of template is not find in now folder`))
			throw new Error(`the base of template is not find in now folder`);
		}
	});
};
let inputCopyToModule = async () => {
	await inquirer.prompt([
		{
			type: "input",
			name: "targetDir",
			message: "请输入要生成的模块",
		},
	]).then((res) => {
		targetDir = path.join(projectUrl, `./src/modules/${res.targetDir}`)
		console.log(sourceDir, targetDir)
		run(sourceDir, targetDir)
	});
}

// const sourceDir = process.argv[2];
// const targetDir = process.argv[3];
// console.log(sourceDir, targetDir);
const copy = async (sd, td) => {
	// 读取目录下的文件，返回文件名及文件类型{name: 'xxx.txt, [Symbol(type)]: 1 }
	const sourceFile = fs.readdirSync(sd, { withFileTypes: true });
	for (const file of sourceFile) {
		// 源文件 地址+文件名
		const srcFile = path.resolve(sd, file.name);
		// 目标文件
		const tagFile = path.resolve(td, file.name);
		// 文件是目录且未创建
		if (file.isDirectory() && !fs.existsSync(tagFile)) {
			fs.mkdirSync(tagFile, (err) => console.log(err));
			copy(srcFile, tagFile);
		} else if (file.isDirectory() && fs.existsSync(tagFile)) {
			// 文件时目录且已存在
			copy(srcFile, tagFile);
		}
		!file.isDirectory() &&
			await fs.copyFileSync(srcFile, tagFile, fs.constants.COPYFILE_FICLONE);
	}
};

const run = async (sourceDir, targetDir) => {
	// const startTime = await new Date().getTime();
	//   console.log(path.join(__dirname, sourceDir));
	//   console.log(!fs.existsSync(path.join(__dirname, sourceDir)));
	if (fs.existsSync(targetDir)) {
		throw error("file already exists");
	} else if (!fs.existsSync(sourceDir)) {
		throw error("no such file or directory");
	} else if (!fs.existsSync(targetDir)) {
		await fs.mkdirSync(targetDir, (err) => console.log(err));
		await copy(sourceDir, targetDir);
	} else {
		await copy(sourceDir, targetDir);
	}
	// const endTime = await new Date().getTime();
	// console.log("耗时:", ((endTime - startTime) / 1000).toFixed(2) + "s");
};

module.exports = async () => {
	let sourceDir, targetDir;
	await selectCopyModule()
	// await run(sourceDir, targetDir);
};

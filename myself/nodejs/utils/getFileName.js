const fs = require('fs');
const path = require('path');

/**
 * 获取指定文件夹下的所有文件名
 * @param {string} dirPath - 文件夹路径
 * @returns {Promise<string[]>} - 文件名数组
 */
function getFileNames(dirPath) {
    return new Promise((resolve, reject) => {
        fs.readdir(dirPath, (err, files) => {
            if (err) {
                return reject(err);
            }
            resolve(files);
        });
    });
}

// console.log(path.normalize('D:\\github\\companyWork\\webbankPoc\\enterpriseWebBank\\src\\assets'))
const _path = 'D:\\github\\companyWork\\webbankPoc\\enterpriseWebBank\\src\\assets'
// 示例用法
getFileNames(_path)
    .then(files => {
        console.log('文件名列表:', files);
    })
    .catch(err => {
        console.error('读取文件夹出错:', err);
    });

// let projectUrl = process.cwd().split("src").shift();

const commen = require('../db/commen')
const fs = require('fs');
var csv = require('csv');
const path = require('path')
const https = require('https')
const getLogger = require('../logs/log')
const get_fileist = async (req, res, next) => {
    try {
        // const fileist = await commen.articles_select_rand()
        const filelist = await commen.test()
        // ctx.body = filelist
        res.send({ data: { list: filelist } })
        console.log('req1:', req)
    } catch (error) {
        res.throw(400, error)
    }
}
const read_file = async (req, res, next) => {
    try {
        fs.readFile('./public/file/hu_xia wa_20171128_1431.csv', (err, data) => {
            let table = []
            console.log(data.re)
            data = data.toString()
            rows = data.split("\r\n");
            for (var i = 0; i < rows.length; i++) {
                console.log(rows[i].length)
                table.push(rows[i])
                // if (rows[i].length > 1000) {
                //     table.push(rows[i].split(",").replace(''));
                // }
            }
            res.send(table)
        })
    } catch { }
}
const upload_file = async (req, res, next) => {
    console.log(req.files[0].path)
    const newname = req.files[0].path + path.parse(req.files[0].originalname).ext
    fs.rename(req.files[0].path, newname, function (err) {
        // try {
        //     const file = await commen.test()
        // } catch (error) {
        // }
        if (err) {
            res.send('上传失败')
        } else {
            res.send(req.files)
        }
    })
}
const create_file = async (req, res, next) => {
    for (let i = 0; i < 10; i++) {
        let obj = {
            path: `./dist/${i}`,
            filename: i
        }
        fs.mkdir(obj.path, { recursive: true }, (err) => {
            commen.fileCeated(obj)
            // console.log(result)
            if (err) throw err;
            console.log(`${i}文件已生成`)
        })
    }
    res.send('生成文件成功')
}
const login = async (req, res, next) => {
    console.log(req, res)
}
const testLogger = async (req, res, next) => {

    // const options = {
    //     hostname: 'cnodejs.org',
    //     path: '/api/v1/topics',
    //     method: 'GET'
    // };

    // const request = https.request(options, (res) => {
    //     console.log('状态码:', res.statusCode);
    //     console.log('请求头:', res.headers);

    //     res.on('data', (d) => {
    //         process.stdout.write(d);
    //     });
    // });

    // request.on('error', (e) => {
    //     console.error(e);
    // });
    // request.end();
    // getLogger('去打印日志')
    // res.getLogger('1111')
    console.log(11111)
    res.send('去打印日志')
}

module.exports = {
    get_fileist,
    read_file,
    upload_file,
    create_file,
    login,
    testLogger
}
const commen = require('../db/commen')
const fs = require('fs');
const https = require('https')
const querystring = require('querystring')
var csv = require('csv');
const path = require('path')
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
/** 
* @api {POST} http://127.0.0.1:8000/login/ 登录操作
* @apiVersion 0.0.1
* @apiName login
* @apiGroup User
* @apiDescription 这里可以描述一下这个函数的具体操作
* @apiParam {String} name 姓名
* @apiParam {String} password 密码
* @apiSuccess {Object} status 状态码
* @apiSuccess {Object} msg 简略描述
* @apiSuccessExample Response-Success:
*     HTTP 1.1/ 200K
*     {
*         'status': 0,
*         'msg': 'success'
*     }
* @apiErrorExample Response-Fail:
*     HTTP 1.1/ 404K
*     {
*         'status': 0,
*         'msg': 'Fail'
*     }
*/
const login = async (req, res, next) => {
    console.log(req, res)
}
/** 
* @api {GET} http://localhost:3000/testPost/ 测试
* @apiVersion 0.0.1
* @apiName testPost
* @apiGroup User
* @apiDescription 测试
* @apiParam {String} name 姓名
* @apiSuccess {Object} status 状态码
* @apiSuccess {Object} msg 简略描述
* @apiSuccessExample Response-Success:
*     HTTP 1.1/ 200K
*     {
*         'status': 0,
*         'msg': 'success'
*     }
* @apiErrorExample Response-Fail:
*     HTTP 1.1/ 404K
*     {
*         'status': 0,
*         'msg': 'Fail'
*     }
*/
const testPost = async (req, res, next) => {

    setInterval(() => {
        let postData = querystring.stringify({ Data: "SqXR2ZDdG1jGbAnSiQg/ntC21oHNNq53RmXmS0yP1UtF7wf3yBpSNiYr2PbkYjmWeLr/0rbYj4eQMLCJpppj1kiGqtpD4jBEFFyo2hlWWw/+K0dHer87sISd2CUNSe14xIcaii0hy5EIDIH+wQF+pXOGuUOEVJta407jM5Ko/ViT7gET9LWGPbY2E04AR5ZUmKItHlInVA9s+3b5izJ0ezMmHm0NFstTOnA/+aEg2UEZaq0Befs7hF/Wxk/xl2tzUNHqbq3BTDu/bWacaKNIWIbl3QoIR+MS7FKZ2Hgc5qKmiIL/XNKygKe/Vts6rMJoDygVcgVJdPPbDlXK7SKvLg==", "SignData": "fLXhGTaRXkdo1NCd/SCaBTZ09r5aKtAdXEOU7rbXN3LYgS1HYBKLCdSpHzInLdrh+AKEIStwItsfYddmkhQsqixzD+3ne14Dj5+JUS9qo0i7coRqwXaqtYD59FLqoaB4TFBhuBivw2JX/Xq6lWIKxnV5dcnglRJeQCVcWBW8zJaROhwMt7XsCK9/LGsryaurdkD6tHjPe30FUo6sHV01oD27mIHN1Ggo7VJ33gkYpahzpcN5wZShNcbjHnnKw5dilfKlmlU8qDiDGrKUILC3M3rFRgjyWWM/YWcA2dPIz8KtS6i36oATFB6MDa1AcJTnZYHbilvCxu3rgTWw7pICJQ==" })
        const options = {
            hostname: 'wxbank.jzctb.com',
            path: '/gateway/BindAcNoStateInfoQry.do',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData)
            }
        };
        const req = https.request(options, (res) => {

            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                log4js.info(chunk)
            });
        });

        req.on('error', (e) => {
            // console.error(`请求遇到问题: ${e.message}`);
        });
        req.write(postData + "\n");
        req.end();
    }, 10000)
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
    testPost,
    testLogger
}
const commen = require('../db/commen')
// const Excel = require('../public/file/hu_xia wa_20171128_1431.csv')
const fs = require('fs');
var csv = require('csv');
// const excelfile = "score.xlsx";
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
                // console.log(rows[i].length)
                if (rows[i].length > 1000) {
                    table.push(rows[i].split(",").replace(''));
                }
            }
            res.send(table)
        })
    } catch{ }
}
const upload_file = async (req, res, next) => {
    
}
module.exports = {
    get_fileist,
    read_file,
    upload_file
}
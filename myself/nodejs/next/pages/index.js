const path = require("path");
const fs = require("fs");
let projectUrl = process.cwd();
console.log(projectUrl)
export default function () {
    let fileList = []
    try {
        fs.readdir(projectUrl + "\\modules", (error, filelist) => {
            fileList = filelist
        });
    } catch (error) {

    }
    return <div className="container">
        fileList.map((item,index) => {
            return <div key={index}>{item}</div>
        });
    </div>
}
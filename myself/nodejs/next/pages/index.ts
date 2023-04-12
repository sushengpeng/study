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
    return <div class="container">
        // fileList.map((item:string,index:number) => {
        //     return <div key={index}>{item}</div>
        // });
    </div>
}
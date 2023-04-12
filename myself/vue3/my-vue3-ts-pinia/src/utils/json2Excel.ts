// src/utils/json2Excel.ts

import * as XLSX from "xlsx";

export default (
    data: any[],
    sheetName: string = "sheet1",
    fileName: string = "json2Excel.xlsx"
) => {
    const jsonWorkSheet = XLSX.utils.json_to_sheet(data);

    const workBook = {
        SheetNames: [sheetName], // 指定有序 sheet 的 name
        Sheets: {
            [sheetName]: jsonWorkSheet, // 表格数据内容
        },
    };

    return XLSX.writeFile(workBook, fileName); // 向文件系统写出文件
};
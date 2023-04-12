<!--
 * @Autor: flygg123
 * @Date: 2022-06-24 14:39:36
 * @LastEditTime: 2022-08-27 17:02:06
 * @LastEditors: Please set LastEditors
 * @Description: 
-->
<template>
	<div class="outer">
		<input type="file" ref="excelRef" :accept="props.accept" @change="onChange" class="excel" />
		<h1>解析数据：</h1>
		<h2>
			<code>{{ JSON.stringify(excelData) }}</code>
		</h2>
	</div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import * as XLSX from 'xlsx'
import json2Excel from "@/utils/json2Excel";
defineOptions({
	name: "excel"
})

interface Props {
	accept: string
}

const props = withDefaults(defineProps<Props>(), {
	accept:
		'.csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
})

const excelRef: any = ref(null)
let excelData: any[] = reactive([])
excelData.push({ name: 1111 })
const onChange = (event: any) => {
	// 获取文件对象
	const file = event.target.files[0];

	// 读取文件内容
	readerExcel(file);

	// 清除数据
	clearFile();
}

// 读取对应表格文件
const readerExcel = (file: File) => {
	const fileReader = new FileReader();
	// 以二进制的方式读取表格内容
	fileReader.readAsBinaryString(file);

	// 表格内容读取完成
	fileReader.onload = (event: any) => {
		try {
			const fileData = event.target.result;
			const workbook = XLSX.read(fileData, {
				type: "binary",
			});

			// 表格是有序列表，因此可以取多个 Sheet，这里取第一个 Sheet
			const wsname = workbook.SheetNames[0];
			// 将表格内容生成 json 数据
			const sheetJson = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]);

			console.log(sheetJson); // 得到的表格 JSON 内容
			excelData.push(...sheetJson)
		} catch (e) {
			console.log(e);
			return false;
		}
	};
};

const clearFile = () => {
	excelRef.value.value = "";
};
</script>
<style lang="scss" scoped>
</style>

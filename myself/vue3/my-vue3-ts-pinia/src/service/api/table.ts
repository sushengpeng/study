import http from '@/service/request'

/**
     * 获取表格demo数据
     * @returns  Menu[]
     */
export const getDemoList = (data: TableDemoParams) => http.post<TableDemoData>('/api/table/getDemoList', data)


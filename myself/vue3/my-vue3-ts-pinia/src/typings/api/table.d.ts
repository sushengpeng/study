interface TableDemoItem {
    id: number;
    age: number;
    address: string;
    name: string;
    gender: number;
    avatar: string;
    date: string;
    time: string;
    status: string;
    mobile: string;
    email: string;
}
interface PageInfo {
    total: number;
    currentPage: number;
    pageSize: number;
}
interface TableDemoParams {
    page: number;
    pageSize: number;
}

interface TableDemoData {
    items: TableDemoItem[];
    pageInfo: PageInfo;
}

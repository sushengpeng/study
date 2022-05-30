import { Outlet } from 'react-router-dom'
import { Button, Input, Table } from 'antd'
import "./index.scss"
import { connect } from 'react-redux'
import { Project, PageItem, setCurPage, setProject, setHomePage } from '@/store/module/project'
import { useEffect, useState } from 'react'
import { IStoreState } from '@/store/types'
import { getRandomCode } from '@/utils/utils'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
const MallManage = (props: Project) => {
  const { project } = props
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const [homePage, setHomePage] = useState<any>(project.pages?.find((page: PageItem) => page.home))
  // 新增页面
  const add = () => {
    let page: PageItem = {
      id: getRandomCode(4),
      name: "新增页面",
      componentList: [],
      home: false,
    };
    let { pages } = project
    pages?.push(page)
    dispatch(setProject({
      ...project,
      pages: pages
    }))
  }
  const setHome = (record: PageItem) => {
    setHomePage(record)
  }
  const editPage = (page: PageItem) => {
    page.componentList = [{ "component": "McCapCube", "name": "魔方", "icon": "icon-mofang", "cube": { "model": "custom", "row": 3, "list": [] }, "styles": { "pagePadding": 0, "cmpRadius": 0, "imgMargin": 0, "imgRadius": 0, "cmpBackground": "" }, "id": "1652939977j7Fm2T", "height": 190 }, { "component": "McCountdown", "name": "倒计时", "icon": "icon-daojishi", "value": { "text": "活动", "startTime": "", "endTime": "" }, "styles": { "model": "one", "location": "left", "pagePadding": 0, "cmpUpperPadding": 10, "cmpLowerPadding": 10, "cmpUpperRadius": 0, "titleColor": "#000000", "timeColor": "#000000", "cmpBackground": "#FFFFFF" }, "id": "1652939978wvmcDU", "height": 33 }, { "component": "McEmpty", "name": "辅助分割", "icon": "icon-line", "styles": { "model": "basis", "type": "basis", "pagePadding": 0, "height": 20, "lineColor": "#E5E5E5" }, "id": "1652939980PTSAZh", "height": 20 }, { "component": "McGoods", "name": "商品", "icon": "icon-shangpin", "goodsData": [], "attrs": { "model": "transverse", "tabModel": "tab1", "listModel": "towCols", "itemAlign": "center", "showTitle": true, "showInfo": false, "showOriginalPrice": false, "buyText": "购买" }, "styles": { "pagePadding": 0, "wrapPadding": 0, "cmpUpperRadius": 0, "cmpLowerRadius": 0, "titleColor": "#000000", "subTitleColor": "#7F8080", "background": "#ffffff", "tabActiveColor": "#000000", "buyBackgroundColor": "#df201e" }, "id": "1652939981BMNRve", "height": 330 }, { "component": "McEmpty", "name": "辅助分割", "icon": "icon-line", "styles": { "model": "basis", "type": "basis", "pagePadding": 0, "height": 20, "lineColor": "#E5E5E5" }, "id": "1652939985QiUmGv", "height": 20 }, { "component": "McImg", "name": "图片", "icon": "icon-image", "imageValue": { "imagePath": "", "jumpPath": {} }, "imageStyle": { "pagePadding": 0, "cmpRadius": 0, "cmpUpperPadding": 0, "cmpLowerPadding": 0 }, "id": "1652939986PeGcgR", "height": 200 }, { "component": "McNotice", "name": "公告", "icon": "icon-gonggao", "noticeContent": { "text": "自恨罗衣掩诗句，举头空羡榜中名", "icon": "" }, "noticeStyles": { "pagePadding": 0, "fontColor": "rgba(183, 93, 93, 0.75)", "cmpBackground": "" }, "id": "1652939989uh1Tqn", "height": 30 }, { "component": "McSearch", "name": "搜索", "icon": "icon-sousuo", "value": { "text": "搜索你想要的商品" }, "styles": { "shape": "square", "location": "left", "cmpBackground": "#FFFFFF" }, "id": "1652939991d7S41I", "height": 50 }, { "component": "McTitle", "name": "标题", "icon": "icon-biaotizujian", "value": { "title": "LEADING SERIES", "info": "品牌系列推荐" }, "attrs": { "model": "left" }, "styles": { "pagePadding": 0, "cmpUpperPadding": 10, "cmpLowerPadding": 10, "cmpUpperRadius": 0, "cmpLowerRadius": 0, "titleSize": 20, "infoSize": 12, "titleColor": "#333333", "infoColor": "#999999", "cmpBackground": "" }, "id": "1652939995Bg4Pss" }, { "component": "McTab", "name": "图文导航", "icon": "icon-daohang", "tabList": [{ "id": "0001", "label": "推荐酒店", "image": "http://110.42.184.128:8090/img/1638500137694.png" }, { "id": "0002", "label": "热销抢购", "image": "http://110.42.184.128:8090/img/1638500155713.png" }, { "id": "0003", "label": "促销门票", "image": "http://110.42.184.128:8090/img/1638500173774.png" }, { "id": "0004", "label": "机票团购", "image": "http://110.42.184.128:8090/img/1639569399375.png" }], "attrs": { "model": "fixed", "type": "image-text", "max": "4" }, "styles": { "pagePadding": 0, "cmpUpperPadding": 0, "cmpLowerPadding": 0, "imgPadding": 10, "cmpUpperRadius": 0, "cmpLowerRadius": 0, "imgWidth": 50, "imgRadius": 0, "fontSize": 12, "titleColor": "", "cmpBackground": "" }, "id": "1652939994JSC78f", "height": 84.5 }]
    dispatch(setCurPage(page))
    navigateTo('/mall/page-build')
  }
  // const setRecord = (record: PageItem) => {
  //   setHomePage(record)
  // }
  return (
    <div className="body">
      <div className="content">
        <Button type='primary' onClick={add}>新建页面</Button>
        <div className="content-head">
          <img
            className="w45 h45 mr10 radius"
            src="https://img.yzcdn.cn/public_files/2016/05/13/8f9c442de8666f82abaf7dd71574e997.png!small.webp"
            alt=""
          />
          <div className="flex-column">
            <div className="flex col-center mb10">
              <span className="mr8 f15 f-bold">{homePage.name}</span>
              <div className="p4 r3 bg-theme f13 f-white">首页</div>
            </div>
            <span className="f14 f-theme pointer" onClick={() => editPage(homePage)}
            >编辑</span>
          </div>
        </div>
        <ManageTable pages={project.pages} setHome={setHome} homePage={homePage} editPage={editPage} />
      </div>
    </div>
  )
}
const ManageTable = (props: any) => {
  let { pages } = props
  pages = pages.map((item: any, index: number) => {
    return { key: index, ...item }
  })
  const titleStyle = {
    display: 'flex',
    alignItems: 'center'
  }
  const spanStyle = {
    marginLeft: '5px',
    color: '#155bd4',
    cursor: 'pointer'
  }
  const [columns, setColumns] = useState<any[]>()

  useEffect(() => {
    setColumns([
      {
        title: '标题',
        dataIndex: 'name',
        key: '1',
        width: '30%',
        render: (text: string, record: PageItem) => <div style={titleStyle}>
          {/* <span>{props.homePage.id}{record.id}</span> */}
          {props.homePage.id === record.id ? <img className="h16 w16 mr5" src="https://b.yzcdn.cn/channel-icon/h5-mobile.png" alt="" /> : ''}
          <Input value={text} />
        </div>,
      },
      {
        title: '状态',
        dataIndex: 'name',
        key: '2',
        render: (text: string) => <span>已创建</span>
      },
      {
        title: '备注',
        dataIndex: 'remote',
        key: '3',
        width: '25%',
        // editable: true
        render: (text: string) => <Input value={text} />
      },
      {
        title: '操作',
        key: '4',
        render: (text: string, record: PageItem) => <div>
          <span style={spanStyle} onClick={() => props.editPage(record)}>编辑</span>
          <span style={spanStyle} onClick={() => props.setHome(record)}>设为主页</span>
          <span style={spanStyle}>复制</span>
        </div>,
      },
    ])
  }, [props.homePage])

  return (
    <Table
      onRow={record => {
        return {
          onClick: event => {
            // props.setHome(record)
          }, // 点击行
          onDoubleClick: event => { },
          onContextMenu: event => { },
          onMouseEnter: event => { }, // 鼠标移入行
          onMouseLeave: event => {
            // console.log(record)
          },
        };
      }}
      rowClassName={() => 'editable-row'}
      bordered
      columns={columns}
      pagination={false}
      dataSource={pages}
    />
  )
}
export default connect((state: IStoreState) => {
  return {
    project: state.project.project
  }
})(MallManage)
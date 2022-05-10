import { Outlet } from 'react-router-dom'
import { Button, Input, Table } from 'antd'
import "./index.scss"
import { connect } from 'react-redux'
import { Project, PageItem } from '@/store/module/project'
import { useState } from 'react'
import { IStoreState } from '@/store/types'
const MallManage = (props: Project) => {
  const { project } = props
  const [homePage, setHomePage] = useState<any>(project.pages?.find((page: PageItem) => page.home))
  const editPage = (page: PageItem) => {
    console.log(page)
  }
  return (
    <div className="body">
      <div className="content">
        <Button type='primary' >新建页面</Button>
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
        <ManageTable pages={project.pages} />
      </div>
    </div>
  )
}
const ManageTable = (props: any) => {
  let { pages } = props
  pages = pages.map((item: any, index: number) => {
    item.key = index
    return item
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
  const [columns, setColumns] = useState<any[]>(
    [
      {
        title: '标题',
        dataIndex: 'name',
        key: '1',
        width: '30%',
        render: (text: string) => <div style={titleStyle}>
          <img className="h16 w16 mr5" src="https://b.yzcdn.cn/channel-icon/h5-mobile.png" alt="" />
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
        render: () => <div>
          <span style={spanStyle}>编辑</span>
          <span style={spanStyle}>设为主页</span>
          <span style={spanStyle}>复制</span>
        </div>,
      },
    ]
  )
  return (
    <Table
      onRow={record => {
        return {
          onClick: event => {
            console.log(record)
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
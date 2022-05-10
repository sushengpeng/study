/*
 * @Autor: flygg123
 * @Date: 2022-04-29 13:18:57
 * @LastEditTime: 2022-05-08 18:39:41
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import React, { useEffect, useState } from 'react'
import './index.scss'
import { Button } from 'antd';
import CreateDialog from '@/components/CreateDialog/CreateDialog';
import { mallTypeList } from '@/config/mall';
import { getProjectList } from '@/api/project';
import { connect } from 'react-redux';
import { UserState } from '@/store/module/user';
import { setProject } from '@/store/module/project'
import { IStoreState } from '@/store/types';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
const Index = (props: UserState) => {
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const [list, setList] = useState<any[]>([])
  const navigateTo = useNavigate()
  const dispatch = useDispatch()
  const create = () => {
    setShowDialog(true)
  }
  const dialogClose = () => {
    setShowDialog(false)
  }
  const onLogout = () => {
    console.log(222)
  }
  const update = (item: any) => {
    console.log(item)
    dispatch(setProject(item))
    navigateTo("/mall");
  }
  const del = (id: string) => {
    console.log(id)
  }
  useEffect(() => {
    getMallList();
  }, []);
  // 获取商城列表
  const getMallList = async () => {
    let map = new Map();
    let temp = mallTypeList;
    mallTypeList.map((item: any) => {
      item.list = [];
      map.set(item.type, item.list);
    });
    await getProjectList({ userId: props.userInfo.userId }).then((res: any) => {
      // console.log(res.list)
      let { list } = res
      list.map((item: any) => {
        let value = map.get(item.type);
        value.push(item);
      });
      setList(temp)
    })
  }
  return (
    <div className="manage">
      <div className="manage-head">
        <div className="manage-head-content">
          <Button onClick={create} type="primary">立即创建</Button>
          <Button onClick={onLogout} style={{ marginLeft: "10px" }}>退出</Button>
        </div>
      </div>
      {
        list.map((type, index) => {
          return (
            <div className="manage-body" key={index}>
              <h2 className="manage-body-title">
                {type.title}
                <span>{type.subTitle}</span>
              </h2>
              {
                type.list.length > 0
                  ? <ul className='list'>
                    {
                      type.list.map((item: any, i: number) => {
                        return (
                          <li className="list-item" key={i}>
                            <div className="list-item-content">
                              <img src={item.logo} className="w50 mt10 radius" />
                              <div className="mt25 f20">{item.name}</div>
                              <div className="list-item-content-type">{type.title}</div>
                              <div className="list-item-content-btn">
                                <span onClick={() => update(item)} className="list-button-edit">修改</span>
                                <span onClick={() => del(item.id)} className="list-button-del">删除</span>
                              </div>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul> : ''
              }
            </div>
          )
        })
      }
      {<CreateDialog close={dialogClose} showDialog={showDialog} userInfo={props.userInfo} />}
    </div>
  )
}
export default connect((state: IStoreState) => {
  return {
    userInfo: state.user.userInfo
  }
})(Index)

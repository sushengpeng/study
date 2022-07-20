/*
 * @Autor: flygg123
 * @Date: 2022-05-07 16:18:24
 * @LastEditTime: 2022-06-23 10:13:05
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import React, { PureComponent, useEffect } from 'react'
import { Outlet, Link, LinkProps, useResolvedPath, useMatch, useNavigate } from 'react-router-dom'
import { meauList } from '@/config/project'
import "./index.scss"
import { connect } from 'react-redux'
import { IStoreState } from '@/store/types'
import { Project } from '@/store/module/project'
import TopBar from "@/components/TopBar"
export interface CustomerLinkProps extends LinkProps {
    icon: string
    name: string
}
const CustomLink = ({ children, to, ...props }: CustomerLinkProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: false });
    // console.log(match)
    return (
        <Link to={to} >
            <li className={`main-meau-item ${match ? 'active' : ''}`}>
                <i className={props.icon} />
                <span>{props.name}</span>
            </li>
        </Link>
    );
}
const MallIndex = (props: Project) => {
    const navigateTo = useNavigate()
    useEffect(()=>{
        navigateTo("/mall/index")
    },[])
    return (
        <div className="main">
            <ul className="main-menu">
                <img
                    className="w40 auto-center mt10 mb30 radius"
                    src={props.project.logo}
                />
                {
                    meauList.map((route, index) => {
                        return <CustomLink to={route.path} icon={route.icon} name={route.name} key={index} />
                    })
                }
            </ul>
            <div className="main-body">
                <TopBar />
                <div className="main-body-content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default connect((state: IStoreState) => {
    return {
        project: state.project.project
    }
})(MallIndex)
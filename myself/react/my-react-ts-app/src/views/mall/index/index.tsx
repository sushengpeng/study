import React, { PureComponent } from 'react'
import { Outlet, Link, LinkProps, useResolvedPath, useMatch } from 'react-router-dom'
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
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        // <Link
        //     style={{ textDecoration: match ? "underline" : "none" }}
        //     to={to}
        //     {...props}
        // >
        //     {children}
        // </Link>
        <Link to={to} >
            <li className={`main-meau-item ${match ? 'active' : ''}`}>
                <i className={props.icon} />
                <span>{props.name}</span>
            </li>
        </Link>
    );
}
const MallIndex = (props: Project) => {
    console.log(props)
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
/*
 * @Autor: flygg123
 * @Date: 2022-06-22 09:35:57
 * @LastEditTime: 2022-06-23 09:44:00
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import React from 'react'
import { Link, useResolvedPath, useMatch } from 'react-router-dom'
import "./index.scss"
export interface SideBarProps {
    groups: Array<Group>
}
export interface Group {
    label: string
    list: Array<GroupListItem>
}
interface GroupListItem {
    path: string
    name: string
}
function SideBar(props: SideBarProps) {
    const { groups } = props
    return (
        <ul className="meau">
            {
                groups.map((group: Group, index: number) => {
                    return <li className="meau-group" key={index}>
                        <div className="meau-title">{group.label}</div>
                        {
                            group.list.map((listItem: GroupListItem, i: number) => {
                                let resolved = useResolvedPath(listItem.path);
                                let match = useMatch({ path: resolved.pathname, end: true });
                                // console.log(match)
                                return <Link to={listItem.path} key={i} className={`maeu-item ${match ? 'active' : ''}`}>{listItem.name}</Link>
                            })
                        }
                    </li>
                })
            }
        </ul>
    )
}

export default SideBar
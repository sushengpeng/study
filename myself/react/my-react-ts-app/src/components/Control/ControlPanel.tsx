import React, { useEffect, useRef, useState } from 'react'
import { IStoreState } from '@/store/types'
import { connect } from 'react-redux'
import PhoneCtn from '../Global/PhoneCtn'
import global from "@/config/global";
import "./styles/ControlPanel.scss"
import { Project } from '@/store/module/project';
import ControlWidgetShape from './ControlWidgetShape';
import { useContext } from 'react';
import { contextBox } from "./index";
interface contextInterface {
	curWidget: any
	dragWidget: any
	setCurrWidget: any
	setDragWidget: any
}
function ControlPanel(props: Project) {
	const { curPage } = props
	const iframe = useRef(null)
	const [iframeUrl] = useState<string>(`${global.viewUrl}pages/build/build?operate=build`)
	const [widgetInfoList, setWidgetInfoList] = useState<object[]>([])
	const [iframeHeight, setIframeHeight] = useState<string>("")
	const [dragstatus] = useState<boolean>(false)
	const ctx = useContext(contextBox)
	// console.log('ctx', ctx)
	useEffect(() => {
		init()
		getMessage()
	}, [])
	useEffect(() => {
		getMessage()
	}, [curPage.componentList])
	// window.curPage = curPage
	// window.widgetInfoList = widgetInfoList
	// window.iframeHeight = iframeHeight
	const init = () => {
		messageInit()
		messageList()
	}
	// 接收iframe信息
	const getMessage = () => {
		window.addEventListener("message", getMessageHandle);
	}
	const setHeight = (params: any) => {
		// console.log(params);
		setWidgetInfoList(params)
		setIframeHeight(params.reduce((a: any, b: any) => a + b.height, 0))
	}
	const setList = (params: any) => {
		// @ts-ignore
		iframe.current.contentWindow.postMessage(
			{
				even: "list",
				params: props.curPage.componentList,
			},
			"*"
		);
	}
	const setCurrWidget = (params: any) => {
		let { id } = params;
		ctx.setCurrWidget(props.curPage.componentList.find(
			(item) => id == item.id
		))
	}
	const getMessageHandle = (e: any) => {
		let { type, params } = e.data;
		switch (type) {
			case "setList":
				setList(params);
				break;
			case "setHeight":
				setHeight(params);
				break;
			case "setCurrWidget":
				setCurrWidget(params);
				break;
		}
	}
	const messageInit = () => {
		// @ts-ignore
		iframe.current.contentWindow.postMessage(
			{
				even: "init",
				params: { project: curPage },
			},
			"*"
		);
	}
	const messageList = () => {
		// @ts-ignore
		iframe.current.contentWindow.postMessage(
			{
				even: "list",
				params: curPage.componentList,
			},
			"*"
		);
	}
	const layerMove = () => {

	}
	// // 设置选中物料
	// setCurrWidget(params) {
	// 	let { id } = params;
	// 	this.control.curWidget = this.control.curPage.componentList.find(
	// 		(item) => id == item.id
	// 	);
	// }
	return (
		<div className='panel'>
			<PhoneCtn>
				<div className="page">
					<iframe
						ref={iframe}
						className="page-iframe"
						frameBorder="no"
						style={{
							height: iframeHeight + 'px',
							pointerEvents: dragstatus ? 'none' : 'auto',
						}}
						src={iframeUrl}
						onLoad={init}
					></iframe>
					{/* 拖拽与iframe交互蒙层 */}
					<div
						className="page-layer"
						style={{
							height: iframeHeight + 'px',
							zIndex: dragstatus ? '20' : '1',
						}}
						onDragOver={layerMove}>
						{
							widgetInfoList.map((item: any, index: number) => {
								return <ControlWidgetShape data={item} key={index}>
									<div
										className="page-layer-widget"
										id={item.id}
										style={{ height: item.height + 'px' }}
									></div>
								</ControlWidgetShape>
							})
						}
					</div>
				</div>
			</PhoneCtn >
		</div >
	)
}

export default connect((state: IStoreState) => {
	return {
		curPage: state.project.curPage
	}
})(ControlPanel)
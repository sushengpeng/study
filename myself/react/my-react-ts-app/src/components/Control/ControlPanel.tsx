import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { IStoreState } from '@/store/types'
import { connect } from 'react-redux'
import PhoneCtn from '../Global/PhoneCtn'
import global from "@/config/global";
import "./styles/ControlPanel.scss"
import { Project, setComponentItem, setItem } from '@/store/module/project';
import ControlWidgetShape from './ControlWidgetShape';
import { useContext } from 'react';
import { contextBox } from "./index";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { throttle } from 'lodash';
export interface contextInterface {
	curWidget: any
	dragWidget: any
	setCurrWidget: any
	setDragWidget: any
	setH5Iframe: any
}
function ControlPanel() {
	const project = useSelector((state: IStoreState) => state.project)
	let { curPage } = project
	const iframe = useRef(null)
	const dispatch = useDispatch()
	const [iframeUrl] = useState<string>(`${global.viewUrl}pages/build/build?operate=build`)
	const [widgetInfoList, setWidgetInfoList] = useState<object[]>([])
	const [iframeHeight, setIframeHeight] = useState<string>("")
	const ctx = useContext(contextBox)
	let { dragStatus } = ctx
	useEffect(() => {
		init()
		getMessage()
	}, [curPage.componentList])
	// useEffect(() => {
	// 	getMessage()
	// }, [curPage.componentList])
	useEffect(() => {
		if (!ctx.dragStatus) {
			console.log('拖入结束')
			// @ts-ignore
			iframe.current.contentWindow.postMessage(
				{
					even: "drop",
					params: ctx.dragWidget,
				},
				"*"
			);
		}
	}, [ctx.dragStatus])
	useLayoutEffect(() => {
		ctx.setH5Iframe(iframe)
	})
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
		let { list } = params;
		// setCurrWidget(list)
		dispatch(setItem((draft: Project) => {
			draft.curPage.componentList = list
		}))
	}
	const setCurrWidget = (params: any) => {
		let { id } = params;
		// 将旧的值保存到redux中
		// let oldItem = ctx.currWidget
		// const dispatch = useDispatch()
		// dispatch(setItem((draft: Project) => {
		// 	draft.curPage.componentList?.map((item:any)=>{
		// 		if(item.id === oldItem.id){
		// 			item = oldItem
		// 		}
		// 	})
		// }))
		let newItem = curPage.componentList?.find(
			(item: any) => id == item.id
		)
		ctx.setCurrWidget(newItem)
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
	const layerMove = (e: any) => {
		throttle(layerMoveFun, 1)(e)
	}
	const layerMoveFun = (e: any) => {
		e.stopPropagation()
		console.log("物料拖拽移动,控制waiting移动");
		// console.log(e)
		if (!ctx.dragStatus) return;
		let type = e.target.getAttribute("type");
		let params = {
			type: "page",
		};

		if (type == "widget") {
			let [y, h] = [e.offsetY, e.target.offsetHeight];
			params = {
				id: e.target.getAttribute("id"),
				type: "widget",
				direction: y < h / 2,
			};
		}
		// console.log('h5Iframe', ctx.h5Iframe)
		// @ts-ignore
		iframe.current.contentWindow.postMessage(
			{
				even: "move",
				params,
			},
			"*"
		);
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
							pointerEvents: dragStatus ? 'none' : 'auto',
						}}
						src={iframeUrl}
						onLoad={init}
					></iframe>
					{/* 拖拽与iframe交互蒙层 */}
					<div
						className="page-layer"
						style={{
							height: iframeHeight + 'px',
							zIndex: dragStatus ? '20' : '1',
						}}
						type="page"
						onDragOver={layerMove}>
						{
							widgetInfoList.map((item: any, index: number) => {
								return <ControlWidgetShape data={item} key={index}>
									<div
										className="page-layer-widget"
										id={item.id}
										type="widget"
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
declare module 'react' {
    interface HTMLAttributes<T> {
        type?: string
    }
}
export default ControlPanel
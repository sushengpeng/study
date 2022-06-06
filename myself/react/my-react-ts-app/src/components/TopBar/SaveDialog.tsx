/*
 * @Autor: flygg123
 * @Date: 2022-05-31 10:12:46
 * @LastEditTime: 2022-06-01 14:30:16
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import { Form, Input, message, Modal } from 'antd'
import global from "@/config/global";
import { useEffect, useRef, useState } from 'react';
import { IStoreState } from '@/store/types';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { editProject } from '@/api/project';
import { cloneDeep } from 'lodash';
import { Project, setItem } from '@/store/module/project';

interface SaveDialogProps {
    showDialog: boolean
    setShowDialog: any
}
function SaveDialog(props: SaveDialogProps) {
    const [form] = Form.useForm();
    const Project = useSelector((state: IStoreState) => state.project)
    const { curPage, project } = Project
    const [iframeUrl] = useState<string>(`${global.viewUrl}pages/build/build?operate=build`)
    const iframe = useRef(null)
    const dispatch = useDispatch()
    useEffect(() => {
        // iframe?.current?.contentWindow && init()
        props.showDialog && init()
    }, [props.showDialog])
    const handleOk = () => {
        let formData = form.getFieldsValue()
        let _curPage = {
            ...curPage,
            ...formData
        }
        let _project = cloneDeep(project)
        _project.pages = _project.pages?.map((item: any) => {
            if (item.id === _curPage.id) {
                console.log(_curPage)
                return _curPage
            }
            return item
        })
        editProject(_project).then((res: any) => {
            message.success(res.message)
            dispatch(setItem((draft: Project) => {
                draft.project = _project
                return draft
            }))
            props.setShowDialog(false)
        }).catch((err: any) => {
            console.log(err)
        })
    }
    const onCancel = () => {
        props.setShowDialog(false)
        form.resetFields()
    }
    const init = () => {
        // @ts-ignore
        iframe.current.contentWindow.postMessage(
            {
                even: "list",
                params: curPage.componentList,
            },
            "*"
        );
    }
    return (
        <Modal
            centered
            okText="保存"
            cancelText="取消"
            visible={props.showDialog}
            onOk={handleOk}
            onCancel={onCancel}
        >
            <Form
                form={form}
                initialValues={{ name: project.name }}
                name="basic"
                autoComplete="off"
                style={{ marginTop: '20px' }}
            >
                <Form.Item
                    name="name"
                    label="商城名称"
                    rules={[{ required: true, message: "请输入商城名称!" }]}
                >
                    <Input placeholder="请输入商城名称" />
                </Form.Item>
            </Form>
            <iframe
                ref={iframe}
                className="w-100"
                frameBorder="no"
                src={iframeUrl}
                onLoad={init}
                style={{ height: '667px' }}
            ></iframe>
        </Modal >
    )
}

export default SaveDialog
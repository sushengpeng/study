/*
 * @Autor: flygg123
 * @Date: 2022-04-27 21:01:01
 * @LastEditTime: 2022-11-09 19:09:31
 * @LastEditors: Please set LastEditors
 * @Description:
 */
import React, { useEffect, useState, useCallback } from "react";
import { login, register } from "@/api/user";
import { Input, Form, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import logo from "@/assets/image/logo.jpeg";
import { UserState, setUserInfo } from "@/store/module/user";
import "./index.scss";
import { IStoreState } from "@/store/types";
interface IndexProps {
    tabState: number;
    setTabState?: any;
}
interface LoginProps {
    setUserInfo: (user: UserState) => void
}
interface LoginFormProps extends IndexProps {
    setUserInfo: (user: UserState) => void
}
const IndexForm = (props: LoginFormProps) => {
    const [form] = Form.useForm();
    const [loading, setLoding] = useState<boolean>(false);
    const navigateTo = useNavigate();
    useEffect(() => {
        form.resetFields();
    }, [props]);
    const onFinish = (params: any) => {
        // console.log("Success:", params);
        setLoding(true);
        login(params)
            .then((res: any) => {
                message.success("登录成功");
                debugger
                props.setUserInfo(res)
                navigateTo("/managet");
            })
            .catch((err: any) => {
                console.log(err)
                message.error("登录失败");
            })
            .finally(() => {
                setLoding(false);
            });
    };
    const onRegisterFinish = (params: any) => {
        register(params)
            .then((res: any) => {
                message.success("注册成功");
            })
            .catch((err: any) => {
                message.error("注册失败");
            });
    };
    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    if (props.tabState === 0) {
        return (
            <Form
                form={form}
                name="basic"
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
            >
                <Form.Item
                    name="account"
                    rules={[{ required: true, message: "请输入账户名!" }]}
                >
                    <Input placeholder="请输入账户名" />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: "请输入密码!" }]}
                >
                    <Input.Password onPressEnter={onFinish} placeholder="输入密码登录" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block loading={loading}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        );
    } else {
        return (
            <Form
                form={form}
                name="basic"
                wrapperCol={{ span: 16 }}
                onFinish={onRegisterFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name="account"
                    rules={[{ required: true, message: "请输入账户名!" }]}
                >
                    <Input placeholder="请输入注册账户" onPressEnter={onRegisterFinish} />
                </Form.Item>

                <Form.Item
                    name="password"
                    rules={[{ required: true, message: "请输入密码!" }]}
                >
                    <Input.Password
                        onPressEnter={onRegisterFinish}
                        placeholder="请输入注册密码"
                    />
                </Form.Item>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: "请输入用户名!" }]}
                >
                    <Input onPressEnter={onRegisterFinish} placeholder="请输入用户名" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                        注册
                    </Button>
                </Form.Item>
            </Form>
        );
    }
};
const IndexTab = (props: IndexProps) => {
    const tabs = [
        { label: "密码登录", value: "login" },
        { label: "免费注册", value: "register" },
    ];
    const changeTab = useCallback((index: number) => {
        props.setTabState(index);
    }, []);
    return (
        <ul className="flex col-bottom mb60">
            {tabs.map((item, index) => {
                return (
                    <li
                        key={index}
                        className={`tab mr20 ${index === props.tabState ? "tab-active" : ""}`}
                        onClick={() => changeTab(index)}
                    >
                        {item.label}
                    </li>
                );
            })}
        </ul>
    );
};
const Index = (props: LoginProps) => {
    const [tabState, setTabState] = useState<number>(0);
    return (
        <div className="login">
            <div className="login-content">
                <div className="login-content-left">
                    <IndexTab tabState={tabState} setTabState={setTabState} />
                    <IndexForm tabState={tabState} setUserInfo={props.setUserInfo} />
                </div>
                <div className="login-content-right">
                    <img className="w-100" src={logo} style={{ width: "100%" }} />
                </div>
            </div>
        </div>
    );
};
// export default Index;
export default connect(() => ({}), {
    setUserInfo
})(Index);

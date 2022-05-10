/*
 * @Autor: flygg123
 * @Date: 2022-05-03 12:29:22
 * @LastEditTime: 2022-05-08 18:30:29
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import { mallIndustryList, mallTypeList } from "@/config/mall";
import { Form, Input, Radio, Select, Modal, message } from 'antd';
import { addProject } from "@/api/project";
import { cloneDeep } from "lodash";
import { rojectModel } from "@/config/project";
import './index.scss'
import { connect } from "react-redux";
import { IStoreState } from "@/store/types";
import { UserState } from "@/store/module/user";
interface dialogProps extends UserState {
  close: any,
  showDialog: boolean,
}
const CreateDialog = (props: dialogProps) => {
  const [form] = Form.useForm();
  // console.log(props)
  const save = (params: any) => {
    let map = new Map();
    mallTypeList.map((item) => map.set(item.type, item.logo));

    let project = {
      ...cloneDeep(rojectModel),
      ...params,
      ...{ userId: props.userInfo.userId, logo: map.get(params.type) },
    };
    // console.log(project)
    addProject(project).then(res => {
      props.close()
      message.success("新增成功");
    })
  }
  const formOk = () => {
    form.submit()
  }
  return (
    <Modal
      title="表单提交"
      visible={props.showDialog}
      onOk={formOk}
      onCancel={props.close}
      okText="确认"
      cancelText="取消"
    >
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        onFinish={save}
        autoComplete="off"
        style={{
          background: '#fff',
          boxSizing: 'content-box',
          borderRadius: '8px',
          // minWidth: '250px',
          // maxWidth: '250px',
          // position: 'absolute',
          // left: 0,
          // right: 0,
          // top: '300px',
          // margin: '0 auto',
          // padding: '50px 20px 10px',
          // height: '224px'
          // display: 'flex',
          // flexDirection: 'column',
          // alignItems: 'center'
        }}
      >
        <Form.Item label="名称" name="name" rules={[{ required: true, message: "请输入名称!" }]}>
          <Input />
        </Form.Item>
        <Form.Item label="类型" name="type" rules={[{ required: true, message: "请选择类型!" }]}>
          <Radio.Group>
            {
              mallTypeList.map((item, index) => {
                return <Radio value={item.type} key={index}>{item.title}</Radio>
              })
            }
          </Radio.Group>
        </Form.Item>
        <Form.Item label="行业" name="industry" rules={[{ required: true, message: "请选择行业!" }]}>
          <Select>
            {
              mallIndustryList.map((item, index) => {
                return <Select.Option value={item.value} key={index}>{item.label}</Select.Option>
              })
            }
          </Select>
        </Form.Item>
        {/* <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type='primary' htmlType="submit" shape='round' style={{ width: '50%' }}>保存</Button>
        </Form.Item> */}
      </Form>
    </Modal>
  )
}

export default CreateDialog
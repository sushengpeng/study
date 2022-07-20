/*
 * @Autor: flygg123
 * @Date: 2022-06-23 10:19:23
 * @LastEditTime: 2022-06-23 16:32:29
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import { Button, Checkbox, Form, Input, Upload } from 'antd'

function goodEdit() {
  const onFinish = () => { }
  const onFinishFailed = () => { }
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="商品名"
        name="goodsName"
        rules={[{ required: true, message: '必填项' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="商品描述"
        name="goodsDescribe"
        rules={[{ required: true, message: '必填项' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="商品封面"
        name="goodsPicture1"
      >
        <Upload></Upload>
      </Form.Item>
      <Form.Item
        label="商品图"
        name="goodsPicture2"
        rules={[{ required: true, message: '必填项' }]}
      >
        <Upload></Upload>
      </Form.Item>

      <Form.Item
        label="价格"
        name="price"
        rules={[{ required: true, message: '必填项' }]}
      >
        <Input type='number' />
      </Form.Item>

      <Form.Item
        label="划线价"
        name="underLinePrice"
        rules={[{ required: true, message: '必填项' }]}
      >
        <Input type='number' />
      </Form.Item>

      <Form.Item
        label="商品详情"
        name="goodsDetail"
        rules={[{ required: true, message: '必填项' }]}
      >
        <Input type='number' />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default goodEdit
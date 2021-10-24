
import Mock from 'mockjs'
import User from './user'
const baseUrl = process.env.BASE_URL 
Mock.setup({
  timeout:'1000-2000'
})
// 此处会劫持/root/login/checkMemberLogin接口，并返回数据
Mock.mock('/root/login/checkMemberLogin', 'post', () => {
  // 返回模拟数据
  return User.userInfo
})



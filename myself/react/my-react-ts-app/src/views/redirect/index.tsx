/*
 * @Autor: flygg123
 * @Date: 2022-06-22 09:21:43
 * @LastEditTime: 2022-06-22 09:30:01
 * @LastEditors: Please set LastEditors
 * @Description: 
 */
import { getToken } from '@/utils/cookie'
import { Navigate } from "react-router-dom"
function index() {
    let hasToken = getToken()
    if (hasToken) {
        return <Navigate to={'/managet'} />
    } else {
        return <Navigate to={'/login'} />
    }
}

export default index
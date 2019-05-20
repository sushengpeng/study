// 这就是我的入口文件
import './css/reset.css'
import movies from './modules/movies'
import {createHTML} from './modules/createHTML'
import render from './modules/render'

const html = createHTML(movies)
render(document.querySelector('ul'), html)

const a = 2

import {num} from './modules/demo'
console.log(num)
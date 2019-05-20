import $ from 'jquery'
import _ from 'loadsh'
import move from './move.js'
import num from './base'
$(function () {
  let index = 0
  $('.next').on('click', function () {
    index++
    move(index)
  })
})
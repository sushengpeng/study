import $ from 'jquery'
function move(index) {
  $('ul').animate({
    left: -index * 500 + 'px'
  })
}

export default move
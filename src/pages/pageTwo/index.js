import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'

const Hello = () => <div>我是 PageOne 页面的组件</div>

ReactDOM.render(<Hello />, document.getElementById('root'))

$(() => {
  $('#root').html('我是 PageTwo 页面')
})

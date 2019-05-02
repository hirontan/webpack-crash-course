import _ from 'lodash'
// import { NAME, NiJou } from './utilities' // 自前の場合は、相対パス。JSの場合は拡張子は省略できる
// import { NAME as NAME_OF_HAM } from './utilities' // 名前の別名として扱うときにもasを利用する
// import Tiger from './utilities' // デフォルトを利用してみる。デフォルトが指定されている場合は、クラス名と違っていても利用できる

// console.log(Tiger.say());

import './style.css'
// console.log(style.toString()) // toString関数を持っているので、利用するとCSSが出力できる

import './style.scss'
import logo from './logo.png'

function component() {
  const element = document.createElement('div')
  const array = ['Hello', 'webpack', '!!']
  element.innerHTML = _.join(array, ' ')
  return element
}

document.body.appendChild(component());
document.body.classList.add('haikei')

const image = new Image()
image.src = logo
document.body.appendChild(image)

import _ from 'lodash'

function component() {
  const element = document.createElement('div')
  const array = ['Hello', 'webpack']
  element.innerHtml = _.join(array, ' ')
  return element
}

document.body.appendChild(component());

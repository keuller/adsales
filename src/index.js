import 'babel-polyfill'
import 'index.css'
import { render } from 'react-dom'
import App from 'containers/application'

document.addEventListener('DOMContentLoaded', (evt) => {
  render(<App/>, document.querySelector('#app'))
  console.log('application loaded!')
})

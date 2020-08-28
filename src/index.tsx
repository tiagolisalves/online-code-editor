import React from 'react'
import { render } from 'react-dom'
import { App } from './app/App'
import 'highlight.js/styles/monokai-sublime.css'

const Application = () => <App></App>

export { Application }

render(<Application />, document.getElementById('app'))

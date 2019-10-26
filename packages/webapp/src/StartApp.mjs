import React from 'react'
import { App } from '@local/react-frontend'
import ReactDOM from 'react-dom'
import Page from './Page.mjs'

const appContainer = document.createElement('div')
ReactDOM.render(Page, appContainer)

document.body.appendChild(appContainer)

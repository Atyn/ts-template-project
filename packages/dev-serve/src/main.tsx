import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import './index.css'
import { Page } from '@local/react-components'

const element = document.createElement('div')
ReactDOM.createRoot(element).render(
	<React.StrictMode>
		<Page />
	</React.StrictMode>,
)
document.body.appendChild(element)

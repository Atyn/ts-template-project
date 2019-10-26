import React from 'react'
import ReactDOM from 'react-dom'
import App from '../../serve/src/node_modules/@local/react-frontend'

const appConfig = {
	headerConfig: {
		title: 'Hello header',
	},
	footerConfig: {},
}

ReactDOM.render(React.createElement(App, { appConfig }), document.body)

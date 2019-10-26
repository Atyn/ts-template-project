import React from 'react'
import { App } from '@local/react-frontend'

const appConfig = {
	headerConfig: {
		title: 'Hello header',
	},
	footerConfig: {},
}

export default React.createElement(App, {
	appConfig,
})

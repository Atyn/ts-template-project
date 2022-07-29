import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { App } from '@local/react-components'

export default class AppStarter {
	private element: Element
	constructor(element: Element) {
		this.element = element
	}
	start() {
		ReactDOM.render(
			React.createElement(
				App,
				{
					appConfig: {
						headerConfig: {
							title: 'Title',
						},
					},
				} as React.Attributes,
				null,
			),
			this.element,
		)
	}
}

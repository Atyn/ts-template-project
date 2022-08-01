import * as React from 'react'
import { App } from '@local/react-components'
import { createRoot } from 'react-dom/client'

export default class AppStarter {
	private element: Element
	constructor(element: Element) {
		this.element = element
	}
	start() {
		const root = createRoot(this.element)
		root.render(
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
		)
	}
}

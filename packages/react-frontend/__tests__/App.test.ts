import App from '../src/App'
import * as React from 'react'

describe('Render App', () => {
	it('should render without crashing', async () => {
		React.createElement(App)
	})
})

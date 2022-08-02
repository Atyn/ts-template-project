import * as React from 'react'
import App from './App'

export default class extends React.Component {
	render() {
		return (
			<App
				appConfig={{
					headerConfig: {
						title: 'Helloo',
					},
				}}
			></App>
		)
	}
}

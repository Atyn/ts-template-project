import * as React from 'react'
import IAppConfig from '@local/types/IAppConfig'
import Header from './Header'

export default class extends React.Component {
	props: {
		appConfig: IAppConfig
	} = {
		appConfig: {
			headerConfig: {},
		},
	}
	render(): JSX.Element {
		return (
			<div
				style={{
					fontFamily: 'arial',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<Header headerConfig={this.props.appConfig.headerConfig} />
			</div>
		)
	}
}

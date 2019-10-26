import React from 'react'
import IHeaderConfig from '@local/types/IHeaderConfig'

export default (props: { headerConfig: IHeaderConfig }) => (
	<div
		style={{
			fontFamily: 'arial',
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '300px',
			backgroundColor: 'rgba(0,0,0,0.1)',
			backgroundImage: props.headerConfig.backgroundUrl,
		}}
	>
		<h2>{props.headerConfig.title}</h2>
	</div>
)

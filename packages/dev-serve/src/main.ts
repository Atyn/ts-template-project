import './index.css'
import AppStarter from '@local/app'

const element = document.body.querySelector('#root')
if (element) {
	const appStarter = new AppStarter(element)
	appStarter.start()
}

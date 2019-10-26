import ReactDOMServer from 'react-dom/server.js'
import Fs from 'fs'
import Path from 'path'
import Page from '../src/Page.mjs'

const OUTPUT_PATH = Path.resolve('dist', 'index.html')

main().catch((error) => {
	// eslint-disable-next-line no-console
	console.error(error)
	process.exit(1)
})

async function main() {
	const appContent = ReactDOMServer.renderToStaticMarkup(Page)
	const html = [
		'<!DOCTYPE html>',
		'<head><style>body,html{margin:0;padding:0;}</style></head>',
		'<body>',
		appContent,
		'</body>',
	].join('\n')
	await Fs.promises.mkdir(Path.dirname(OUTPUT_PATH), { recursive: true })
	await Fs.promises.writeFile(OUTPUT_PATH, html)
	return null
}

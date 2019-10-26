import { fromRollup } from '@web/dev-server-rollup'
import rollupCommonjs from '@rollup/plugin-commonjs'
import Path from 'path'

const commonjs = fromRollup(rollupCommonjs)

export default {
	nodeResolve: true,
	watch: true,
	// preserveSymlinks: false,
	rootDir: '../../',
	esbuildTarget: 'auto',
	plugins: [commonjs({})],
}

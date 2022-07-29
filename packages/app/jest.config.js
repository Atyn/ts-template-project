module.exports = {
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},
	cacheDirectory: 'tmp/jest/',
	testMatch: ['**/test/**/*.test.ts', '**/test/**/*.test.tsx'],
}

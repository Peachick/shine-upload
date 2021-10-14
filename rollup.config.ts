// build entry
import resolve from 'rollup-plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'
import { name as packageName } from './package.json'

const libName = normalizeName(packageName)

export default {
	input: 'src/index.ts',

	output: {
		file: 'dist/index.js',
		sourcemap: true,
		format: 'umd',
		name: libName
	},

	plugins: [
		typescript({ useTsconfigDeclarationDir: true }),
		resolve(),
		json(),
	]
}


function normalizeName(name) {
	if (!name) return
	const nameParts = name.split('-')
	let results = ''
	nameParts.forEach((part) => {
		const firstWord = part.charAt(0)
		results += firstWord.toUpperCase() + part.substr(1)
	})
	return results
}

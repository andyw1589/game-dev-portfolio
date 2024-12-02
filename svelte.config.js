import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {
			base: process.argv.includes('dev') ? '' : "/game-dev-portfolio"
		}
	}
};

export default config;
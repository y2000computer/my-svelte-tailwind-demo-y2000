import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	dev:{
	port:5173,
	strictPort:false,
	},
	preview:{
	port:80,
	strictPort:false,
	}
});

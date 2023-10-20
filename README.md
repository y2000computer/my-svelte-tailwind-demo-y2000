# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.



--------------------------------------------------
--Install Tailwind CSS with SvelteKit
--------------------------------------------------
reference: https://tailwindcss.com/docs/guides/sveltekit

/1.Create your project

npm create svelte@latest my-svelte-tailwind-demo-y2000
cd my-svelte-tailwind-demo-y2000

Next steps:
  1: cd my-svelte-tailwind-demo-y2000
  2: npm install
  3: git init && git add -A && git commit -m "Initial commit" (optional)
  4: npm run dev -- --open
  
  
/2.Install Tailwind CSS  

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p



/3. Enable use of PostCSS in <style> blocks

import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: vitePreprocess()
};
export default config;


/4. Configure your template paths

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: []
};


/5.Add the Tailwind directives to your CSS

Create a ./src/app.css file and add the @tailwind directives for each of Tailwind’s 
layer

@tailwind base;
@tailwind components;
@tailwind utilities;

/6.Import the CSS file

Create a ./src/routes/+layout.svelte file and import the newly-created app.css file.

<script>
  import "../app.css";
</script>

<slot />

/7.Start your build process

npm run dev


/8. Start using Tailwind in your project
Start using Tailwind’s utility classes to style your content, making sure to 
set lang="postcss" for any <style> blocks that need to be processed by Tailwind.

<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>



--------------------------------------------------
--Adpater Cloudflare
--------------------------------------------------

npm install -D @sveltejs/adapter-cloudflare

edit svelte.config.js

//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(
				{
				// See below for an explanation of these options
				routes: {
					include: ['/*'],
					exclude: ['<all>']
				}
				}

		)
	}
};

export default config;



# What is NPM

NPM stands for Node Package Manager and it is used to install and remove external packages.

## What happens when we use ``` npm run dev ```

`npm run dev` runs the script named "dev" from the `scripts` section of your project's `package.json`.

Here's a concise breakdown of the pieces involved and what actually happens:

- package.json: This file lives at your project root and defines metadata for the project (name, version, dependencies) and a `scripts` object. Example:

npx: Node package Execute

```json
{
	"name": "my-app",
	"version": "1.0.0",
	"scripts": {
		"dev": "vite",
		"build": "vite build",
		"start": "node server.js"
	}
}
```

- node_modules: When you install packages with `npm install`, dependencies are added to the `node_modules` folder. Tools like `vite`, `webpack`, or `react-scripts` are usually installed as dev dependencies there.

- package-lock.json: This file locks exact versions of installed packages to ensure reproducible installs across machines.

- How `npm run dev` is executed:
	1. npm looks inside `package.json` for a `scripts` entry named `dev`.
	2. It spawns a shell and runs whatever command string is attached to that script.
	3. If the command is a binary (for example, `vite`, `webpack`, or `react-scripts`), npm will resolve it from `./node_modules/.bin` first. That means you can call installed local binaries without globally installing them.

Example: if `dev` is `vite`, npm will actually run `./node_modules/.bin/vite` if present.

- Environment variables and modes: Many tools detect `NODE_ENV` or provide a `development` mode when run via `npm run dev`. Some projects set environment variables in the script (for example using `cross-env` for cross-platform compatibility):

```json
"scripts": {
	"dev": "cross-env NODE_ENV=development vite"
}
```

- `npm start` special case: Historically, `npm start` can be run with just `npm start` (no `run`) and npm treats `start` as a conventional script name. For `dev`, you must use `npm run dev`.

- npx vs npm run: `npx <pkg>` temporarily downloads and runs a package (or runs a binary from `node_modules/.bin`), while `npm run <script>` executes a script defined in `package.json`.

Troubleshooting tips:
- If `npm run dev` fails with `command not found`, ensure you ran `npm install` and that the package providing the dev server (e.g., `vite` or `react-scripts`) is listed in `devDependencies`.
- Check `./node_modules/.bin` — installed binaries should be symlinked there.
- Use `npm run dev --silent` to remove npm's own log noise, or `npm run dev -- --port 3001` to pass arguments to the script (note the `--` to forward args).

Common examples of `dev` scripts you might see:
- Vite (modern React/Vanilla setups):
	"dev": "vite"
- Create React App (older CRA setups):
	"start": "react-scripts start"  (CRA uses `npm start`, not `npm run dev` by default)
- Next.js:
	"dev": "next dev"

Try it (run from your project root):
```bash
# install dependencies (if you haven't already)
npm install

# run the dev script defined in package.json
npm run dev
```

If you'd like, I can add a short example `package.json` file to this repo showing a few common scripts (Vite, CRA, Next) and explain how to customize them.



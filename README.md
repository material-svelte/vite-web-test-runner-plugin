<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2021.svg?style=for-the-badge" alt="maintained">
  <a href="https://github.com/material-svelte/vite-web-test-runner-plugin/blob/main/LICENSE.md"><img src="https://img.shields.io/npm/l/vite-web-test-runner-plugin.svg?style=for-the-badge" alt="license"></a>
  <a href="https://www.npmjs.com/package/vite-web-test-runner-plugin"><img src="https://img.shields.io/npm/v/vite-web-test-runner-plugin.svg?style=for-the-badge" alt="npm package"></a>
</p>
<br/>

# vite-web-test-runner-plugin

A [@web/test-runner](https://modern-web.dev/docs/test-runner/overview/) plugin to test Vite-powered projects. This plugin automatically connects to the Vite project in the current directory, loads the project configuration, and the uses your already-configured Vite build pipeline to build each test file.

## Usage

```bash
npm install vite-web-test-runner-plugin --save-dev
```

```js
// web-test-runner.config.js
const vite = require("vite-web-test-runner-plugin");

module.exports = {
  plugins: [vite()],
};
```

## Options

None! If you need to configure Vite, you can do so in your project `vite.config.js` file.

## Notes

- some frameworks might require a custom `testRunnerHtml` (eg [svelte](examples/svelte/web-test-runner.config.js) and [react](examples/react/web-test-runner.config.js))
- vue is currently defunct

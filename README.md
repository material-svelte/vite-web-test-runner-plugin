# vite-web-test-runner-plugin

A [@web/test-runner](https://modern-web.dev/docs/test-runner/overview/) plugin to test Vite-powered projects. This plugin automatically connects to the Vite project in the current directory, loads the project configuration, and the uses your already-configured Vite build pipeline to build each test file.

## Usage

```
npm install vite-web-test-runner-plugin --save-dev
```

```
// web-test-runner.config.js
const vite = require('vite-web-test-runner-plugin');

module.exports = {
  plugins: [vite()],
};
```

## Options

None! If you need to configure Vite, you can do so in your project `vite.config.js` file.

## Notes

- some frameworks might require a custom `testRunnerHtml` (eg [svelte](examples/svelte/web-test-runner.config.js) and [react](examples/react/web-test-runner.config.js))
- vue is currently defunct

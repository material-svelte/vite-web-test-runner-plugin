const vite = require('vite-web-test-runner-plugin');
module.exports = {
  plugins: [
    vite(),
  ],
  coverageConfig: {
    include: [
      'src/**/*.{js,jsx,ts,tsx}'
    ]
  },
  testRunnerHtml: testFramework => `
    <html>
      <head>
        <script>
          // Note: globals expected by @testing-library/react
          global = window;
          process = { env: {} };
        </script>
        <script type="module">
          // Note: adapted from https://github.com/vitejs/vite/issues/1984#issuecomment-778289660
          // Note: without this you'll run into https://github.com/vitejs/vite-plugin-react/pull/11#discussion_r430879201
          window.__vite_plugin_react_preamble_installed__ = true;
        </script>
        <script type="module" src="${testFramework}"></script>
      </head>
    </html>
  `,
};

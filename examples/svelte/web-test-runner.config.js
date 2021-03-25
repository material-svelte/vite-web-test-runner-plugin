const vite = require('vite-web-test-runner-plugin');
module.exports = {
  plugins: [
    vite(),
  ],
  testRunnerHtml: testFramework => `
    <html>
      <head>
        <script>
          // Note: globals expected by @testing-library/svelte
          global = window;
          process = { env: {} };
        </script>
        <script type="module" src="${testFramework}"></script>
      </head>
    </html>
  `,
};

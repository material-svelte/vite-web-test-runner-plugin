const vite = require('vite-web-test-runner-plugin');

const ignoredBrowserLogs = [
  '[vite] connecting...',
  '[vite] connected.',
];

module.exports = {
  plugins: [
    vite(),
  ],
  coverageConfig: {
    include: [
      'src/**/*.{svelte,js,jsx,ts,tsx}'
    ]
  },
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
  filterBrowserLogs: ({ args }) => {
    return !args.some((arg) => ignoredBrowserLogs.includes(arg));
  },
};

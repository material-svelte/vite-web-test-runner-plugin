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
      'src/**/*.{vue,js,jsx,ts,tsx}'
    ]
  },
  testRunnerHtml: testFramework => `
    <html>
      <head>
        <script type="module">
          // Note: globals expected by @testing-library/vue
          window.global = window;
          window.process = { env: {} };
        </script>
        <script type="module" src="${testFramework}"></script>
      </head>
    </html>
  `,
  filterBrowserLogs: ({ args }) => {
    return !args.some((arg) => ignoredBrowserLogs.includes(arg));
  },
};

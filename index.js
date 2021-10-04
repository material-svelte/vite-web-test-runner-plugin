const vite = require("vite");

module.exports = function () {
  /** @type {import('vite').ViteDevServer } */
  let server

  return {
    name: 'vite-plugin',
    async serverStart({app}) {
      server = await vite.createServer({clearScreen: false})
      await server.listen()
    },
    async serverStop() {
      await server.close()
    },
    async serve({request, response, app, originalUrl, req, res, socket}) {
      if (isTestRunnerFile(request.url)) return
      return {body: (await server.transformRequest(request.url)).code}
    },
    transformImport({source}) {
      if (!isTestFilePath(source) || isTestRunnerFile(source)) return
      const {port, https, host} = server.config.server
      return `${https ? 'https' : 'http'}://${host ?? 'localhost'}:${port ?? 80}${source}`
    },
  }
};

const vite = require("vite");
const {isTestFilePath} = require('@web/test-runner')


module.exports = function () {
  /** @type { import('vite').ViteDevServer } */
  let server
  /** @type { (url: string) => boolean } */
  const isTestRunnerFile = url => url.startsWith('/__web-dev-server') || url.startsWith('/__web-test-runner')
  
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

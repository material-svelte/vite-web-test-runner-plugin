const vite = require("vite");

module.exports = function () {
  let server;

  return {
    name: "vite-plugin",

    async serverStart({ app }) {
      server = await vite.createServer({
        clearScreen: false,
      });
      await server.listen();
      const port = server.config.server.port;
      const protocol = server.config.server.https ? "https" : "http";
      app.use((ctx, next) => {
        ctx.redirect(`${protocol}://localhost:${port}${ctx.originalUrl}`);
        return;
      });
    },

    async serverStop() {
      return server.close();
    },
  };
};

const vite = require("vite");

module.exports = function () {
  let server;
  const port = 8001;

  return {
    name: "vite-plugin",

    async serverStart({ app }) {
      app.use((ctx, next) => {
        ctx.redirect(`http://localhost:${port}${ctx.originalUrl}`);
        return;
      });
      server = await vite.createServer({
        server: {
          strictPort: true,
          port,
        },
        clearScreen: false,
      });
      await server.listen();
    },

    async serverStop() {
      return server.close();
    },
  };
};

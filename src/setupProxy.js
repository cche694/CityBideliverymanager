const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://restapi.amap.com/",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};

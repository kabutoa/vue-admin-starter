const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      // 设置别名
      alias: {
        api: path.resolve(__dirname, "./src/api"),
        components: path.resolve(__dirname, "./src/api"),
        store: path.resolve(__dirname, "./src/api"),
      },
    },
  },
});

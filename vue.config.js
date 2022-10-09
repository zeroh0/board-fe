const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: '../board-be/src/main/resources/static',
  devServer: {
    proxy: {
      'api': {
        target: 'http://localhost:8000',
        changeOrigin: true
      }
    }
  }
})

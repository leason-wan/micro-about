const { defineConfig } = require('@vue/cli-service')
const {name} = require('./package.json');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 7100,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd',
      chunkLoadingGlobal: `webpackJsonp_${name}`,
    }
  }
})

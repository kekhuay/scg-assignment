module.exports = {
  chainWebpack: config => {
    config.optimization.splitChunks({
      minSize: 10000,
      maxSize: 200000,
    });
  }
}

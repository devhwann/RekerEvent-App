const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api/', {
      // target: 'https://floating-sierra-27114.herokuapp.com/',
      target: 'http://localhost:4000/',
      changeOrigin: true
    })
  );
};
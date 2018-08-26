/**
 * Route Home
 * Example route
 * @param {*} app
 */

module.exports = function (app) {
  app.get('/', (req, res) =>  res.status(200).json(['ROUTE HOME API EXAMPLE']) );
};

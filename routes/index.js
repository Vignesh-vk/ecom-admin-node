const BaseUrl = '/api/v1/';
module.exports = function(app) {
  app.use(BaseUrl+"faqs", require("../controllers/admin/faq"));
  app.use(BaseUrl+"pages", require("../controllers/admin/pages"));
  app.use(BaseUrl+"countries", require("../controllers/admin/country"));
  app.use(BaseUrl+"category", require("../controllers/admin/category"));
}

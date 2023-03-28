var keystone = require("keystone");

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);

	// SITEWIDE: Head Codes + SEO
	var headCode = keystone.list("HeadCode").model.find().sort({ SortOrder: 1 });
	var seo = keystone.list("SEO").model.find().sort({ SortOrder: 1 });
	view.query("headcode", headCode);
	view.query("seo", seo);

	var locals = res.locals;
	locals.section = "home";
	view.render("index");
};

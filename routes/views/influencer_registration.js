var keystone = require("keystone");

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	var pageTitle = "Influencer Registration";

	// Set Locals stuff
	locals.section = "influencer_registration";
	locals.pageTitle = pageTitle;

	// SITEWIDE: Head Codes + SEO
	var headCode = keystone.list("HeadCode").model.find().sort({ SortOrder: 1 });
	var seo = keystone.list("SEO").model.find().sort({ SortOrder: 1 });
	view.query("headcode", headCode);
	view.query("seo", seo);

	//========{  TEMPLATE OUT  }========//
	view.render("influencer_registration");
};

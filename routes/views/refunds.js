var keystone = require("keystone");

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	var pageTitle = "Refund Policy";

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = "refunds";
	locals.pageTitle = pageTitle;

	var refundPolicy = keystone.list("RefundPolicy").model.find();
	view.query("RefundPolicy", refundPolicy);

	// SITEWIDE: Head Codes + SEO
	var headCode = keystone.list("HeadCode").model.find().sort({ SortOrder: 1 });
	var seo = keystone.list("SEO").model.find().sort({ SortOrder: 1 });
	view.query("headcode", headCode);
	view.query("seo", seo);

	// Render the view
	view.render("refunds");
};

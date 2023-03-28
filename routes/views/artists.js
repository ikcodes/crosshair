var keystone = require("keystone");

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	var pageTitle = "Artists";

	// Set Locals stuff
	locals.section = "artists";
	locals.pageTitle = pageTitle;

	// Queries
	var faqs = keystone.list("ArtistFAQ").model.find().sort({ sortOrder: 1 });
	var featuredImages = keystone
		.list("FeaturedImage")
		.model.find()
		.sort({ sortOrder: 1 });

	// Add unique data to view
	view.query("faqs", faqs);
	view.query("featuredImages", featuredImages);

	// SITEWIDE: Head Codes + SEO
	var headCode = keystone.list("HeadCode").model.find().sort({ SortOrder: 1 });
	var seo = keystone.list("SEO").model.find().sort({ SortOrder: 1 });
	view.query("headcode", headCode);
	view.query("seo", seo);

	// TEMPLATE OUT
	view.render("artists");
};

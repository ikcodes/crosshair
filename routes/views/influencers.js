var keystone = require("keystone");

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	var pageTitle = "Influencers";

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = "influencers";
	locals.pageTitle = pageTitle;

	var faqs = keystone.list("InfluencerFAQ").model.find().sort({ SortOrder: 1 });
	var videoID = keystone.list("InfluencerVideo").model.find();

	view.query("faqs", faqs);
	view.query("video_id", videoID);

	// SITEWIDE: Head Codes + SEO
	var headCode = keystone.list("HeadCode").model.find().sort({ SortOrder: 1 });
	var seo = keystone.list("SEO").model.find().sort({ SortOrder: 1 });
	view.query("headcode", headCode);
	view.query("seo", seo);

	// Render the view
	view.render("influencers");
};

/*==============={ CROSSHAIR MUSIC SITE }============//

This site is built in KeystoneJS on top of MongoDB,
 and lives on AWS EC2 running Ubuntu.
 
DOCS: https://keystonejs.com/documentation/

/*===================================================*/
require("dotenv").config();
var keystone = require("keystone");
console.log("Booting up Crosshair site in: " + process.env.NODE_ENV);

// https://keystonejs.com/documentation/configuration/server-options/
keystone.init({
	//=================================
	//     GENERAL KEYSTONE CONFIG
	//=================================
	name: "Crosshair Music",
	brand: "Crosshair Music",
	static: "public",
	favicon: "public/images/GreenLogo.png",
	views: "templates/views",
	"view engine": "pug",
	"auto update": false,
	session: true,
	auth: true,
	"user model": "User",

	//======================================
	//   ENVIRONMENT-SPECIFIC CONFIG & SSL
	//======================================
	port: process.env.PORT,
	"ssl port": process.env.SSLPORT,
	ssl: process.env.SSLCONFIG,
	letsencrypt: process.env.NODE_ENV === "production" && {
		email: "iankendall17@gmail.com",
		domains: ["www.crosshairmusic.com", "crosshairmusic.com"],
		register: true,
		tos: true,
	},
});

//======================================
//   ROUTE / MODEL CONFIG
//======================================
keystone.import("models");
keystone.set("locals", {
	_: require("lodash"),
	env: keystone.get("env"),
	utils: keystone.utils,
	editable: keystone.content.editable,
});
keystone.set("routes", require("./routes"));
keystone.set("nav", {
	adminTools: ["head-codes", "seos"],
	blog: ["posts", "post-categories"],
	artists: ["artist-faqs", "featured-images", "refund-policies"],
	influencers: ["influencer-faqs", "influencer-videos"],
	contactForm: "enquiries",
	users: "users",
});

keystone.start();

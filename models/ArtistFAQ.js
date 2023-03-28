//==========================================
// ARTIST FAQ MODEL
// https://keystonejs.com/api/list/options/
//==========================================

var keystone = require('keystone');
// var Types = keystone.Field.Types;

var config = {	sortable: true,	};
var ArtistFAQ = new keystone.List('ArtistFAQ', config);

ArtistFAQ.add({
	question: 	{ type: String, initial: true, required: true },
	answer: 		{ type: String, initial: true, required: true },
	updated: 		{ type: Date, default: Date.now },
});

ArtistFAQ.defaultColumns = 'question, answer';
ArtistFAQ.register();
//==========================================
// INFLUENCER FAQ MODEL
// https://keystonejs.com/api/list/options/
//==========================================

var keystone = require('keystone');
// var Types = keystone.Field.Types;

var config = {
	sortable: true,
};
var InfluencerFAQ = new keystone.List('InfluencerFAQ', config);

InfluencerFAQ.add({
	question: 	{ type: String, initial: true, required: true },
	answer: 		{ type: String, initial: true, required: true },
});

InfluencerFAQ.defaultColumns = 'question, answer';
InfluencerFAQ.register();
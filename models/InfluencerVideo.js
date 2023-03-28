//==========================================
// INFLUENCER VIDEO MODEL
// https://keystonejs.com/api/list/options/
//==========================================

var keystone = require('keystone');
// var Types = keystone.Field.Types;

var config = {
  nocreate: true,
	nodelete: true,
	plural: false,
};
var InfluencerVideo = new keystone.List('InfluencerVideo', config);

InfluencerVideo.add({
	videoId: { type: String, initial: true, required: true },
	title:   { type: String, initial: true, required: true },
});

InfluencerVideo.defaultColumns = 'title';
InfluencerVideo.register();
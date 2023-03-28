var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * FeaturedImage Model
 * ==========
 */

var FeaturedImage = new keystone.List('FeaturedImage', {
	map: { name: 'title' },
	sortable: true,
});

FeaturedImage.add({
	title:	{ type: String, required: true, initial: true, },
	image:	{ type: Types.CloudinaryImage },
	url: 		{ type: String, initial: true, },
});

FeaturedImage.defaultColumns = 'title';
FeaturedImage.register();

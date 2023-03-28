//=============================================
// HEAD CODE MODEL
// Plaintext field to spit out head code 
//  snippets in the site's header. (GA, etc.)
// 
// https://keystonejs.com/api/list/options/
//=============================================

var keystone = require('keystone');
var Types = keystone.Field.Types;

var config = {
  sortable: true,
  plural: false,
};
var SEO = new keystone.List('SEO', config);

SEO.add({
	title: { type: String, initial: true, required: true },
	name: { type: String, initial: true, required: true },
  content: { type: Types.Textarea, height: 400}
});

SEO.defaultColumns = 'name, content';
SEO.register();
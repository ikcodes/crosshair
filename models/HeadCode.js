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
var HeadCode = new keystone.List('HeadCode', config);

HeadCode.add({
  title: { type: String, initial: true, required: true },
  code: { type: Types.Textarea, height: 400, initial: true, required: true }
});

HeadCode.defaultColumns = 'title, code';
HeadCode.register();
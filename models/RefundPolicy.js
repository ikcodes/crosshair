//==========================================
// ARTIST FAQ MODEL
// https://keystonejs.com/api/list/options/
//==========================================

var keystone = require('keystone');
var Types = keystone.Field.Types;

var config = {	
	sortable: true,  
	plural: false,  
};
var RefundPolicy = new keystone.List('RefundPolicy', config);

RefundPolicy.add({
	title:    { type: String, initial: true, required: true },
  policy:   { type: Types.Html, wysiwyg: true, height: 400 },
	updated:  { type: Date, default: Date.now },
});

RefundPolicy.defaultColumns = 'title, updated';
RefundPolicy.register();
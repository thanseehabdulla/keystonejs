var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * User Model
 * ==========
 */
var Project = new keystone.List('project');

Project.add({
	name: { type: Types.Text, required: true, index: true },
	handleby: { type: Types.Name, index: true },
});


//
// // Provide access to Keystone
// Project.schema.virtual('canAccessKeystone').get(function () {
// 	return this.isAdmin;
// });


/**
 * Registration
 */
Project.defaultColumns = 'name,handleby';
Project.register();

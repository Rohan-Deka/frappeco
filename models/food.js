var mongoose = require("mongoose"),
	mongoosePaginateV2 = require("mongoose-paginate-v2"),
	slug = require('mongoose-slug-updater');

mongoose.plugin(slug)

var foodSchema = new mongoose.Schema({
	title: String,
	slug1: { 
		type: String, 
		uniqueGroupSlug: ['category'],
        slugPaddingSize: 2,
		slug: "title",
		index: true
	},
	image: String,
	summary: String,
	category: String,
	imageId : String,
	tagOutput : String,
	approach: { 
		feature : {type : Boolean , default : false}, 
		popular: {type : Boolean , default : false},
		recommend: {type : Boolean , default : false} 
	          },
	description: String,
	author : {
		id : {
			type	: mongoose.Schema.Types.ObjectId,
			ref		: "User"
		},
		username: String
	},
	date : String,
	comments : [
	   { type : mongoose.Schema.Types.ObjectId,
	     ref : "Comment"
	   }
	]
});
// var Campground = mongoose.model("Campground",campgroundSchema);

foodSchema.plugin(mongoosePaginateV2);

module.exports = mongoose.model("Food",foodSchema);
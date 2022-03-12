const mongoose = require("mongoose");
const Joi = require("joi");
const { ObjectId } = mongoose.Schema;

const contactSchema = new mongoose.Schema({
	user: {
		type: ObjectId,
		ref: "User",
		required: true,
	},
	name: { type: String, required: true },
	phonenumber: { type: String, required: true },
	email: { type: String, required: true },
});

const Contact = mongoose.model("contact", contactSchema);

const validate = (data) => {
	const schema = Joi.object({
		user: Joi.required().label("User"),
		name: Joi.string().required().label("Name"),
		phonenumber: Joistring().required().label("Phone Number"),
		email: Joi.string().required().label("Email"),
	});
	return schema.validate(data);
};

module.exports = { Contact, validate };

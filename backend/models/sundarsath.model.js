const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sundarsathSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    emailID: { type: String },
    dob: { type: Date, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
    nationality: { type: String, required: true },
    bloodGroup: { type: String }
}, {
    timestamps: true,
});

const Sundarsath = mongoose.model('Sundarsath', sundarsathSchema);

module.exports = Sundarsath;
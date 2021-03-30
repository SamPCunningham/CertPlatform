import mongoose from 'mongoose';
//mongoose allows easier passing of data to the mongodb server
//schema is what the db will expect/accept as data
const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})
import mongoose from 'mongoose';
import{ UserSchema } from '../models/trainingModel';

const User = mongoose.model('User', UserSchema);
//Add new user - uses mongo User schema from trainingModel to take the request body and make a new User
export const addNewUser = (req, res) => {
    let newUser = new User(req.body);

    newUser.save((err, User) => {
        if (err) {
            res.send(err);
        }
        res.json(User);
    });
};
//function for get request for all users; User.find is mongo request {} is empty to grab all
export const getUsers = (req, res) => {
    User.find({},(err, User) => {
        if (err) {
            res.send(err);
        }
        res.json(User);
    });
};
//get single user using mongo id, gets the id from the req body User.findById is mongo command for finding in db
export const getUserWithId = (req, res) => {
    User.findById(req.params.UserId,(err, User) => {
        if (err) {
            res.send(err);
        }
        res.json(User);
    });
};
//update single user _id: req.params.UserId sets the mongo id thats searched for to the 
//one passed in the request body. {new: true} makes sure updated user is returned not the OG
export const UpdateUser = (req, res) => {
    User.findOneAndUpdate({_id: req.params.UserId}, req.body, {new: true}, (err, User) => {
        if (err) {
            res.send(err);
        }
        res.json(User);
    });
};
//delete single user
export const deleteUser = (req, res) => {
    User.remove({_id: req.params.UserId},(err, User) => {
        if (err) {
            res.send(err);
        }
        res.json({message: 'Successfully deleted User'});
    });
};

import { addNewUser, getUsers, getUserWithId, UpdateUser, deleteUser } from '../controllers/trainingController';

const routes = (app) => {
    app.route('/users')
        .get(getUsers)
    //post endpoint
        .post(addNewUser);
    app.route('/user/:UserId')
        //get specific user
        .get(getUserWithId)
        //update specific user
        .put(UpdateUser)
        //delete single user route
        .delete(deleteUser);
}

export default routes;

//left off at put endpoint
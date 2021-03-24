import { addNewUser, getUsers, getUserWithId } from '../controllers/trainingController';

const routes = (app) => {
    app.route('/users')
        .get(getUsers)
    //post endpoint
        .post(addNewUser);
    app.route('/user/:UserId')
        .get(getUserWithId)
}

export default routes;
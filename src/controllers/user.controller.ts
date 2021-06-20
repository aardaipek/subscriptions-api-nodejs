import firebaseApp from '../config/firebase.config';
import logs from '../config/log';
import User from '../models/user.model';

const firestore = firebaseApp.firestore();

// Collections
const userCollection = "user";

const addUser = async (req, res, next) => {
    try {
        const data = req.body;
        const userSubCollection = firestore.collection(userCollection);
        await userSubCollection.doc("arda").set(data);

        res.send(logs.info("Development", "Your user record has created"));
    } catch (err) {
        logs.error("Development", err.message)
        res.status(400).send("Something wrong!");
    }
}

export default { addUser };
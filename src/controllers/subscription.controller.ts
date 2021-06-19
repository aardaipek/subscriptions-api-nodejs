import firebaseApp from '../config/firebase.config';
import logs from '../config/log';
import subscription from '../models/subscription.model';

const firestore = firebaseApp.firestore();

// Collections
const subscriptionCollection = "subscription";

const addSubscription = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection(subscriptionCollection).doc().set(data);
        res.send(logs.info("Development", "Your subscription record has created"));
    } catch (err) {
        logs.error("Development", err.message)
        res.status(400).send("Something wrong!");
    }
}

export default { addSubscription };
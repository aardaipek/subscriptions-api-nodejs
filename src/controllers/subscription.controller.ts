import firebaseApp from "../config/firebase.config";
import logs from "../config/log";
import subscription from "../models/subscription.model";

const firestore = firebaseApp.firestore();

// Collections
const subscriptionCollection = "subscriptions";

const addSubscription = async (req, res, next) => {
  try {
    const username = req.body.username;
    const subType = req.body.type;
    const data = req.body.data;
    const subref = firestore
      .collection(subscriptionCollection)
      .doc(username)
      .collection(subscriptionCollection)
      .doc(subType);
    await subref.set(data);
    res.send(logs.info("Development", "Your subscription record has created"));
  } catch (err) {
    logs.error("Development", err.message);
    res.status(400).send("Something wrong!");
  }
};

const getAllUserSubscription = async (req, res, next) => {
  try {
    if (req.body.username) {
      const username = req.body.username;
      var subscriptionArray = [];
      //TODO: token işlemleri ve giriş yapan user ile istek atan user ın aynı olduğunun bulunması gerek
      await firestore
        .collection(subscriptionCollection)
        .doc(username)
        .collection(subscriptionCollection)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            subscriptionArray.push(doc.data());
          });
        });

      res.json(subscriptionArray);
    } else {
      res
        .status(400)
        .send("Username and sub type is required please fill these values");
    }
  } catch (err) {}
};

export default { addSubscription, getAllUserSubscription };

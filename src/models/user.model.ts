import Subscription from "./subscription.model";

class User {
    constructor(name: string, lastname: string, subscription: Subscription, fullname: string) {
        name = name;
        lastname = lastname;
        fullname = name + lastname;
        subscription = subscription;
    }
}

export default User;
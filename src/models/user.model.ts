import Subscription from "./subscription.model";

class User {
    constructor(name: string, lastname: string, subscription: Subscription) {
        name = name;
        lastname = lastname;
        const fullname = name + lastname;
        subscription = subscription;
    }
}

export default User;
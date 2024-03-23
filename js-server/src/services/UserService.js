const CoreInterface = require("../config/CoreInterface");

/**
 * UserService
 */
class UserService extends CoreInterface  {

    constructor(UserModel) {
        super('UserService');
    }

    createUser = async (userData) => {
        return `createUser : ${userData}`;
    };

    updateUser = async (userData) => {
        return null;
    }
}
module.exports = UserService;
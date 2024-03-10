const CoreInterface = require("../config/CoreInterface");


/**
 * UserService
 */
class UserService extends CoreInterface  {

    constructor(UserModel) {
        super('UserService');

        console.log(this.roomService.createRoom(''));
    }

    createUser = async (userData) => {
        return `createUser : ${userData}`;
    };

    updateUser = async (userData) => {
        return null;
    }
}
module.exports = UserService;


/**
 * UserService
 */
class UserService {

    constructor(UserModel) {
    }

    createUser = async (userData) => {
        return `createUser : ${userData}`;
    };
}
module.exports = UserService;
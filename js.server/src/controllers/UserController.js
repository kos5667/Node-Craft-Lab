/**
 *
 */
class UserController {

    constructor(UserServiceInstance) {
        this.UserService = UserServiceInstance
    }

    createUser = async (req, res) => {
        try {
            const newUser = await this.UserService.createUser(req.body);
            res.status(201).send(newUser);
        } catch (error) {
            res.status(400).send(error.message);
        }
    };

    updateUser = async (req, res) => {
        try {
            const newUser = await this.UserService.updateUser(req.body);
            res.status(201).send(newUser);
        } catch (error) {
            res.status(400).send(error.message);
        }
    };


}
module.exports = UserController;
const {RoomServiceInstance} = require("../services");

/**
 * RoomController
 */
/** @type {RoomService} */
class RoomController {

    constructor(RoomServiceInstance) {
        this.RoomService = RoomServiceInstance
    }

    createRoom = async (req, res) => {
        try {
            const newRoom = await this.RoomService.createRoom('go!!');
            res.status(201).send(newRoom);
        } catch (error) {
            console.error(error.message);
            res.status(400).send(error.message);
        }
    }
}
module.exports = RoomController;
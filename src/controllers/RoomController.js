const {RoomServiceInstance} = require("../services");

/**
 * RoomController
 */
/** @type {RoomService} */
let RoomService = null;
class RoomController {

    constructor(RoomServiceInstance) {
        this.RoomService = RoomServiceInstance
    }

    createRoom = async (req, res) => {
        console.log('in... RoomController!!!')
        try {
            console.log(this);
            const newRoom = await this.RoomService.createRoom('go!!');
            // const newRoom = await RoomService.createRoom();
            res.status(201).send(newRoom);
        } catch (error) {
            console.error(error.message);
            res.status(400).send(error.message);
        }
    }
}
module.exports = RoomController;
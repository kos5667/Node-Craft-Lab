const CoreInterface = require("../config/CoreInterface");

/**
 * RoomController
 */
class RoomController extends CoreInterface {

    /**
     *
     * @param {RoomService} RoomService
     */
    constructor(RoomService) {
        super('RoomService');

        console.log(this.roomService.updateRoom())
        // this.RoomService = RoomService;
    }

    createRoom = async (req, res) => {
        try {
            const newRoom = await this.RoomService.createRoom('go!!');
            console.log(this.userService.createRoom())
            res.status(201).send(newRoom);
        } catch (error) {
            console.error(error.message);
            res.status(400).send(error.message);
        }
    }

    updateRoom = async (req, res) => {
        try {
            const newRoom = await this.roomService.updateRoom('go!!')
            res.status(201).send(newRoom);
        } catch (error) {
            console.error(error.message);
            res.status(400).send(error.message);
        }
    }
}
module.exports = RoomController;
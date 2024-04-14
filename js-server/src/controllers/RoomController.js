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
        super('RoomController');
        this.RoomService = RoomService;

        // this.roomService.updateRoom()
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

    updateRoom = async (req, res) => {
        try {
            const newRoom = await this.RoomService.updateRoom('go!!')
            res.status(201).send(newRoom);
        } catch (error) {
            console.error(error.message);
            res.status(400).send(error.message);
        }
    }
}
module.exports = RoomController;
const CoreInterface = require("../config/CoreInterface");

/**
 * RoomService
 */
class RoomService extends CoreInterface {

    constructor() {
        super('RoomService');

        const ns = this.userService.createUser('test');
        console.log(ns);
        console.log('RoomService constructor!!')
    }

    createRoom = async (roomData) => {
        return 'RoomService ok!'
    }

    updateRoom = async (roomData) => {
        return 'RoomService ok!'
    }
}
module.exports = RoomService;
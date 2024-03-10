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

    async createRoom(roomData) {
        return 'RoomService ok!'
    }

    async updateRoom(roomData) {
        return 'RoomService ok!'
    }
}
module.exports = RoomService;
/**
 *
 */
class CoreInterface {
    constructor(fnNm) {
        this.userService = new (require('../services/RoomService'))();
        this.roomService = new (require('../services/RoomService'))();

        console.log('[NODE Initialize Class]', fnNm)
    }

    async health_check() {
    }

    async init() {
    }

    // get userService () { return this.userService };

    /**
     * binding class
     * @return {Promise<void>}
     */
    binding = async () => {

    }
}
module.exports = CoreInterface;
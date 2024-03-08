/**
 * RoomController
 * @param RoomService
 * @return {{createRoom: ((function(*, *): Promise<void>)|*)}}
 */
// const RoomService = require('../services/RoomService')
//
//
// exports.testFn = function  (req, res) {
// }

module.exports = (RoomService) => {
    const createRoom = async (req, res) => {
        console.log('[RoomController]')

        try {
            await RoomService.createRoom(req, res);
            const newRoom = await RoomService.createRoom(req.body);
            res.status(201).send(newRoom);
        } catch (error) {
            res.status(400).send(error.message);
        }
    };

    // 추가 컨트롤러 메서드 정의

    return {
        createRoom
        // 기타 메서드 반환
    };
};

/**
 *
 * @param {RoomController} RoomController
 * @param {Router} router
 * @return {Router}
 */
module.exports = (RoomController, router) => {
    router.get('/createRoom', RoomController.createRoom);
    router.get('/updateRoom', RoomController.updateRoom)

    // 추가 라우트 설정
    return router;
};

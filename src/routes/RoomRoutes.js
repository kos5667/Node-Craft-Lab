/**
 *
 * @param {RoomController} roomController
 * @param {Router} router
 * @return {*}
 */
module.exports = (roomController, router) => {
    router.get('/createRoom', roomController.createRoom);
    // 추가 라우트 설정
    return router;
};

/**
 * UserRoutes.js
 * @param {UserController} UserController
 * @param {Router} router
 * @return {Router}
 */
module.exports = (UserController, router) => {
    router.get('/createUser', UserController.createUser);
    router.get('/updateUser', UserController.updateUser);
    // 추가 라우트 설정

    return router;
};

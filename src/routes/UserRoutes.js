module.exports = (UserController, router) => {
    router.get('/createUser', UserController.createUser);
    // 추가 라우트 설정

    return router;
};

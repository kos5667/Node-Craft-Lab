module.exports = (UserModel) => {
    const createUser = async (userData) => {
        // const user = new UserModel(userData);
        // return await user.save();
        console.log('in....UserService...')
    };

    // 추가 서비스 메서드 정의

    return {
        createUser
        // 기타 메서드 반환
    };
};

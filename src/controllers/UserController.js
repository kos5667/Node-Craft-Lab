/**
 *
 * @param UserService
 * @return {{createUser: ((function(*, *): Promise<void>)|*)}}
 */
module.exports = (UserService) => {
    const createUser = async (req, res) => {
        try {
            const newUser = await UserService.createUser(req.body);
            res.status(201).send(newUser);
        } catch (error) {
            res.status(400).send(error.message);
        }
    };

    // 추가 컨트롤러 메서드 정의

    return {
        createUser
        // 기타 메서드 반환
    };
};

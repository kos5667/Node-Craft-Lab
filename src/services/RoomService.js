module.exports = (RoomModel) => {
    const createRoom = async (roomData) => {
        // const room = new RoomModel(roomData);
        // return await room.save();
        console.log('in......!!!!')
    };

    // 추가 서비스 메서드 정의

    return {
        createRoom
        // 기타 메서드 반환
    };
};

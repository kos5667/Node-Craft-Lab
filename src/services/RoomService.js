module.exports = (RoomModel) => {
    const createRoom = async (roomData) => {
        // const room = new RoomModel(roomData);
        // return await room.save();
        console.log('[RoomService] in......!!!!')
        return 'ok!!'
    };

    const updateRoom = async (roomData) => {
        console.log('updateRoom');
    };

    // 추가 서비스 메서드 정의
    return {
        createRoom,
        updateRoom,
        // 기타 메서드 반환
    };
};

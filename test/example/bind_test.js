const axios = require('axios');
const HOST = 'http://localhost:3000'
const ROOM_HOST = `${HOST}/api/rooms/`
const USER_HOST = `${HOST}/api/users/`

/**
 * Binding Test.
 */
import('chai').then(mod => {
    const should = mod.should();
    const expect = mod.expect;
    const assert = mod.assert;

    describe('## Binding Test', function() {
        describe('Room --->', function() {
            it('Call API Room Fn => createRoom', async function () {
                const response = await axios.get(`${ROOM_HOST}/createRoom`);
                console.log(response.data);
            });
        })

        describe('User --->', function() {
            it('expect ', () => {
                // expect('ee').to.be.a(numbers);
            });
        })
    })
});
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
            it('Call API Room => [createRoom]', async function () {
                const response = await axios.get(`${ROOM_HOST}/createRoom`);
                expect(response.data).not.null;
            });

            it('Call API Room => [updateRoom]', async function () {

            });
        })

        describe('User --->', function() {
            it('Call API User => [createUser] ', () => {
            });

            it('Call API User => [updateUser] ', () => {
            });

            it('Call API User => [deleteUser] ', () => {
            });
        })
    })
});
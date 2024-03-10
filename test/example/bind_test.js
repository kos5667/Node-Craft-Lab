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
            it('Call API Room Fn => createRoom', function () {
                // axios.get(`${ROOM_HOST}/createRoom`)
                //     .then((r) => {
                //         console.log('in...', r.data);
                //         expect(r.data).to.null(null);
                //         assert.isNull(r.data);
                //     });
            });
        })
    })
});
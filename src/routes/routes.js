/**
 * 의존성 주입.
 * Routes > Controller > Service > Model.
 */
const express = require('express');
const router = express.Router();
const {
    RoomControllerInstance
} = require('../controllers/index');
// Management User.
// const UserRoutes = require('./UserRoutes')(UserController, router);
// Management Room.
const RoomRoutes = require('./RoomRoutes')(RoomControllerInstance, router);

module.exports = (app) => {
    // app.use('/api/users', UserRoutes);
    app.use('/api/rooms', RoomRoutes);
    app.get('/', (req, res) => { res.send('Hello World!'); });

    require('../controllers/index');
}
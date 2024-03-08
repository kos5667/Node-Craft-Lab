/**
 * 의존성 주입.
 * Routes > Controller > Service > Model.
 */
const express = require('express');
const router = express.Router();
const {
    RoomController,
    UserController
} = require('../controllers/index');

// Management User.
const UserRoutes = require('./UserRoutes')(UserController, router);
// Management Room.
const RoomRoutes = require('./RoomRoutes')(RoomController, router);

module.exports = (app) => {
    app.use('/api/users', UserRoutes);
    app.use('/api/rooms', RoomRoutes);
    app.get('/', (req, res) => { res.send('Hello World!'); });

    require('../controllers/index');
}
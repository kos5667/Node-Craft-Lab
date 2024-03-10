/**
 * 의존성 주입.
 * Routes > Controller > Service > Model.
 */
const express = require('express');
const router = express.Router();

const {
    UserController,
    RoomController,
} = require('../controllers/index');

const UserRoutes = require('./UserRoutes')(UserController, router);
const RoomRoutes = require('./RoomRoutes')(RoomController, router);

module.exports = (app) => {
    app.use('/api/users', UserRoutes);
    app.use('/api/rooms', RoomRoutes);

    app.get('/', (req, res) => { res.send('Hello World!'); });
}
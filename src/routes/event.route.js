const express = require("express");
const eventController = require('../controller/event.controller');

const router = express.Router();

router.get('/', eventController.getAllEvents);
router.get('/users', eventController.getEventsByUids);
router.get('/time', eventController.getEventByTime);
router.get('/id/:id([0-9a-f]{24})', eventController.getEventByid);

router.post('/', eventController.createEvent);

module.exports = router;

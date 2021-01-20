const router = require('express').Router();

const { getFights, getFightById } = require('./controllers/fight.controller');
const { getDivisions, getDivision } = require('./controllers/division.controller');
const { getEvents, getEventsById } = require('./controllers/event.controller');
const { getFighters, getFighter } = require('./controllers/fighter.controller');

router.get('/', (req, res) => { res.json({ hello: 'world' }); });
router.get('/fights', getFights);
router.get('/fights/:id', getFightById);
router.get('/divisions', getDivisions);
router.get('/divisions/:id', getDivision);
router.get('/events', getEvents);
router.get('/events/:id', getEventsById);
router.get('/fighters', getFighters);
router.get('/fighters/:id', getFighter);

module.exports = router;

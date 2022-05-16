const router = require('express').Router();

//Create api routes
const userRoutes = require('./user-routes.js');
const projectRoutes = require('./project-routes');
const skillsRoutes = require('./skills-routes.js');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/skills', skillsRoutes);

module.exports = router;
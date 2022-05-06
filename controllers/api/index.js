const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const projectsRoutes = require('./project-routes');
const skillsRoutes = require('./skills-routes.js');

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/skills', skillsRoutes);

module.exports = router;
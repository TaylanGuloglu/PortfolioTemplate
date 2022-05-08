const express = require('express')
const pageController = require('../controllers/pageController');
const projectController = require('../controllers/projectController');

const router = express.Router();

router.route('/').get(pageController.getAllProjects);
router.route('/about').get(pageController.getAboutPage)
router.route('/contact').get(pageController.getContactPage)


module.exports = router;
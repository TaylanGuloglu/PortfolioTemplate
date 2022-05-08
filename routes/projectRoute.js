const express = require('express');

const projectController = require('../controllers/projectController');

const router = express.Router();


router.route('/').get(projectController.getAddPage);
router.route('/').post(projectController.createProject);
router.route('/:id').get(projectController.getProject)
router.route('/:id').delete(projectController.deleteProject);
router.route('/edit/:id').get(projectController.getEditPage)
router.route('/:id').put(projectController.editProject);

module.exports = router;

const Project = require('../models/Project');

  exports.getAddPage = (req, res) => {
  res.status(200).render('add', {
    page_name: 'add',
  });
};  

exports.createProject = async (req, res) => {
  
  try {
    const project = await Project.create({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      link: req.body.link,
    });

    req.flash('success', `${project.name} has been created successfully`);
    res.status(201).redirect('/');
  } catch (error) {
    console.log(error);
    req.flash('error', `${project.name} something happened!!!`);
    res.status(400).redirect('/');
  }
};

exports.getProject = async (req, res) => {
  try {
    const project = await Project.findById({ _id: req.params.id });
    res.render('project', {
      project,
      page_name: 'portfolio',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.getEditPage = async (req, res) => {
  const project = await Project.findOne({ _id: req.params.id });
  res.render('edit', {
    project,
  });
};

exports.editProject = async (req, res) => {
  const project = await Project.findOne({ _id: req.params.id });
  project.name = req.body.name;
  project.description = req.body.description;
  project.category = req.body.category;
  project.link = req.body.link;
  project.save();

  res.redirect(`/portfolio/${req.params.id}`);
};

exports.deleteProject = async (req, res) => {
  const project = await Project.findOne({ _id: req.params.id });
  await Project.findByIdAndRemove(req.params.id);
  res.redirect('/');
};
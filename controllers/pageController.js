const Project = require('../models/Project');

exports.getAllProjects = async(req, res) => {
  const projects = await Project.find({})
    .sort('-dateCreated')
    /*.skip((page - 1) * photosPerPage)
    .limit(photosPerPage);*/
    res.status(200).render('index', {
      page_name: 'index',
      projects
    });
  };

exports.getAboutPage = (req, res) => {
  res.status(200).render('about', {
    page_name: 'about',
  });
};

exports.getContactPage = (req, res) => {
  res.status(200).render('contact', {
    page_name: 'contact',
  });
};


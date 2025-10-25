import * as service from '../services/Blog.service.js';

export const findAll = async (req, res) => {
  const {page, limit, offset} = req.pagination
  try {
    const data = await service.findAll({limit, offset});
    res.status(200).render('./blog_list', {
      success: true,
      pageTitle: "",
      blogs: data.blogs,
      totalItems: data.totalItems,
      totalPages: data.totalPages,
      currentPage: page
    });
  } catch (err) {
  console.log(err)
    res.status(500).render('errors/500', { error: err });
  }
};

export const findById = async (req, res) => {
  try {
    const data = await service.findById(req.params.id);
    res.status(200).render('./blog_single', {
      success: true,
      pageTitle: "Details",
      blog: data,
    });
  } catch (err) {
  console.log(err)
    res.status(404).render('errors/404', { error: err });
  }
};
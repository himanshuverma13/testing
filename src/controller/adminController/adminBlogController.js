import adminBlog from "../../model/adminModel/adminBlog.js";

export const createAdminBlog = async (req, res, next) => {
  try {
    const blog = await adminBlog.create(req?.body);

    if (!blog) res.status(404).send("Blog not created!");

    res.json({
      success: true,
      message: "Blog created successfully",
      status: 200,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getAllBlog = async (req, res, next) => {
  try {
    const blog = await adminBlog.find({});

    if (!blog) res.status(404).send("Blogs not found!");

    res.json({
      success: true,
      status: 200,
      blog,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getBlogById = async (req, res, next) => {
  try {
    const blog = await adminBlog.findById(req?.params?.id);
    if (!blog) res.status(404).send("Blog not found!");

    res.json({
      success: true,
      status: 200,
      blog,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const updateBlog = async (req, res, next) => {
  try {
    const blog = await adminBlog.findByIdAndUpdate(req?.params?.id, req?.body, {
      new: true,
    });
    if (!blog) res.status(404).send("Blog not found!");

    res.json({
      success: true,
      status: 200,
      message: "Blog update successfully",
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const Blog = await adminBlog.findByIdAndDelete(req?.params?.id);

    if (!Blog) return res.status(404).send("Blog not found");

    res.json({
      success: true,
      status: 200,
      message: "Blog delete successfully",
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {createAdminBlog,getAllBlog,deleteBlog,updateBlog,getBlogById}
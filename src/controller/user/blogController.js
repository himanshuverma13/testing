import Blog from "../../model/user/blogModel.js"

export const createBlog = async (req, res) => {
  try {
   await Blog.create(req.body);
   console.log('req.body: ', req.body);
    res.status(201).send("form submitted successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

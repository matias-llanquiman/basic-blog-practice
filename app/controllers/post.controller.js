import * as postService from "../services/post.service.js";

export const getAll = async (req, res) => {
  try {
    res.json(await postService.getAll());
  } catch (error) {
    console.error("Error while getting all post: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getPost = async (req, res) => {
  try {
    res.json(await postService.getPost(req.query.id));
  } catch (error) {
    console.error("Error while getting post: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const create = async (req, res) => {
  try {
    res.json(await postService.create(req.body));
  } catch (error) {
    console.error("Error while creating post: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const update = async (req, res) => {
  try {
    res.json(await postService.update(req.body, req.params.id));
  } catch (error) {
    console.error("Error while updating post: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const remove = async (req, res) => {
  try {
    res.json(await postService.remove(req.params.id));
  } catch (error) {
    console.error("Error while removing post: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

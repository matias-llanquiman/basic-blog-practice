import * as postRepository from "../repositories/post.repository.js";

export const getAll = () => {
  return postRepository.getAll();
};

export const getPost = (id) => {
  return postRepository.getPostbyid(id);
};

export const create = (post) => {
  return postRepository.create(post);
};

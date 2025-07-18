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

export const update = (post, id) => {
  return postRepository.update(post, id);
};

export const remove = (id) => {
  return postRepository.remove(id);
};

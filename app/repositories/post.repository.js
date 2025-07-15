import pool from "./db.repository.js";

export const getAll = async () => {
  const result = await pool.query(
    "SELECT id, title, content, media_url, created_at, updated_at FROM post;",
  );
  return result.rows;
};

export const getPostbyid = async (id) => {
  const result = await pool.query(
    `SELECT id, title, content, media_url, created_at, updated_at FROM post WHERE id = $1`,
    [id],
  );
  return result.rows;
};

export const create = async (post) => {
  const result = await pool.query(
    `INSERT INTO post(title, content, media_url, created_at, updated_at) VALUES($1, $2, $3)`,
    [post.title, post.content ?? null, post.media_url ?? null],
  );
  let message = "Error while inserting data";

  if (result.rowCount) {
    message = "Data inserted successfully";
  }

  return { message };
};

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
    `INSERT INTO post(title, content, media_url) VALUES($1, $2, $3)`,
    [post.title, post.content, post.media_url],
  );
  let message = "Error while inserting data";

  if (result.rowCount) {
    message = "Data inserted successfully";
  }

  return { message };
};

export const update = async (post, id) => {
  const result = await pool.query(
    `UPDATE post 
                        SET title = $1, 
                            content = $2,
                            media_url = $3,
                            updated_at = NOW() 
                        WHERE id = $4`,
    [post.title, post.content, post.media_url, id],
  );
  let message = "Error while updating data";

  if (result.rowCount) {
    message = "Data updated successfully";
  }
  return { message };
};

export const remove = async (id) => {
  const result = await pool.query(`DELETE FROM post WHERE id = $1`, [id]);

  let message = "Error while removing data";

  if (result.rowCount) {
    message = "Value removed successfully";
  }

  return message;
};

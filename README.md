# Node and Express Fundamentals Review 
Project to review and practice Node.js + Express and PostgreSQL.

## Requirements

- Node.js >= 18
- PostgreSQL
- npm

1. Clone this repository

2. Install all dependencies
```sh
npm install
```
3. Configure environment variables
```sh
cp .env.example .env
```
Fill in the required values.

4. Initialize the Database
```sql
CREATE DATABASE blog

CREATE TABLE post (
  id          SERIAL PRIMARY KEY,
  created_at  TIMESTAMP NOT NULL DEFAULT now(),
  updated_at  TIMESTAMP NOT NULL DEFAULT now(),
  title       VARCHAR(50) NOT NULL,
  content     TEXT
);
```

5. Run the local dev server
```sh
npm run dev
```
6. Enter the URL for the localhost server
```sh
  http://localhost:3000/
```
## Endpoints
| Method | Endpoint     | Description                  | Request Body Example                                               |
| ------ | ------------ | ---------------------------- | ------------------------------------------------------------------ |
| POST   | `/blog/`     | Create a new post            | `json { "title": "Test", "content": "Test content" } `             |
| GET    | `/blog/`     | Retrieve all posts           | *No body required*                                                 |
| GET    | `/blog/:id`  | Retrieve a single post by ID | *No body required*                                                 |
| PUT    | `/blog/:id`  | Update a post by ID          | `json { "title": "Updated Title", "content": "Updated content" } ` |
| DELETE | `/blog/:id`  | Delete a post by ID          | *No body required*                                                 |


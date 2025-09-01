# Node and Express Fundamentals Review

Project to review and practice Node.js + Express and PostgreSQL.

## Requirements

- Node.js >= 18
- PostgreSQL
- npm

## Try it out

1. Clone this repository

2. Install dependencies

```sh
cd basic-blog-practice
npm install
```

3. Configure environment variables

```sh
cp .env.example .env
```

Fill in the required values.

4. Initialize the PostgreSQL Database

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

| Method | Endpoint    | Description                  | Request Body Example                                               |
| ------ | ----------- | ---------------------------- | ------------------------------------------------------------------ |
| POST   | `/blog/`    | Create a new post            | `json { "title": "Test", "content": "Test content" } `             |
| GET    | `/blog/`    | Retrieve all posts           | _No body required_                                                 |
| GET    | `/blog/:id` | Retrieve a single post by ID | _No body required_                                                 |
| PUT    | `/blog/:id` | Update a post by ID          | `json { "title": "Updated Title", "content": "Updated content" } ` |
| DELETE | `/blog/:id` | Delete a post by ID          | _No body required_                                                 |

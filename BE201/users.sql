CREATE TABLE users (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  username VARCHAR (32) NOT NULL UNIQUE,
  password VARCHAR (128) NOT NULL,
  nickname VARCHAR (32) NOT NULL
)
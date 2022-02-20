BEGIN;

DROP TABLE IF EXISTS items CASCADE;

CREATE TABLE items(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    description TEXT NOT NULL
);

COMMIT
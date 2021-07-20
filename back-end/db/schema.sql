DROP TABLE IF EXISTS products_dev;

CREATE DATABASE products_dev;

\c products_dev;

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name TEXT,
    url TEXT,
    price DECIMAL(10,2),
    detail TEXT
);


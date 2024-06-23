-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1251'
--     LC_CTYPE = 'English_Israel.1251'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE items (
--  item_id SERIAL PRIMARY KEY,
--  item_name varchar(50) not null,
--  price integer not null
-- );

-- CREATE TABLE customers (
-- 	customer_id serial primary key,
-- 	first_name varchar(50) not null,
-- 	last_name varchar(50) not null
-- );

-- insert into items (item_name, price)
-- values
-- ('Small Desk', 100),
-- ('Large desk', 300),
-- ('Fan', 80);

-- insert into customers (
-- 	first_name, last_name
-- )
-- values
-- ('Greg', 'Jones'),
-- ('Sandra', 'Jones'),
-- ('Scott', 'Scott'),
-- ('Trevor', 'Green'),
-- ('Melanie', 'Johnson');

select * from items;

select * from items
where price > 80;

select * from items
where price <= 300;

select * from customers
where last_name = 'Smith';

select * from customers
where last_name = 'Jones';

select * from customers
where first_name != 'Scott'
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

-- CREATE TABLE actors(
--  actor_id SERIAL PRIMARY KEY,
--  first_name VARCHAR (50) NOT NULL,
--  last_name VARCHAR (100) NOT NULL,
--  age DATE NOT NULL,
--  number_oscars SMALLINT NOT NULL
-- );

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Matt','Damon','08/10/1970', 5);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('George','Clooney','06/05/1961', 2);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Scarlett','Johansson','22/11/1984', 2);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES('Milla','Jovovich','17/12/1975', 0);

-- INSERT INTO actors (first_name, last_name, age, number_oscars)
-- VALUES
-- ('Matthew', 'McConaughey', '04/11/1969', 1),
-- ('Tom', 'Cruise', '03/07/1962', 0),
-- ('Leonardo', 'DiCaprio', '11/11/1974', 1);

select count(*) from actors;

INSERT INTO actors (first_name, number_oscars)
VALUES('Milla', 0);
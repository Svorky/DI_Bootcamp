-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_Israel.1251'
--     LC_CTYPE = 'English_Israel.1251'
--     LOCALE_PROVIDER = 'libc'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- CREATE TABLE students (
--     id serial PRIMARY KEY,
--     first_name VARCHAR(50) NOT NULL,
--     last_name VARCHAR(50) NOT NULL,
--     birth_date DATE NOT NULL
-- );

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES
-- ('Marc', 'Benichou', '02/11/1998'),
-- ('Yoan', 'Cohen', '03/12/2010'),
-- ('Lea', 'Benichou', '27/07/1987'),
-- ('Amelia', 'Dux', '07/04/1996'),
-- ('David', 'Grez', '14/06/2003'),
-- ('Omer', 'Simpson', '03/10/1980');

-- INSERT INTO students (first_name, last_name, birth_date)
-- VALUES ('Alexander', 'Baytman', '23/12/1992');

SELECT * from students;

select first_name, last_name from students;

select first_name, last_name from students
where id = 2;

select first_name, last_name from students
	where last_name = 'Benichou' and first_name = 'Marc';

select first_name, last_name from students
	where last_name = 'Benichou' or first_name = 'Marc';

select first_name, last_name from students
	where first_name like '%a%';

select first_name, last_name from students
	where first_name like 'A%';

select first_name, last_name from students
	where first_name like '%a';

select first_name, last_name from students
	where first_name like '%a_';

select first_name, last_name from students
	where id = 1 or id = 3;

select * from students
where birth_date >= '01/01/2000';
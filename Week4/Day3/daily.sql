create table customer (
id serial primary key,
	first_name varchar(50),
	last_name varchar(50) NOT NULL
);

create table customer_profile (
	id serial primary key,
	isLoggedIn boolean DEFAULT false,
	customer_id int references customer(id)
);

insert into customer (first_name, last_name)
values
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

-- John is loggedIn
-- Jerome is not logged in
insert into customer_profile(customer_id, isLoggedIn)
values
((select id from customer where first_name = 'John'), true),
((select id from customer where first_name = 'Jerome'), false);

-- The first_name of the LoggedIn customers
select customer.first_name
from customer
join customer_profile
on customer.id = customer_profile.customer_id
where customer_profile.isLoggedIn = true;

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
select customer.first_name, customer_profile.isLoggedIn
from customer
left join customer_profile
on customer.id = customer_profile.customer_id;

-- The number of customers that are not LoggedIn
select count(*)
from customer
left join customer_profile
on customer.id = customer_profile.customer_id
where customer_profile.isLoggedIn = false or customer_profile.isLoggedIn is null;

create table book(
	book_id SERIAL PRIMARY KEY,
	title varchar(50) NOT NULL,
	author varchar(50) NOT NULL
)

insert into book (title, author)
values
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To kill a mockingbird', 'Harper Lee');

create table students(
	student_id SERIAL PRIMARY KEY,
	name varchar(50) NOT NULL UNIQUE,
	age smallint
	constraint check_age check (age <= 15)
);

insert into students(name,age)
values
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14)

CREATE TABLE public.library
(
    book_fk_id integer NOT NULL,
    student_id integer NOT NULL,
    borrowed_date date NOT NULL,
    PRIMARY KEY (book_fk_id, student_id),
    CONSTRAINT book_fk_id FOREIGN KEY (book_fk_id)
        REFERENCES public.book (book_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT student_id FOREIGN KEY (student_id)
        REFERENCES public.students (student_id)
        ON UPDATE CASCADE
        ON DELETE CASCADE
);

-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021
insert into library (book_fk_id, student_id, borrowed_date)
values
((select book_id from book where title = 'Alice In Wonderland'),(select student_id from students where name = 'John'), '15/02/2022'),
((select book_id from book where title = 'To kill a mockingbird'),(select student_id from students where name = 'Bob'), '03/03/2021'),
((select book_id from book where title = 'Alice In Wonderland'),(select student_id from students where name = 'Lera'), '23/05/2021'),
((select book_id from book where title = 'Harry Potter'),(select student_id from students where name = 'Bob'), '12/08/2021')

-- Select all the columns from the junction table
select * from library
-- Select the name of the student and the title of the borrowed books
select students.name, students.age, book.title, book.author, library.borrowed_date
from library
join students
on students.student_id = library.student_id
join book
on book.book_id = library.book_fk_id
	
-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT AVG(students.age)
FROM students
INNER JOIN library ON students.student_id = library.student_id
INNER JOIN book ON library.book_fk_id = book.book_id
WHERE book.title ilike 'Alice in Wonderland';

-- Delete a student from the Student table, what happened in the junction table ?
delete from students where student_id = 2;
select * from library
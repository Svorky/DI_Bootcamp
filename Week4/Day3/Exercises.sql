-- Get a list of all the languages, from the language table.
select name from language;

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.
select film.title, film.description, language.name
from film
join language
on film.language_id = language.language_id;

-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
select film.title, film.description, language.name
from film
right join language
on film.language_id = language.language_id;

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
-- create table new_film(
-- 	id serial primary key,
-- 	name varchar(50)
-- );

-- insert into new_film (name)
-- values
-- ('film1'),
-- ('film2'),
-- ('film3');

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
-- create table customer_review(
-- 	review_id serial primary key,
-- 	film_id int not null,
-- 	language_id int not null,
-- 	title varchar(50) not null,
-- 	score smallint,
-- 	review_text text not null,
-- 	last_update timestamp not null default now(),
-- 	CONSTRAINT movie_fk_id FOREIGN KEY (film_id)
--         REFERENCES new_film (id)
--         ON UPDATE CASCADE
--         ON DELETE CASCADE,
-- 	CONSTRAINT language_fk_id FOREIGN KEY (language_id)
--         REFERENCES language (language_id)
--         ON UPDATE CASCADE
--         ON DELETE CASCADE
-- );
	
-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
-- insert into customer_review (film_id, language_id, title, score, review_text)
-- values
-- ((select id from new_film where name = 'film1'), (select language_id from language where name = 'English'), 'review1', 8, 'good'),
-- ((select id from new_film where name = 'film2'), (select language_id from language where name = 'Mandarin'), 'review2', 4, 'bad')

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- delete from new_film where id = 2;
-- select * from customer_review


-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
-- update film
-- set language_id = 2
-- where film_id = 4;

-- update film
-- set language_id = 3
-- where film_id = 8;

-- update film
-- set language_id = 4
-- where film_id = 40;

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
-- customer.address_id to address.address_id
-- we should first insert address to address table and get an id.

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
drop table customer_review

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
select count(*)
from rental
where return_date is null
	
-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
select film.title, film.replacement_cost
from rental
join inventory
on inventory.inventory_id = rental.inventory_id
join film
on film.film_id = inventory.film_id
where return_date is null
order by film.replacement_cost
limit 30

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names.
-- Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
select * from film_actor
join film
on film.film_id = film_actor.film_id
where actor_id = (
	select actor_id from actor
	where first_name = 'Penelope' and last_name = 'Monroe'
)
and film.description ilike '%sumo%'

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
select film.title, film.length
from film_category
join film
on film.film_id = film_category.film_id
where 
category_id = (select category_id from category where name = 'Documentary')
and length < 60
and rating = 'R'

-- The 3rd film : A film that his friend Matthew Mahan rented.
-- He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT film.title
FROM rental
join customer
on rental.customer_id = customer.customer_id
join inventory
on rental.inventory_id = inventory.inventory_id
join film
on inventory.film_id = film.film_id
where customer.first_name = 'Matthew' and customer.last_name = 'Mahan'
and return_date between '28/07/2005' and '01/08/2005'
and rental_rate > 4

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT *
FROM rental
join customer
on rental.customer_id = customer.customer_id
join inventory
on rental.inventory_id = inventory.inventory_id
join film
on inventory.film_id = film.film_id
where customer.first_name = 'Matthew' and customer.last_name = 'Mahan'
and (
	film.title ilike '%boat%' or film.description ilike '%boat%'
)
order by film.replacement_cost desc
limit 1
-- 1
select * from items
order by price;

select * from items
where price >= 80
order by price desc;

-- The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name, last_name
	FROM public.customers
	order by first_name
	limit 3;

-- All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name
	FROM public.customers
	order by last_name desc;

    ----------------------------------

    -- In the dvdrental database write a query to select all the columns from the “customer” table.
SELECT customer_id, store_id, first_name, last_name, email, address_id, activebool, create_date, last_update, active
	FROM public.customer;

-- Write a query to display the names (first_name, last_name) using an alias named “full_name”.
select first_name ||' '|| last_name as full_name from customer;

-- Lets get all the dates that accounts were created. Write a query to select all the create_date from the “customer” table (there should be no duplicates).
SELECT distinct create_date
	FROM public.customer;

-- Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
SELECT customer_id, store_id, first_name, last_name, email, address_id, activebool, create_date, last_update, active
	FROM public.customer
	order by first_name desc;

-- Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
SELECT film_id, title, description, release_year, rental_rate
	FROM public.film
	order by rental_rate;

-- Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
SELECT address, district, phone
	FROM public.address
where district = 'Texas';

-- Write a query to retrieve all movie details where the movie id is either 15 or 150.
SELECT film_id, title, description, release_year, language_id, rental_duration, rental_rate, length, replacement_cost, rating, last_update, special_features, fulltext
	FROM public.film
	where film_id = 15 or film_id = 150;

-- Write a query which should check if your favorite movie exists in the database.
-- Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
SELECT film_id, title, description, rental_rate, length
	FROM public.film
	where title = 'Alien';

-- No luck finding your movie? Maybe you made a mistake spelling the name.
-- Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
SELECT film_id, title, description, rental_rate, length
	FROM public.film
	where title like 'Al%';

-- Write a query which will find the 10 cheapest movies.
SELECT film_id, title, description, rental_rate
	FROM public.film
	where rental_rate = (select min(rental_rate) from film)
	limit 10;

-- Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.
SELECT film_id, title, description, rental_rate
	FROM public.film
	where rental_rate = (select min(rental_rate) from film)
	limit 10
	offset 10;

-- Write a query which will join the data in the customer table and the payment table.
-- You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer,
-- ordered by their id (from 1 to…).
select customer.first_name, customer.last_name, payment.amount, payment.payment_date
from customer
inner join payment
on customer.customer_id = payment.customer_id
order by customer.customer_id;

-- You need to check your inventory. Write a query to get all the movies which are not in inventory.
-- select film.film_id, film.title
-- from film
-- inner join inventory
-- on film.film_id = inventory.film_id
-- where film.film_id != inventory.film_id;
select film.film_id, film.title
from film
	where film_id not in (select film_id from inventory group by film_id);

-- Write a query to find which city is in which country.
SELECT city.city, country.country
	FROM public.city
inner join country
on city.country_id = country.country_id;

-- Bonus You want to be able to see how your sellers have been doing?
-- Write a query to get the customer’s id, names (first and last), the amount and the date of payment
-- ordered by the id of the staff member who sold them the dvd.
select customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date, staff.staff_id, customer.store_id
from customer
inner join payment
on customer.customer_id = payment.customer_id
inner join staff
on customer.store_id = staff.store_id
order by staff.store_id;
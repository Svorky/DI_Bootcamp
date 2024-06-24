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
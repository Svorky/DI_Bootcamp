import requests
import psycopg2
import random

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'asd12xaz'
DATABASE = 'public'

connection = psycopg2.connect(
    host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)
cursor = connection.cursor()

# These are the attributes which you should populate your tables with: name, capital, flag, subregion, population.
response = requests.get("https://restcountries.com/v3.1/all?fields=name,capital,flag,subregion,population")
# print(response)
json_data = response.json()

rand_countries = []
for _ in range(10):
    rand_countries.append(random.choice(json_data))
    
for country in rand_countries:
    name = country['name']['official']
    capital = country['capital'][0]
    flag = country['flag']
    subregion = country['subregion']
    population = country['population']
    
    query = '''
    insert into country (name, capital, flag, subregion, population)
    values
    (%s,%s,%s,%s,%s)
    '''
    cursor.execute(query, [name, capital, flag, subregion, population])
    
connection.commit()
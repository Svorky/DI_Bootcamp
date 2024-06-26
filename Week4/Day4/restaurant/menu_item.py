import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'asd12xaz'
DATABASE = 'restaurant'

connection = psycopg2.connect(
    host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)
cursor = connection.cursor()


class MenuItem:
    def __init__(self, name, price = None) -> None:
        self.table_name = 'menu_items'
        self.name = name
        self.price = price

    def save(self):
        query = f'''
            insert into {self.table_name} (item_name, item_price)
            values
            (%s, %s);
            '''
        cursor.execute(query, (self.name, self.price))  # execute the query
        connection.commit()  # make changes in the database

    def delete(self):
        query = f'''
        delete from {self.table_name}
        where item_name ilike %s;
        '''
        cursor.execute(query, [self.name])
        connection.commit()

    def update(self, new_name, new_price):
        query = f'''
        update {self.table_name}
        set item_name = %s, item_price = %s
        where item_name = %s
        '''
        cursor.execute(query, [new_name, new_price, self.name])
        connection.commit()

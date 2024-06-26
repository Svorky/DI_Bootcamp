from menu_item import MenuItem
import psycopg2

HOSTNAME = 'localhost'
USERNAME = 'postgres'
PASSWORD = 'asd12xaz'
DATABASE = 'restaurant'

connection = psycopg2.connect(
    host=HOSTNAME, user=USERNAME, password=PASSWORD, dbname=DATABASE)
cursor = connection.cursor()

class MenuManager:
    def __init__(self) -> None:
        pass
    
    @classmethod
    def get_by_name(self, item_name):
        query = f'''
        select item_name, item_price
        from menu_items
        where item_name ilike %s
        '''
        cursor.execute(query, [item_name])
        result = cursor.fetchall()
        if result:
            return result
        return None
    
    @classmethod
    def all_items(self):
        query = "select item_name, item_price from menu_items"
        cursor.execute(query)
        return cursor.fetchall()
    
    
item = MenuItem('Burger', 35)
# item.save()
# item.delete()
# item.update('Veggie Burger', 37)
item2 = MenuManager.get_by_name('Veggie Burger')
print(item2)
items = MenuManager.all_items()
print(items)
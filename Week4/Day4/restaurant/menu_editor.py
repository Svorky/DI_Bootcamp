from menu_manager import MenuManager
from menu_item import MenuItem

def show_user_menu():
    while True:
        
        print('''
    View an Item (V)
    Add an Item (A)
    Delete an Item (D)
    Update an Item (U)
    Show the Menu (S)
    Exit (E)''')
        user = input("Select action: ").lower()
        
        if user == 'e':
            print(MenuManager.all_items())
            break
        elif user == 'v':
            user_item = input("Type an item name: ").strip().lower()
            item = MenuManager.get_by_name(user_item)
            print(item)
        elif user == 'a':
            add_item_to_menu()
        elif user == 'd':
            remove_item_from_menu()
        elif user == 'u':
            update_item_from_menu()
        elif user == 's':
            print(MenuManager.all_items())

def add_item_to_menu():
    user_item_name = input("Type a name: ").strip()
    user_item_price = input("Type a price: ").strip()
    item = MenuItem(user_item_name, int(user_item_price))
    item.save()
    print("item was added successfully")
    
def remove_item_from_menu():
    user_item = input("Type a name to delete: ").strip().lower()
    item = MenuItem(user_item)
    item.delete()
    print("item was deleted successfully")
    
def update_item_from_menu():
    user_item = input("Type a name to update: ").strip().lower()
    new_name = input("Type a new name: ").strip()
    new_price = input("Type a new price: ").strip()
    item = MenuItem(user_item)
    item.update(new_name, int(new_price))
    print("item was updated successfully")
    
show_user_menu()
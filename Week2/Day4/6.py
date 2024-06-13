# 6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians():
    for name in magician_names:
        print(name)
        
def make_great():
    for (idx, name) in enumerate(magician_names):
        magician_names[idx] = name + " the Great"
        
make_great()
show_magicians()

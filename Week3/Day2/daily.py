import math
class Pagination:
    def __init__(self, items: None, page_size = 10) -> None:
        self.items = items
        self.page_size = page_size
        self.current_page = 1
        self.total_pages = math.ceil(len(items) / page_size)

    def getVisibleItems(self):
        start = (self.current_page-1) * self.page_size
        finish = start + self.page_size
        visible = self.items[start:finish]
        print(visible)
        return visible
    
    def prev_page(self):
        if self.current_page != 1:
            self.current_page -= 1
        return self
    
    def next_page(self):
        if self.current_page != self.total_pages:
            self.current_page += 1
        return self
    
    def first_page(self):
        self.current_page = 1
        return self
        
    def last_page(self):
        self.current_page = self.total_pages
        return self
    
    def go_to_page(self, page):
        self.current_page = int(page)
        if page > self.total_pages: self.current_page = self.total_pages
        if page < 1: self.current_page = 1
        return self
    
alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)

p.getVisibleItems()

p.next_page().next_page().getVisibleItems()

p.last_page().getVisibleItems()

p.first_page().getVisibleItems()

p.go_to_page(6).getVisibleItems()

p.go_to_page(-1).getVisibleItems()

p.go_to_page(99).getVisibleItems()

p.go_to_page(3.5).getVisibleItems()

p.prev_page().getVisibleItems()
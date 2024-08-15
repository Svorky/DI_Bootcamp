import ListItem, { Item } from "./ListItem";

interface ListInterface {
    elements: ListItem[],
    addItem(title: string): void,
    removeItem(id: number): void,
    load(): void,
    clearList(): void,
    save(): void
}

export default class List implements ListInterface {
    private _elements: ListItem[]
    static instance: List = new List() // singleton pattern

    constructor(elements: ListItem[] = []) {
        this._elements = elements
    }

    get elements(): ListItem[] {
        return this._elements
    }

    addItem(title: string): ListItem {
        const newItem = new ListItem(Date.now(),title)
        this._elements.push(newItem)
        this.save()
        return newItem
    }

    removeItem(id: number): void{
        this._elements = this._elements.filter(
            item => item.id !== id )
        this.save()
    }

    load(): void {
        const storedList: string | null = localStorage.getItem('myList')
        if(typeof storedList !== 'string') return

        const parsedList: {_id: number, _title: string, _done: boolean}[] = JSON.parse(storedList)
        parsedList.forEach( item => {
            console.log(item)
            const newListItem = new ListItem(item._id, item._title, item._done)
            this._elements.push(newListItem)
        })
    }

    clearList(): void {
        this._elements = []
        this.save()
    }

    save(): void {
        localStorage.setItem('myList', JSON.stringify(this._elements))
    }

}
import List from "../model/List";

export interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(list: List): void
}

export default class ListTemplate implements DOMList {
    ul: HTMLUListElement
    static instance: ListTemplate = new ListTemplate();

    constructor(){
        this.ul = document.getElementById('listItems') as HTMLUListElement
    }

    clear(): void {
        this.ul.innerHTML = ''
    }

    render(list: List): void {
        this.clear();
        list.elements.forEach(
            item => {
                const li = document.createElement('li') as HTMLLIElement
                li.className = 'item'

                const check = document.createElement('input') as HTMLInputElement
                check.type = 'checkbox'
                check.id = item.id.toString()
                check.checked = item.done
                li.appendChild(check)

                check.addEventListener('change', ()=>{
                    item.done = !item.done
                    list.save()
                })

                const label = document.createElement('label') as HTMLLabelElement
                label.innerText = item.title
                label.htmlFor = item.id.toString()
                li.appendChild(label)

                const button = document.createElement('button') as HTMLButtonElement
                button.className = 'button'
                button.innerText = 'X'
                li.appendChild(button)

                button.addEventListener('click', ()=>{
                    list.removeItem(item.id)
                    this.render(list)
                })

                this.ul.appendChild(li)
            }
        )
    }
}
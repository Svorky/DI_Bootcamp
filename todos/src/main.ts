import List from "./model/List";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = (): void => {
    const list = List.instance
    const template = ListTemplate.instance

    const itemEnteryForm = document.getElementById('itemEntryForm') as HTMLFormElement
    itemEnteryForm.addEventListener('submit', (event: SubmitEvent) => {
        event.preventDefault()

        const input = document.getElementById('newItem') as HTMLInputElement
        const newEnteryText: string = input.value.trim()
        if(!newEnteryText) return;

        // const newItem = new ListItem(newEnteryText)
        list.addItem(newEnteryText)
        
        template.render(list)
    })
    
    const clearList = document.getElementById('clearItemsButton') as HTMLButtonElement
    clearList.addEventListener('click',()=>{
        list.clearList()
        template.clear()
    })

    list.load();
    template.render(list)
}



document.addEventListener('DOMContentLoaded', initApp)
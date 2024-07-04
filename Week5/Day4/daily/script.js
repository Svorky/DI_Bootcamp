const tasks = []
let id = -1

let list = document.querySelector(".listTasks")

function getNextId(){
    return id += 1
}

function addTask(event) {
    event.preventDefault();

    let newTask = event.target.task.value.trim()

    if(newTask === '') return
    let newTaskObj = {
        task_id: getNextId(),
        task: newTask,
        done: false
    }

    tasks.push(newTaskObj)

    let newDiv = document.createElement('div')
    newDiv.setAttribute('data-task-id', newTaskObj.task_id)
    newDiv.classList.add('task')

    let icon = document.createElement('i')
    icon.classList.add("fa-solid","fa-xmark")
    icon.addEventListener('click',deleteTask)
    newDiv.appendChild(icon)

    let newInput = document.createElement('input')
    newInput.setAttribute('type','checkbox')
    // newInput.setAttribute('data-task-id', newTaskObj.task_id)
    newInput.addEventListener('click', doneTask)
    newDiv.appendChild(newInput)
    
    let label = document.createElement('label')
    label.textContent = newTaskObj.task
    newDiv.appendChild(label)
    list.appendChild(newDiv)
}

function doneTask(event){
    let parent = event.target.parentElement
    let task = tasks.find(f => f.task_id === parseInt(parent.dataset.taskId))
    task.done = !task.done
    let l = parent.querySelector('label')
    if(task.done){
        l.style.color = 'red'
        l.style.textDecoration = 'line-through'
    } else {
        l.style.color = 'black'
        l.style.textDecoration = 'none'
    }
}

function deleteTask(event){
    let parent = event.target.parentElement
    let task = tasks.findIndex(key => key.name === parent.dataset.taskId);
    tasks.splice(task,1)
    parent.remove()
}
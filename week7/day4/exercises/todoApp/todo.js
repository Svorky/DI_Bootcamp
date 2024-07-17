export class TodoList {
    #tasks;
    #id;

    constructor() {
        this.#tasks = [];
        this.#id = 0;
    }

    add(text) {
        let obj = {
            id: (this.#id += 1),
            text,
            done: false,
        };
        this.#tasks.push(obj);
        console.log(obj);
    }

    mark(id) {
        let task = this.#tasks.find((t) => t.id == id);
        task.done = true;
        console.log(`Task ${task.text}; was marked as done`);
    }

    list() {
        console.log("#tasks", JSON.stringify(this.#tasks));
    }
}

import { TodoList } from "./todo.js";

const todo = new TodoList();
todo.add("Create to do");
todo.add("Test todo");
todo.mark(1);
todo.list();

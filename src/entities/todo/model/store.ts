import {create} from 'zustand';
import {Todo} from "src/entities/todo";

interface TodoStore {
    todos: Todo[];
    addTodo: (text: string) => void;
    addTodos: (todos: Todo[]) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

export const useTodoStore = create<TodoStore>((set) => ({
    todos: [],
    addTodo: (text) =>
        set((state) => ({
            todos: [...state.todos, {id: Date.now(), text, completed: false, created_at: Date.now().toString()}]
        })),
    addTodos: (todos) => set((state) => ({
        todos: [...state.todos, ...todos]
    })),
    toggleTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        })),
    deleteTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id)
        }))
})); 
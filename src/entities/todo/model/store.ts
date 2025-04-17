import {create} from 'zustand';
import supabase from "src/api";
import {Todo} from "src/entities/todo";

interface TodoStore {
    todos: Todo[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

const { data: items, } = await supabase
    .from('items')
    .select('*')


export const useTodoStore = create<TodoStore>((set) => ({
    todos: items || [],
    addTodo: (text) =>
        set((state) => ({
            todos: [...state.todos, {id: Date.now(), text, completed: false, created_at: Date.now().toString()}]
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
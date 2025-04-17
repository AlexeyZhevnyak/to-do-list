import {Tables} from "src/shared/types/generated.ts";

export type Todo = Tables<'items'>
export {TodoItem} from './ui/TodoItem';
export {useTodoStore} from './model/store';
import {Tables} from "@/shared/types/supabase.ts";

export type Todo = Tables<'items'>
export {TodoItem} from './ui/TodoItem';
export {useTodoStore} from './model/store';
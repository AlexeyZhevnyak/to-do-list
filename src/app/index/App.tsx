import './App.css'
import HomePage from "@/pages/home/ui/HomePage";
import supabase from "@/shared/api";
import {useEffect} from "react";
import {useTodoStore} from "@/entities/todo";

export const App = () => {
    const addTodos = useTodoStore(state => state.addTodos)

    useEffect(() => {
        const initData = async () => {
            try {
                const {data: items,} = await supabase
                    .from('items')
                    .select('*')
                return items || [];
            } catch {
                return []
            }
        }
        initData().then(value => addTodos(value))


    }, [addTodos])
    return (
        <div className="app">
            <HomePage/>
        </div>
    )
} 
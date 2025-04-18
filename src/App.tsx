import './App.css'
import HomePage from "src/pages/home/ui/HomePage.tsx";
import supabase from "src/api";
import {useEffect} from "react";
import {useTodoStore} from "src/entities/todo";

function App() {
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

export default App

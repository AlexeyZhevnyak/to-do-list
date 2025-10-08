import {TodoList} from "@/app/_components/TodoList";
import {AddTodoForm} from "@/app/_components/AddTodoForm";
import {Card, Skeleton} from "antd";
import Title from "antd/es/typography/Title";
import {getAllTodos} from "@/app/_lib/supabase";
import {Suspense} from "react";

const SkeletonLoader = () => (
    <div style={{marginTop: 16}}>
        {[1, 2, 3].map((item) => (
            <Skeleton key={item} active paragraph={{rows: 0}} style={{marginBottom: 16}}/>
        ))}
    </div>
);

export default async function Page() {
    const allTodos = getAllTodos();

    return <Card>
        <Title level={2}>Too List</Title>
        <AddTodoForm/>
        <Suspense fallback={<SkeletonLoader/>}>
            <TodoList todosPromise={allTodos}/>
        </Suspense>
    </Card>

}
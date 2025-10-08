'use client'

import {TodoItem} from '@/app/_components/TodoItem';
import {TodoType} from '@/app/_lib/types';
import {List} from 'antd';
import {use} from 'react';
import {useLoadingStore} from "@/app/_lib/store";

export const TodoList = ({todosPromise}: {
    todosPromise: Promise<TodoType[]>;
}) => {
    const todos = use(todosPromise)
    const todoListLoading = useLoadingStore(state => state.todoListLoading)
    return (
        <List
            loading={todoListLoading}
            className="todo-list"
            dataSource={todos}
            renderItem={(todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            )}
        />
    );
};

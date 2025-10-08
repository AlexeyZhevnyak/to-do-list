'use client'

import {Button, Checkbox, List} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import {TodoType} from "@/app/_lib/types";
import {deleteTodoAction, toggleTodoAction} from "@/app/_lib/actions";
import {useTransition} from "react";

interface TodoItemProps {
    todo: TodoType;
}

export const TodoItem = ({todo}: TodoItemProps) => {
    const [isPending, startTransition] = useTransition();

    const handleToggle = () => {
        startTransition(async () => {
            await toggleTodoAction(todo.id, todo.completed);
        });
    };

    const handleDelete = () => {
        startTransition(async () => {
            await deleteTodoAction(todo.id);
        });
    };

    return (
        <List.Item
            actions={[
                <Button
                    key="delete"
                    type="text"
                    danger
                    icon={<DeleteOutlined/>}
                    onClick={handleDelete}
                    loading={isPending}
                />
            ]}
        >
            <Checkbox
                checked={todo.completed}
                onChange={handleToggle}
                disabled={isPending}
            >
        <span style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            marginLeft: '8px'
        }}>
          {todo.text}
        </span>
            </Checkbox>
        </List.Item>
    );
};

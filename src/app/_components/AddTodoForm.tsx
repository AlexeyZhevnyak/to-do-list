'use client'

import {Button, Input} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import '@/App.css'
import {useActionState, useEffect} from "react";
import {useLoadingStore} from "@/app/_lib/store.ts";
import {addTodoAction} from "@/app/_lib/actions.ts";

export type FormState = {
    todo: string;
}

export const AddTodoForm = () => {
    const setTodoListLoading = useLoadingStore(state => state.setTodoListLoading)
    const [, formAction, isLoading] = useActionState<FormState, FormData>(addTodoAction, {todo: ''})

    useEffect(() => {
        setTodoListLoading(isLoading)
    }, [isLoading, setTodoListLoading]);

    return (
        <form className="add-todo" action={formAction}>
            <Input
                placeholder="Add a new todo"
                size="large"
                name='todo'
            />
            <Button
                type="primary"
                icon={<PlusOutlined/>}
                size="large"
                htmlType={'submit'}
            >
                Add
            </Button>
        </form>
    );
};
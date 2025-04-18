import {useState} from 'react';
import {useTodoStore} from '@/entities/todo';
import {Button, Input} from 'antd';
import {PlusOutlined} from '@ant-design/icons';

export const AddTodoForm = () => {
    const [input, setInput] = useState('');
    const addTodo = useTodoStore((state) => state.addTodo);

    const handleAddTodo = () => {
        if (input.trim() !== '') {
            addTodo(input.trim());
            setInput('');
        }
    };

    return (
        <div className="add-todo">
            <Input
                placeholder="Add a new todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onPressEnter={handleAddTodo}
                size="large"
            />
            <Button
                type="primary"
                icon={<PlusOutlined/>}
                onClick={handleAddTodo}
                size="large"
            >
                Add
            </Button>
        </div>
    );
}; 
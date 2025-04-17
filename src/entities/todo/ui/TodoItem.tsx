import {useTodoStore} from '../model/store';
import {Button, Checkbox, List} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';
import {Todo} from "src/entities/todo";

interface TodoItemProps {
    todo: Todo;
}

export const TodoItem = ({todo}: TodoItemProps) => {
    const {toggleTodo, deleteTodo} = useTodoStore();

    return (
        <List.Item
            actions={[
                <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined/>}
                    onClick={() => deleteTodo(todo.id)}
                />
            ]}
        >
            <Checkbox
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
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
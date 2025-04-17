import {TodoItem} from 'src/entities/todo';
import {useTodoStore} from 'src/entities/todo';
import {List} from 'antd';

export const TodoList = () => {
    const todos = useTodoStore((state) => state.todos);

    return (
        <List
            className="todo-list"
            dataSource={todos}
            renderItem={(todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            )}
        />
    );
}; 
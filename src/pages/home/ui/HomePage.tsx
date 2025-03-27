import {Card, Typography} from 'src/shared/ui/antd';
import {AddTodoForm} from 'src/features/add-todo';
import {TodoList} from 'src/widgets/todo-list';

const {Title} = Typography;

const HomePage = () => {
    return (
        <div className="app">
            <Card>
                <Title level={2}>Todo List</Title>
                <AddTodoForm/>
                <TodoList/>
            </Card>
        </div>
    );
};

export default HomePage; 
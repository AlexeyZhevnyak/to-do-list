import {Card, Typography} from '@/shared/ui/antd';
import {AddTodoForm} from '@/features/add-todo';
import {TodoList} from '@/widgets/todo-list';

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
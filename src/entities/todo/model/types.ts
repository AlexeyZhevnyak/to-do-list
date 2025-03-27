export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface TodoState {
    items: Todo[];
} 
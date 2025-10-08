import {create} from 'zustand';

interface LoadingStore {
    todoListLoading: boolean;
    setTodoListLoading: (loading: boolean) => void;
}

export const useLoadingStore = create<LoadingStore>((set) => ({
    todoListLoading: false,
    setTodoListLoading: (loading) => set({todoListLoading: loading})
}));

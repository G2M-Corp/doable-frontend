import { create } from 'zustand';

type Task = {
    id: number;
    titulo: string;
    completed: boolean;
} | null;

type TaskStore = {
    task: Task[];
    pushTask: (task: Task) => void;
    dropTaskByIndex: (index: number) => void;
    completeTask: (index: number) => void;
};

export const userStore = create<TaskStore>((set) => ({
    task: [],
    pushTask: (task: Task) => set((state) => ({ task: [...state.task, task] })),
    dropTaskByIndex: (index: number) => set((state) => ({ task: state.task.filter((_, i) => i !== index) })),
    completeTask: (index: number) => set((state) => ({
        task: state.task.map((t, i) =>
            i === index && t !== null ? { ...t, completed: true } : t
        )
    }))
}));
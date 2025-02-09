import React, { useEffect } from 'react';
import { useToDoStore, Task } from '../../store/todoStore';
import { DraggableTask } from '../DraggableTask';

export const ToDoList: React.FC = () => {
    const { tasks, fetchTasks, markTaskComplete } = useToDoStore();

    useEffect(() => {
        fetchTasks();
    }, [fetchTasks]);

    const handleDrop = (task: Task) => {
        // Move task to "Concluído" list
        if (!task.completed) {
            markTaskComplete(task.id);
        }
    };

    return (
        <div className="rounded-lg">
            <h2 className="text-xs font-bold mb-3.75 text-stoneGray-700">Para fazer</h2>
            <ul className="space-y-2">
                {tasks.filter(task => !task.completed).map((task: Task) => (
                    <DraggableTask key={task.id} task={task} onDrop={handleDrop} />
                ))}
            </ul>
        </div>
    );
};

import React from 'react';
import { useToDoStore, Task } from '../../store/todoStore';
import { DraggableTask } from '../DraggableTask';

export const CompletedTasks: React.FC = () => {
    const { tasks, markTaskIncomplete } = useToDoStore();

    const handleDrop = (task: Task) => {
        // Move task to "Para fazer" list
        if (task.completed) {
            markTaskIncomplete(task.id);
        }
    };

    return (
        <div className="rounded-lg">
            <h2 className="text-xs font-bold mb-3.75 text-stoneGray-700">Concluído</h2>
            <ul className="space-y-2">
                {tasks.filter(task => task.completed).map((task: Task) => (
                    <DraggableTask key={task.id} task={task} onDrop={handleDrop} />
                ))}
            </ul>
        </div>
    );
};

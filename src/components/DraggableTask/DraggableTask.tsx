import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Checkbox } from '../ui/Checkbox';
import { Task } from '../../store/todoStore';

const ItemType = {
    TASK: 'task',
};

interface DraggableTaskProps {
    task: Task;
    onDrop: (task: Task) => void;
}

export const DraggableTask: React.FC<DraggableTaskProps> = ({ task, onDrop }) => {
    const ref = useRef<HTMLLIElement>(null);

    const [, drag] = useDrag({
        type: ItemType.TASK,
        item: { ...task },
    });

    const [, drop] = useDrop({
        accept: ItemType.TASK,
        drop: (droppedTask: Task) => {
            if (droppedTask.id !== task.id) {
                onDrop(droppedTask);
            }
        },
    });

    drag(drop(ref));

    return (
        <li
            ref={ref}
            className="flex justify-between items-center p-2 border-b border-stoneGray-400 min-h-15"
        >
            <Checkbox
                checked={task.completed}
                onChange={() => onDrop(task)}
                label={task.title}
            />
        </li>
    );
};

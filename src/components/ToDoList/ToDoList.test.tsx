import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CompletedTasks } from '../CompletedTasks';
import { Task, useToDoStore } from '../../store/todoStore';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const mockTasks: Task[] = [
    { id: 1, title: 'Tarefa 1', completed: true },
    { id: 2, title: 'Tarefa 2', completed: true },
];

const mockMarkTaskIncomplete = vi.fn();

vi.mock('../../store/todoStore', () => ({
    __esModule: true,
    useToDoStore: vi.fn(() => ({
        tasks: mockTasks,
        markTaskIncomplete: mockMarkTaskIncomplete,
    })),
    Task: vi.fn(),
}));

const mockUseToDoStore = vi.mocked(useToDoStore);

vi.mock('../DraggableTask', () => ({
    DraggableTask: ({ children }: any) => <div data-testid="draggable-task">{children}</div>,
}));

vi.mock('../ui/Checkbox', () => ({
    Checkbox: ({ checked, onChange, label, ...rest }: any) => (
        <div data-testid="checkbox-container">
            <input type="checkbox" checked={checked} onChange={onChange} {...rest} data-testid="checkbox" />
            <label>{label}</label>
        </div>
    ),
}));

describe('component :: CompletedTasks', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        mockUseToDoStore.mockClear();
    });

    it('should render completed tasks', () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <CompletedTasks onDrop={vi.fn()} />
            </DndProvider>
        );
        expect(screen.getByText('Concluído')).toBeInTheDocument();
        expect(screen.getAllByTestId('draggable-task').length).toBe(2);
    });

    it('should call onTaskToggle when checkbox is clicked', () => {
        const mockOnTaskToggle = vi.fn();
        render(
            <DndProvider backend={HTML5Backend}>
                <CompletedTasks onDrop={vi.fn()} onTaskToggle={mockOnTaskToggle} />
            </DndProvider>
        );
        const checkbox = screen.getAllByTestId('checkbox')[0] as HTMLInputElement;
        fireEvent.click(checkbox);
        expect(mockOnTaskToggle).toHaveBeenCalledTimes(1);
        expect(mockOnTaskToggle).toHaveBeenCalledWith(mockTasks[0].id);
    });

    it('should call markTaskIncomplete when onTaskToggle is not provided', () => {
        render(
            <DndProvider backend={HTML5Backend}>
                <CompletedTasks onDrop={vi.fn()} />
            </DndProvider>
        );
        const checkbox = screen.getAllByTestId('checkbox')[0] as HTMLInputElement;
        fireEvent.click(checkbox);
        expect(mockMarkTaskIncomplete).toHaveBeenCalledTimes(1);
        expect(mockMarkTaskIncomplete).toHaveBeenCalledWith(mockTasks[0].id);
    });

    it('should render and allow drag and drop (basic check)', () => {
        const mockOnDrop = vi.fn();
        render(
            <DndProvider backend={HTML5Backend}>
                <CompletedTasks onDrop={mockOnDrop} />
            </DndProvider>
        );
        expect(screen.getAllByTestId('draggable-task').length).toBe(2);
        expect(screen.getByTestId('completed-tasks-container')).toBeInTheDocument();
    });

    it('should render "Nenhuma tarefa concluída" when there are no completed tasks', () => {
        mockUseToDoStore.mockReturnValue({
            tasks: [],
            markTaskIncomplete: mockMarkTaskIncomplete,
        } as any);

        render(
            <DndProvider backend={HTML5Backend}>
                <CompletedTasks onDrop={vi.fn()} />
            </DndProvider>
        );

        expect(screen.getByText('Nenhuma tarefa concluída.')).toBeInTheDocument();
        expect(screen.queryByTestId('draggable-task')).toBeNull();
    });
});
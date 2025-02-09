import React from 'react';
import { ToDoList } from '../../components/ToDoList';
import { AddTask } from '../../components/AddTask';
import { CompletedTasks } from '../../components/CompletedTasks';
import { Navbar } from '../../components/Navbar';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export const Home: React.FC = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="w-full h-screen flex justify-center items-center bg-stoneGray-100">
                <div className="w-full max-w-7xl bg-white shadow-lg rounded-lg overflow-hidden">
                    <Navbar />
                    <div className='p-7.5'>
                        <AddTask />
                        <div className="flex flex-col space-y-6">
                            <ToDoList />
                            <CompletedTasks />
                        </div>
                    </div>
                </div>
            </div>
        </DndProvider>
    );
};

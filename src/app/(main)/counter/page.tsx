"use client"

import { useState } from "react";
import React from "react";

function TodoList() {
    const [task,setTask] = useState("");
    const [tasks, setTasks] = useState<string[]>([]);
    function handleUpdateInputTask(e:React.ChangeEvent<HTMLInputElement>){
        setTask(e.target.value);
    }
    function handleAddInput(){
        setTasks([...tasks, task]);
        setTask("");
    }
    return (
        <>
            {/* To-Do List UI */}
            <div className="mt-10 max-w-md mx-auto p-4 border rounded shadow">
                <h2 className="text-2xl font-semibold mb-4">To-Do List:</h2>
                <div className = "flex flex-row-reverse gap-10">
                    <button onClick = {handleAddInput} className =" w-[100px] h-[50px] bg-blue-500 text-shadow-white flex items-center justify-center"> Add </button>
                    <input className = "bg-green-100 flex-1 text-center justify-center" placeholder="Enter Activity" value={task} onChange={handleUpdateInputTask}/>
                </div>
                <p>Description</p>
                <ul>
                    {
                        tasks.map(task => (
                            <li key={task}>
                                <p>{task}</p>
                            </li>
                        ))
                    }   
                </ul>
            </div>
        </>
    )
}
export default TodoList;
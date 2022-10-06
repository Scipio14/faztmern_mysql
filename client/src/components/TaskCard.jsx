import React from "react";
import { useTask } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task }) => {
  const { deleteTask, toggleTaskDone } = useTask();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleTaskDone(task.id);
  };

  return (
    <div className="bg-slate-300 rounded-md py-4">
      <header className="flex justify-between">
        <h2 className="text-sm font-bold">{task.title}</h2>
        <p className="text-xs">{task.description}</p>
        <span>{task.done == 1 ? "✔️" : "❌"}</span>
      </header>
      <span>{task.created_At}</span>
      <div className=" flex gap-x-1 ">
        <button
          className="bg-red-500 px-2 py-1 text-white"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-green-500 px-2 py-1 text-white"
          onClick={() => navigate(`/edit/${task.id}`)}
        >
          Edit
        </button>
        <button
          className="px-2 py-2 bg-blue-600 text-white"
          onClick={() => handleDone(task.done)}
        >
          Toggle Task
        </button>
      </div>
    </div>
  );
};

export default TaskCard;

import { useEffect } from "react";
import { useTask } from "../context/TaskProvider";
import TaskCard from "../components/TaskCard";

const TasksPage = () => {
  const { tasks, loadTasks } = useTask();
  useEffect(() => {
    loadTasks();
  }, []);

  let content;
  if (!tasks?.length) {
    return (content = <h2>No Tasks Yet</h2>);
  }

  content = tasks.map((task) => <TaskCard task={task} key={task.id} />);

  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center my-2">Tasks</h1>
      <div className="grid grid-cols-3 gap-2">{content}</div>
    </div>
  );
};

export default TasksPage;

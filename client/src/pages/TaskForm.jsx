import { useEffect, useState } from "react";
import { Form, Formik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { useTask } from "../context/TaskProvider";

const TaskForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { createTask, getTask, updateTask } = useTask();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, [task]);
  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true} //Esto para que se carguen los valores
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateTask(params.id, values);
            navigate("/");
          } else {
            await createTask(values);
          }
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
            onSubmit={handleSubmit}
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Edit Task" : "Create New Task"}
            </h1>
            <label className="block">title</label>
            <input
              type="text"
              name="title"
              placeholder="Write your title"
              onChange={handleChange}
              value={values.title}
              className="px-2 py-1 rounded-sm w-full outline-none"
            />
            <label className="block">description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="write a description"
              onChange={handleChange}
              value={values.description}
              className="px-2 py-1 rounded-sm w-full outline-none"
            ></textarea>
            <button
              className="block bg-indigo-500 px-2 py-1 w-full rounded-md text-white"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;

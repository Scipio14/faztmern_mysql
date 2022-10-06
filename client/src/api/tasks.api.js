import axios from 'axios';

export const getTasksRequest = async () =>
  await axios.get("http://localhost:8800/tasks");

export const createTaskRequest = async (task)=>{
   return await axios.post('http://localhost:8800/tasks',task)
  
}

export const deleteTaskRequest = async (id) =>
  await axios.delete(`http://localhost:8800/tasks/${id}`);

  export const getTaskRequest = async(id)=>
    await axios.get(`http://localhost:8800/tasks/${id}`);

export const updateTaskRequest = async(id,newFields)=>
  await axios.put(`http://localhost:8800/tasks/${id}`,newFields);

export const toggleTaskDoneRequest = async (id,done)=>
  await axios.put(`http://localhost:8800/tasks/${id}`,{
    done
  })
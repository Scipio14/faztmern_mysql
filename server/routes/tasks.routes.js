import {Router} from 'express';
import {getTasks,getTask,deleteTask,updateTask,createTask} from '../controllers/tasks.controllers.js'

const router = Router();

router.route('/tasks')
  .get(getTasks)
  .post(createTask);

router.route('/tasks/:id')
  .put(updateTask)
  .delete(deleteTask)
  .get(getTask);


export default router;
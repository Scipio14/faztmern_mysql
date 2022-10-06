import express from 'express';
import {PORT} from './config.js'
import cors from 'cors';
import indexRoutes from './routes/index.routes.js'
import taskRoutes from './routes/tasks.routes.js'
import {dirname,join} from 'path';
import {fileURLToPath} from 'url'

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url))// Esto me trae la dirección absoluta de dónde se encuentra la carpeta que contiene el server.js
// console.log(__dirname)

app.use(cors());
app.use(express.json());
app.use(indexRoutes);
app.use(taskRoutes);

app.use(express.static(join(__dirname,'../client/dist')))

const server = app.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${server.address().port}`)
})
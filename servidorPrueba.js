import express from 'express';
const app = express();

app.get('/',(req, res) => {
    res.send('<h1>Este es un servidor de pruebas</h1>')
})

const server = app.listen(8800,()=>{
  console.log(`Server running on: http://localhost:${server.address().port}`)
})
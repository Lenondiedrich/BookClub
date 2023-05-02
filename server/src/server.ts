
import express from 'express'
import { Router, Request, Response } from 'express';
import cors from 'cors'

const app = express();

const route = Router();

const PORT = process.env.PORT || 3333;

const HOSTNAME = process.env.HOSTNAME || 'http://localhost'

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bem-vindo!')
})

app.use(cors({
  origin: ['http://localhost:3000']
}))

// default response to unknow calls
app.use((req, res) => {
  res.status(404)
})

app.listen(PORT, () => {
  console.log(`Server listen to port ${PORT}`)
})
import express, { Express, Request, Response } from 'express';
import { router } from './routes';


const app: Express = express();
const port = process.env.PORT || 3333;

app.use(express.static('public'))
app.use(express.json())
app.use(router)

app.get('/', (req: Request, res: Response) => {
  res.send('Bem vindo!');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
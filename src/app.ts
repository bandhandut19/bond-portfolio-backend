import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/routes'
const app: Application = express()

const corsOptions = {
  origin: 'http://localhost:5173', // Allow only this origin
  // origin: 'https://bondon-portfolio.vercel.app', // Allow only this origin
  credentials: true, // Allow credentials (cookies, authorization headers)
}

//parsers
app.use(express.json())
app.use(cors(corsOptions))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173')
  // res.header(
  //   'Access-Control-Allow-Origin',
  //   'https://bondon-portfolio.vercel.app',
  // )
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  )
  next()
})

app.use('/portfolio', router)
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Bond Portfolio')
})
export default app

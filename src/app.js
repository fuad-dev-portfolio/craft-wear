import express from 'express'
import path from 'path'
import routes from './routes/index.js'

const app = express()

app.use(express.json())
app.use('/api', routes)
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')))

export default app

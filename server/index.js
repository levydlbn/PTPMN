import express from 'express'
import connectDatabase from './config/MongoDB.js'
import dotenv from 'dotenv'
import ImportData from './DataImport.js'
import studentRoute from './routes/StudentRoutes.js'

const app = express()

dotenv.config()
connectDatabase()

app.use("/import", ImportData)
app.use("/students", studentRoute)


app.get("/", (req, res) => {
    res.send("success sdfsdf")
})

app.listen(5000, () => {
    console.log('server run on port 5000')
})
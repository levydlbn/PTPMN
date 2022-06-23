import express from 'express'
import connectDatabase from './config/MongoDB.js'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import ImportData from './DataImport.js'
import studentRoute from './routes/StudentRoutes.js'
import planNewRoute from './routes/PlanNewRoutes.js'
import login from './routes/AuthRoute.js'
import teacherRoute from './routes/TeacherRoute.js'
import adminRoute from './routes/AdminRoute.js'

const app = express()

dotenv.config()
connectDatabase()

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())

app.use("/import", ImportData)
app.use("/admin", adminRoute)
app.use("/students", studentRoute)
app.use("/teacher", teacherRoute)
app.use("/plannews", planNewRoute)
app.use("/login", login)


app.get("/", (req, res) => {
    res.send("success sdfsdf")
})

app.listen(5000, () => {
    console.log('server run on port 5000')
})
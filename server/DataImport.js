import express from 'express'
import classRooms from './data/classRooms.js'
import planNews from './data/planNews.js'
import scores from './data/scores.js'
import students from './data/students.js'
import Class from './models/ClassModel.js'
import PlanNew from './models/PlanNewModel.js'
import Score from './models/ScoreModel.js'
import Student from './models/StudentModel.js'

const ImportData = express.Router()

ImportData.post("/class", (async(req, res) => {
    await Class.remove({})
    const importClass = await Class.insertMany(classRooms)
    res.send({ importClass })
}))

ImportData.post("/student", (async(req, res) => {
    await Student.remove({})
    const importStudent = await Student.insertMany(students)
    res.send({ importStudent })
}))

ImportData.post("/scores", (async(req, res) => {
    await Score.remove({})
    const importScore = await Score.insertMany(scores)
    res.send({ importScore })
}))

ImportData.post("/plannew", (async(req, res) => {
    await PlanNew.remove({})
    const importPlanNew = await PlanNew.insertMany(planNews)
    res.send({ importPlanNew })
}))


export default ImportData
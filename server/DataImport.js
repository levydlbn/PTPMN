import express from 'express'
import classRooms from './data/classRooms.js'
import planNews from './data/planNews.js'
import scores from './data/scores.js'
import students from './data/students.js'
import Class from './models/ClassModel.js'
import PlanNew from './models/PlanNewModel.js'
import Score from './models/ScoreModel.js'
import Student from './models/StudentModel.js'
import bcrypt from 'bcrypt'
import Teacher from './models/TeacherModel.js'
import teachers from './data/teacher.js'
import SchoolYear from './models/SchoolYearModel.js'
import schoolyears from './data/schoolYears.js'
import verifyToken from './Middleware/verifyToken.js'


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

ImportData.post("/schoolyear", (async(req, res) => {
    await SchoolYear.remove({})
    const importPlanNew = await SchoolYear.insertMany(schoolyears)
    res.send({ importPlanNew })
}))

ImportData.post("/addStudent", async(req, res) => {

    try {
        const newStudent = await new Student({
            MALOP: req.body.MALOP,
            HOHS: req.body.HOHS,
            TENHS: req.body.TENHS,
            TENDN: req.body.TENDN,
            PASSWORD: req.body.PASSWORD,
            GIOITINH: req.body.GIOITINH,
            NGAYSINH: req.body.NGAYSINH,
        })

        const studn = await newStudent.save()
        res.status(200).json(studn)

    } catch (error) {
        res.status(500).send(error)
    }
})

ImportData.post("/addTeacher", async(req, res) => {
    await Teacher.remove({})
    const importTeacher = await Teacher.insertMany(teachers)
    res.send({ importTeacher })
})


export default ImportData
import express from 'express'
import bcrypt from 'bcrypt'
import asyncHandler from 'express-async-handler'
import Teacher from '../models/TeacherModel.js'

const teacherRoute = express.Router()

//get all teacher
teacherRoute.get("/", asyncHandler(
    async(req, res) => {
        const teachers = await Teacher.find({})
        res.status(200).json(teachers)
    }
))

// get single teacher 
teacherRoute.get("/:id", asyncHandler(
    async(req, res) => {
        const teacher = await Teacher.findById(req.params.id)
        if (teacher) {
            res.json(teacher)
        } else {
            res.status(404).json("Not Found Teacher")
        }
    }
))


//add teacher
teacherRoute.post("/addTeacher", asyncHandler(
    async(req, res) => {

        try {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.PASSWORD, salt)
            const newTeacher = await new Teacher({
                HOGV: req.body.HOGV,
                TENGV: req.body.TENGV,
                TENDN: req.body.TENDN,
                PASSWORD: hashed,
                GIOITINH: req.body.GIOITINH,
                NGAYSINH: req.body.NGAYSINH,
            })

            const neTe = await newTeacher.save()
            res.status(200).json(neTe)

        } catch (error) {
            res.status(500).send(error)
        }
    }
))

//update single student
teacherRoute.post("/updateTeacher/:id", asyncHandler(

    async(req, res) => {
        try {
            const upTe = await Teacher.findByIdAndUpdate(req.params.id, {
                $set: {
                    HOGV: req.body.HOGV,
                    TENGV: req.body.TENGV,
                    TENDN: req.body.TENDN,
                    PASSWORD: req.body.PASSWORD,
                    GIOITINH: req.body.GIOITINH,
                    NGAYSINH: req.body.NGAYSINH,
                }
            })

            const listTeacher = await Teacher.find()
            res.status(200).json(upTe)

        } catch (error) {
            res.status(500).send(error)
        }

    }
))

// remove student
teacherRoute.post("/removeTeacher/:id", asyncHandler(
    async(req, res) => {
        try {
            const removeStu = await Teacher.findByIdAndRemove(req.params.id)
            const listTeacher = await Teacher.find()
            res.status(200).json(removeStu)
        } catch (error) {
            res.status(500).send(error)
        }
    }
))

export default teacherRoute
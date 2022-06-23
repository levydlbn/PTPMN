import express from 'express'
import bcrypt from 'bcrypt'
import Student from '../models/StudentModel.js'
import Teacher from '../models/TeacherModel.js'
import asyncHandler from 'express-async-handler'


const login = express.Router()

// login for student
login.post("/student", asyncHandler(
    async(req, res) => {
        try {
            const user = await Student.findOne({ TENDN: req.body.TENDN })
            if (!user) {
                res.status(404).json("Wrong username")
            }
            const validPassword = await bcrypt.compare(
                req.body.PASSWORD,
                user.PASSWORD
            )
            if (!validPassword) {
                res.status(404).json("Wrong Password")
            }
            if (user && validPassword) {
                res.status(200).json(user)
            }
        } catch (error) {
            res.status(404).json(error)
        }
    }
))

//login for teacher
login.post("/teacher", asyncHandler(
    async(req, res) => {
        try {
            const user = await Teacher.findOne({ TENDN: req.body.TENDN })
            if (!user) {
                res.status(404).json("Wrong username")
            }
            const validPassword = await bcrypt.compare(
                req.body.PASSWORD,
                user.PASSWORD
            )
            if (!validPassword) {
                res.status(404).json("Wrong Password")
            }
            if (user && validPassword) {
                res.status(200).json(user)
            }
        } catch (error) {
            res.status(404).json(error)
        }
    }
))



export default login
import express from 'express'
import asyncHandler from 'express-async-handler'
import Score from '../models/ScoreModel.js'
import Student from '../models/StudentModel.js'
import bcrypt from 'bcrypt'
import verityTokenTeacher from '../Middleware/verifiyTokenTeacher.js'

const studentRoute = express.Router()

//get all student in school
studentRoute.get("/", asyncHandler(
    async(req, res) => {
        const students = await Student.find({})
        res.status(200).json(students)
    }
))

//get all student in class
studentRoute.get("/class/:id", asyncHandler(
    async(req, res) => {
        const students = await Student.find({ MALOP: req.params.id })
        res.json(students)
    }
))

//get single student
studentRoute.get("/:id", asyncHandler(
    async(req, res) => {
        const student = await Student.findById(req.params.id).populate([{ path: 'MALOP', strictPopulate: false }])
        if (student) {
            res.json(student)
        } else {
            res.status(404)
            throw new Error("Student not found")
        }
    }
))

//add student
studentRoute.post("/addStudent", asyncHandler(
    async(req, res) => {

        try {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.PASSWORD, salt)
            const newStudent = await new Student({
                MALOP: req.body.MALOP,
                HOHS: req.body.HOHS,
                TENHS: req.body.TENHS,
                TENDN: req.body.TENDN,
                PASSWORD: hashed,
                GIOITINH: req.body.GIOITINH,
                NGAYSINH: req.body.NGAYSINH,
            })

            const studn = await newStudent.save()
            res.status(200).send("add student success")

        } catch (error) {
            res.status(500).send(error)
        }
    }))

//update single student
studentRoute.post("/updateStudent/:id", asyncHandler(

    async(req, res) => {
        try {
            const upStu = await Student.findByIdAndUpdate(req.params.id, {
                $set: {
                    HOHS: req.body.HOHS,
                    TENHS: req.body.TENHS,
                    GIOITINH: req.body.GIOITINH,
                    NGAYSINH: req.body.NGAYSINH,
                }
            })

            const listStudent = await Student.find()
            res.status(200).json(upStu)

        } catch (error) {
            res.status(500).send(error)
        }

    }
))

// remove student
studentRoute.post("/removeStudent/:id", asyncHandler(
    async(req, res) => {
        try {
            const removeStu = await Student.findByIdAndRemove(req.params.id)
            const listStudent = await Student.find()
            res.status(200).json(removeStu)
        } catch (error) {
            res.status(500).send(error)
        }
    }
))


//get all score
studentRoute.get("/scores", asyncHandler(
    async(req, res) => {
        try {
            const scores = await Score.find({})
            res.json(scores)
        } catch (error) {
            res.status(500).json(error)
        }
    }
))

//get single scores
studentRoute.get("/scores/:id", asyncHandler(
        async(req, res) => {
            const score = await Score.find({ MAHS: req.params.id })
            res.json(score)
        })

)

//add scores
studentRoute.post("/addScore", asyncHandler(
    async(req, res) => {
        try {

            const newScore = await new Score({
                HOCKY: req.body.HOCKY,
                MAHS: req.body.MAHS,
                TOAN: req.body.TOAN,
                LY: req.body.LY,
                HOA: req.body.HOA,
                SINH: req.body.SINH,
                VAN: req.body.VAN,
                ANH: req.body.ANH,
                SU: req.body.SU,
                DIA: req.body.DIA,
                GDCN: req.body.GDCN,
            })

            const studn = await newScore.save()
            res.status(200).send("add score success")
        } catch (error) {
            res.status(500).send(error)
        }
    }))

studentRoute.post("/updateScore/:id", asyncHandler(

    async(req, res) => {
        try {
            const upScore = await Score.findByIdAndUpdate(req.params.id, {
                $set: {
                    TOAN: req.body.TOAN,
                    LY: req.body.LY,
                    HOA: req.body.HOA,
                    SINH: req.body.SINH,
                    VAN: req.body.VAN,
                    ANH: req.body.ANH,
                    SU: req.body.SU,
                    DIA: req.body.DIA,
                    GDCN: req.body.GDCN,
                }
            })

            res.status(200).json(upScore)

        } catch (error) {
            res.status(500).send(error)
        }

    }
))





// productRoute.get("/", asyncHandler(
//     async(req, res) => {
//         const products = await Product.find({})
//         res.json(products)
//     }
// ))

// // Tìm kiếm
// // Product.find({
// //         price: { $gt: 200000 }
// //     })
// //     .then(data => {
// //         console.log(data)
// //     })


// //get single product
// productRoute.get("/:id", asyncHandler(
//     async(req, res) => {
//         const product = await Product.findById(req.params.id)
//         if (product) {
//             res.json(product)
//         } else {
//             res.status(404)
//             throw new Error("Product not Found")
//         }
//     }
// ))

export default studentRoute
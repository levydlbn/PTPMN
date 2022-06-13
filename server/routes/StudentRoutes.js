import express from 'express'
import asyncHandler from 'express-async-handler'
import Score from '../models/ScoreModel.js'
import Student from '../models/StudentModel.js'

const studentRoute = express.Router()

//get all student
studentRoute.get("/", asyncHandler(
    async(req, res) => {
        const students = await Student.find({})
        res.json(students)
    }
))

//get all score
studentRoute.get("/scores", asyncHandler(
    async(req, res) => {
        const scores = await Score.find({})
        res.json(scores)
    }
))

//get single scores
studentRoute.get("/scores/:id", asyncHandler(
    async(req, res) => {
        const scores = await Score.findById(req.params.id).populate([{ path: 'MAHS', strictPopulate: false }])
        res.json(scores)
    }
))

//get single product
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
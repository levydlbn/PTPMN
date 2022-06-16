import express from 'express'
import asyncHandler from 'express-async-handler'
import PlanNew from '../models/PlanNewModel.js'

const planNewRoute = express.Router()

// get all plan new

planNewRoute.get("/", asyncHandler(
    async(req, res) => {
        const plannews = await PlanNew.find({})
        res.json(plannews)
    }
))

// get single plan-new
planNewRoute.get("/:id", asyncHandler(
    async(req, res) => {
        const plannew = await PlanNew.findById(req.params.id)
        res.json(plannew)
    }
))

export default planNewRoute;
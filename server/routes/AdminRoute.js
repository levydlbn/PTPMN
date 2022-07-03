import express from 'express'
import asyncHandler from 'express-async-handler'
import Class from '../models/ClassModel.js'
import PlanNew from '../models/PlanNewModel.js'
import SchoolYear from '../models/SchoolYearModel.js'

const adminRoute = express.Router()

//get all school year
adminRoute.get("/schoolYear", asyncHandler(
    async(req, res) => {
        try {
            const allSchoolYear = await SchoolYear.find({})
            res.status(200).json(allSchoolYear)
        } catch (error) {
            res.status(500).json(error)
        }
    }
))

// get single school year
adminRoute.get("/schoolYear/:id", asyncHandler(
    async(req, res) => {
        try {
            const singleSY = await SchoolYear.findById(req.params.id)
            res.status(200).json(singleSY)
        } catch (error) {
            res.status(500).json(error)
        }
    }
))


//add school year
adminRoute.post("/addSchoolYear", asyncHandler(
    async(req, res) => {
        try {
            const newSchoolYear = await new SchoolYear({
                THOIGIAN: req.body.THOIGIAN
            })
            await newSchoolYear.save()
            const ListSchoolYear = await SchoolYear.find({})
            res.status(200).json(ListSchoolYear)
        } catch (error) {
            res.status(500).json(error)
        }
    }
))

//update school year
adminRoute.post("/updateSchoolYear/:id", asyncHandler(
    async(req, res) => {
        try {
            const upSh = await SchoolYear.findByIdAndUpdate(req.params.id, {
                $set: {
                    THOIGIAN: req.body.THOIGIAN
                }
            })
            res.status(200).json(upSh)
        } catch (error) {
            res.status(500).json(error)
        }
    }
))

//remove school year
adminRoute.post("/removeSchoolYear/:id", asyncHandler(
    async(req, res) => {
        try {
            const rmSh = await SchoolYear.findByIdAndRemove(req.params.id)
            res.status(200).json(rmSh)
        } catch (error) {
            res.status(500).json(error)
        }
    }
))



// get all class in year
adminRoute.get("/classInYear/schoolYear/:id", asyncHandler(
    async(req, res) => {
        try {
            const classInYear = await Class.find({ NAMHOC: req.params.id })
            res.status(200).json(classInYear)
        } catch (error) {
            res.status(500).json(error)
        }
    }
))

// get single class
adminRoute.get("/class/:id", asyncHandler(
    async(req, res) => {
        try {
            const classSingle = await Class.findById(req.params.id)
            res.status(200).json(classSingle)
        } catch (error) {
            res.status(500).json(error)
        }
    }
))

// add class
adminRoute.post("/addClass", asyncHandler(
    async(req, res) => {
        try {
            const newClass = await new Class({
                GVCN: req.body.GVCN,
                PHONGHOC: req.body.PHONGHOC,
                NAMHOC: req.body.NAMHOC
            })
            await newClass.save()
            const listClass = await Class.find({ NAMHOC: req.body.NAMHOC })
            res.status(200).json(listClass)
        } catch (error) {
            res.status(500).json(error)
        }
    }
))



// update class 
adminRoute.post("/updateClass/:id", asyncHandler(
    async(req, res) => {
        try {
            const upClass = await Class.findByIdAndUpdate(req.params.id, {
                $set: {
                    GVCN: req.body.GVCN,
                    PHONGHOC: req.body.PHONGHOC,
                    NAMHOC: req.body.NAMHOC
                }
            })
            res.status(200).json(upClass)
        } catch (error) {
            res.status(500).json(error)
        }
    }
))

adminRoute.post("/removeClass/:id", asyncHandler(
    async(req, res) => {
        try {
            const rmClass = await Class.findByIdAndDelete(req.params.id)
            res.status(200).json(rmClass)
        } catch (error) {
            res.status(500).json(error)
        }
    }
))

adminRoute.post("/addPlanNew", asyncHandler(
    async(req, res) => {
        try {
            const newPlanNew = await new PlanNew({
                THOIGIAN: req.body.THOIGIAN,
                TIEUDE: req.body.TIEUDE,
                NOIDUG: req.body.NOIDUG,
                TYPE: req.body.TYPE,
            })

            const addpn = await newPlanNew.save()
            res.status(200).json(addpn)
        } catch (error) {
            res.status(500).json(error)
        }
    }
))

adminRoute.post("/updatePlanNew/:id", asyncHandler(
    async(req, res) => {
        try {
            const upPn = await PlanNew.findByIdAndUpdate(req.params.id, {
                $set: {
                    THOIGIAN: req.body.THOIGIAN,
                    TIEUDE: req.body.TIEUDE,
                    NOIDUG: req.body.NOIDUG,
                    TYPE: req.body.TYPE,
                }
            })
            res.status(200).json(upPn)
        } catch (error) {
            res.status(500).json(error)
        }
    }
))

adminRoute.post("/removePlanNew/:id", asyncHandler(
    async(req, res) => {
        try {
            const rmPn = await PlanNew.findByIdAndDelete(req.params.id)
            res.status(200).json(rmPn)
        } catch (error) {
            res.status(404).json(error)
        }
    }
))


export default adminRoute
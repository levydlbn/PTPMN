import mongoose from "mongoose";

const planNewSchema = mongoose.Schema({
    THOIGIAN: {
        type: Date,
        require: true,
    },
    TIEUDE: {
        type: String,
        require: true
    },
    NOIDUNG: {
        type: String,
        require: true,
    },
    TYPE: {
        type: String,
        require: true,
        default: "kehoach"
    }

})

const PlanNew = mongoose.model("PlanNew", planNewSchema)

export default PlanNew
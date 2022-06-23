import mongoose from "mongoose";

const classSchema = mongoose.Schema({
    GVCN: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Teacher",
    },
    PHONGHOC: {
        type: String,
        require: true
    },
    NAMHOC: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "SchoolYear"
    }

}, {
    collection: 'Class'
})

const Class = mongoose.model("Class", classSchema)

export default Class
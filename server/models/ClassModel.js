import mongoose from "mongoose";

const classSchema = mongoose.Schema({
    GVCN: {
        type: String,
        require: true
    },
    PHONGHOC: {
        type: String,
        require: true
    }
}, {
    collection: 'Class'
})

const Class = mongoose.model("Class", classSchema)

export default Class
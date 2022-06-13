import mongoose from "mongoose";

const studentSchema = mongoose.Schema({

    MALOP: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Class"
    },
    HOHS: {
        type: String,
        require: true
    },
    TENHS: {
        type: String,
        require: true
    },
    GIOITINH: {
        type: String,
        require: true
    },
    NGAYSINH: {
        type: Date,
        require: true
    }

}, {
    collection: 'Student'
})

const Student = mongoose.model("Student", studentSchema)

export default Student
import mongoose from "mongoose";

const studentSchema = mongoose.Schema({

    MALOP: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Class",
    },
    HOHS: {
        type: String,
        require: true,
    },
    TENHS: {
        type: String,
        require: true,
    },
    TENDN: {
        type: String,
        require: true,
    },
    PASSWORD: {
        type: String,
        require: true,
    },
    GIOITINH: {
        type: String,
        require: true,
    },
    NGAYSINH: {
        type: String,
        require: true,
    },
    USERTYPE: {
        type: String,
        require: true,
        default: "student",
    }

}, {
    collection: 'Student'
})

const Student = mongoose.model("Student", studentSchema)

export default Student
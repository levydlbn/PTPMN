import mongoose from "mongoose";

const teacherSchema = mongoose.Schema({
    HOGV: {
        type: String,
        require: true
    },
    TENGV: {
        type: String,
        require: true
    },
    TENDN: {
        type: String,
        require: true
    },
    PASSWORD: {
        type: String,
        require: true,
    },
    NGAYSINH: {
        type: String,
        require: true,
    },
    GIOITINH: {
        type: String,
        require: true
    },
    TYPE: {
        type: String,
        require: true,
        default: "GV"
    }
}, {
    collection: 'Teacher'
})

const Teacher = mongoose.model('Teacher', teacherSchema)

export default Teacher
import mongoose from "mongoose";

const schoolYearModel = mongoose.Schema({
    THOIGIAN: {
        type: String,
        require: true
    },
}, {
    collection: "SchoolYear"
})

const SchoolYear = mongoose.model("SchoolYear", schoolYearModel)

export default SchoolYear
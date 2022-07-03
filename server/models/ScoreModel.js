import mongoose from "mongoose";

const scoreSchema = mongoose.Schema({
    HOCKY: {
        type: String,
        require: true
    },
    MAHS: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: "Student"
    },
    TOAN: {
        type: String,
        require: true,
    },
    LY: {
        type: String,
        require: true,
    },
    HOA: {
        type: String,
        require: true,
    },
    SINH: {
        type: String,
        require: true,
    },
    VAN: {
        type: String,
        require: true,
    },
    ANH: {
        type: String,
        require: true,
    },
    SU: {
        type: String,
        require: true
    },
    DIA: {
        type: String,
        require: true
    },
    GDCN: {
        type: String,
        require: true
    },

}, {
    collection: 'Score'
})

const Score = mongoose.model("Score", scoreSchema)

export default Score
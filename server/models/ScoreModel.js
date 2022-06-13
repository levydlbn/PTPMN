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
        type: Number,
        require: true,
    },
    LY: {
        type: Number,
        require: true,
    },
    HOA: {
        type: Number,
        require: true,
    },
    SINH: {
        type: Number,
        require: true,
    },
    VAN: {
        type: Number,
        require: true,
    },
    DTB: {
        type: Number,
        require: true,
    },
    XEPLOAI: {
        type: String,
        require: true,
    }
}, {
    collection: 'Score'
})

const Score = mongoose.model("Score", scoreSchema)

export default Score
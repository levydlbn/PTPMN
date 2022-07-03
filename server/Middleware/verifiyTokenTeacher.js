import verifyToken from "./verifyToken.js"

const verityTokenTeacher = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.USERTYPE == "teacher") {
            next()
        } else {
            return res.status(403).json("You're not allowed to delete other")
        }
    })
}

export default verityTokenTeacher
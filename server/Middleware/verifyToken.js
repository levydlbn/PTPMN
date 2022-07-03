import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
    const token = req.headers.token
    if (token) {
        const accessToken = token.split(" ")[1]
        jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
            if (err) {
                return res.status(404).json("token is not valid")
            }
            req.user = user
            next()
        })
    } else {
        res.status(405).json("you are not authenticated")
    }
}

export default verifyToken
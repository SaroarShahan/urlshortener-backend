const router = require("express").Router()
const {check, validationResult} = require("express-validator")

const {generatePassword} = require("./../utils/password")
const {User} = require("./../config/db")
const _handlePromise = require("./../utils/handlePromise")

const signupValidator = [
    check("name").exists(),
    check("email").isEmail(),
    check("password").isLength({min: 5})
]

router.post("/signup", signupValidator, async (req, res) => {
    const error = validationResult(req)

    if(!error.isEmpty()) {
        return res.status(422).json({error: error.array()})
    }

    const {name, email} = req.body
    const {salt, hash} = generatePassword(req.body.password)
    const password = `${salt}.${hash}`

    const [user, userError] = await _handlePromise(User.create({name, email, password}))
    if(userError && !user) {
        return res.status(400).json({error: true, message: userError.message})
    }
    
    return res.status(200).json({error: false, message: "User created successfully"})
})

module.exports = router
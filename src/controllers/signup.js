const router = require("express").Router()
const {check, validationResult} = require("express-validator")

const {generatePassword} = require("./../utils/password")
const {User} = require("./../config/db")

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
})
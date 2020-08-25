const crypto = require("crypto")

function getRandomSalt() {
    return crypto.randomBytes(8).toString("hex").slice(0, 16)
}

function mix(password, salt) {
    return crypto.pbkdf2Sync(password, salt, 10000, 64, "shah512").toString("hex")
}

function generatePassword(password) {
    const salt = getRandomSalt()
    const mix = mix(password, salt)

    return {salt, mix}
}

function validatePassword(password, hash, salt) {
    let newHash = mix(password, salt)

    return hash === newHash
}

module.exports = {
    generatePassword,
    validatePassword
}
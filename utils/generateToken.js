const jwt = require('jsonwebtoken');

//SECRET_KEY

const generateToken = (student)=>{
    return jwt.sign({usn:student.usn}, process.env.SECRET_KEY, { expiresIn: '1h' });
}

module.exports.generateToken = generateToken;
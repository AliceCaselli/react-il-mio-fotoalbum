const jwt = require("jsonwebtoken");

function generateToken(user) {
    const payload = {
        id: user.id,
        username: user.username
    };

    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1h"
    });
}

const authenticateWithJWT = (req, res, next) => {
    jwt.verify(token, process.env.JWT_SECRET,
        (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            next();

        });
};

module.exports = {
    generateToken,
    authenticateWithJWT
};
// const { JsonWebTokenError } = require("jsonwebtoken");
// const AuthException = require("../exceptions/authException");
const generateToken = require("../middlewares/jwtToken");

function login(req, res) {
    // leggo username e password da req.body
    const { username, password } = req.body;
    console.log("ciao");

    if (!username || !password) {
        // res.status(400).send("username e password sono obbligatori");
        // return;

        // throw new AuthException("username e password sono obbligatori", 400)
        // alert("username e password sono obbligatori")
        console.log("username e pass obbligatori");
    }

    // leggo il file users.json
    const users = require("../usersDb.json");

    // controllo se c'è una corrispondenza tra username e password
    const user = users.find(
        (user) => user.username === username && user.password === password
    );

    if (!user) {
        // res.status(401).send("username e/o password errati");
        // return;
        // throw new AuthException("username e/o password errati", 401)
        // alert("username e/o password errati")
        console.log("username e/o pass errati");
    }

    // una volta trovato un utente con quell'username e password,
    // possiamo generare un token JWT e inviarlo al client
    const token = generateToken(user);

    res.json({
        token
    });
}

module.exports = { login };
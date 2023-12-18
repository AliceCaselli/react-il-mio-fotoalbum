const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const port = 8081;
// const postController = require("./controllers/posts");
const app = express();

const routerPost = require("./routers/posts");
const routerAuth = require("./routers/auth");
// const { generateToken } = require("./middlewares/jwtToken");

//configuro express per leggere i dati in formato json
app.use(express.json());

//configuro express per leggere i dati in formato x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
app.use(express.static("public"));

// Creiamo il progetto base con una rotta / che ritorna un h1 con scritto Benvenuto nel mio blog!
app.get('/', (req, res) => {
    res.send("<h1>Benvenuti nel mio blog</h1>");
});

// app.post('/login', (req, res) => {
//     const token = generateToken(matchingUser)

//     res.json({ token })
// })

// Le rotte relative ai post dovranno chiamare la funzione relativa dal controller dedicato controllers/posts.js
app.use("/posts", routerPost);

app.use("/login", routerAuth, (req, res) => {
    res.redirect("/posts")
});


app.listen(port, () => {
    console.log("http://localhost:" + port);
});
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());
app.use(express.json());

const pool = require('./db')
const port = 5000;

app.get("/get-user/:username", async (req, res) => {
    try {
        const {username} = req.params;
        const user = await (await pool).query("select * from users where username=?", [username])

        console.log(user[0])
        if (user[0])
            res.json(user[0])
        else
            res.json(null)

    } catch (error) {
        console.log(error.message);
    }
})

app.post("/add-user", async (req, res) => {
    try {
        const {username, password} = req.body
        console.log(req.body)

        const newUser = await (await pool).query(
            "insert into users(username, password) values(?,?) returning *",
            [username, password]
            )

        window.location("/login")

    } catch (error) {
        console.log(error);
    }
})

app.listen(port, () => {
    console.log(`server port: ${port}`)
})
const express = require('express')
const sendMail = require('./mail')
const cors = require("cors")
const path = require('path')

const app = express()
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

const PORT = process.env.PORT || 7070;

app.post("/contact/message", (req, res) => {
    const { name, email, subject, message } = req.body

    sendMail(name, email, subject, message, (err, data) => {
        if (err) {
            res.status(500).json({ message: 'Internal error' })
        } else {
            res.json({ message: 'Message sent!!!!!' })
        }
    })
})

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static('build'))

//     app.get('/*', function (req, res) {
//         res.sendFile(path.join(__dirname, 'build', 'index.html'));
//     });
// }

// app.use(express.static(path.join(__dirname, "build")));
// app.use(express.static("build"));
app.get('/', (req, res) => { res.send('Hello from Dafrigroup!')})


// app.use((req, res, next) => {
//     res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})




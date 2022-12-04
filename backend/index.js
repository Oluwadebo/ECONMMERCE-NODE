const express = require("express");
const path = require('path');
const dotenv = require('dotenv')
const http = require("http");
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary')
const { Server } = require("socket.io");

const app = express();
dotenv.config();

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['POST', 'PUT', 'GET']
    }
});

const { checker } = require("./middleware/middleware");
const { users, adduser } = require("./store");
const { sendmail } = require("./mailer");
const { adminregist, adminlogin, admin, file } = require("./control/admincontroler");
const { display, del, login, regist, getTodo, addtocart } = require("./control/customercontroler");

app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true, }).then((res) => {
    console.log("connected successfuly")
}).catch(err => {
    console.log(err);
})

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

io.on("connection", (socket) => {
    console.log("User connected");
    console.log(socket.id);
    adduser({ socketId: socket.id })
    console.log(users);
    socket.on("chat", (data) => {
        console.log(data)
        socket.broadcast.emit("user-sent", data)

    })

    socket.on("join-group", (group) => {
        socket.join(group)
        console.log(group);
    })

    socket.on("msg-to-group", ({ group, message }) => {
        socket.to(group).emit("received", message);
    })
})

app.post("/customersignup", regist)
app.post("/customersignin", login)
app.post("/adminsignup", adminregist)
app.post("/adminsignin", adminlogin)
app.get("/dashboard", display)
app.get("/Admin", admin)
app.post("/gettodo", getTodo)
app.post("/files",file)
app.post("/del", del)
app.post("/addtocart", addtocart)

const port = process.env.PORT || 5010

app.listen(port, () => {
    // sendmail(["adewoleadekulemercy@gmail.com","felixadegboyega2019@gmail.com","bakareoluwatobi22@gmail.com"])
    console.log("Server started");
})
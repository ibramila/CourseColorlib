const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const { Schema } = mongoose;
const courseScheme = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        information: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

mongoose.set('strictQuery', false);
const Courses = mongoose.model("courses", courseScheme);

const PORT = process.env.PORT;
const DB = process.env.DB_URL.replace("<password>", process.env.DB_PASSWORD)
mongoose.connect(DB, (err) => {
    console.log(err);
    if (!err) {
        console.log("Connected");
        app.listen(PORT, () => {
            console.log(`Port:${PORT}`);
        })
    }
})

app.get("/courses", (req, res) => {
    Courses.find({}, (err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            res.status(500).json({ message: err })
        }
    })
})

app.get("/courses/:id", (req, res) => {
    const { id } = req.params;
    Courses.findById(id, (err, docs) => {
        if (!err) {
            if (docs) {
                res.send(docs)
                res.status(200)
            } else {
                res.status(404).json({ message: "Not Found" })
            }
        } else {
            res.status(500).json(
                { message: err }
            )
        }
    })
})

app.post("/courses", async (req, res) => {
    const course = req.body
    try {
        await Courses.create(course)
        res.status(200).json({
            message: "success"
        })
    } catch (error) {
        console.log(error);
    }
})

app.delete("/courses/:id", (req, res) => {
    const { id } = req.params;
    Courses.findByIdAndDelete(id, (err) => {
        if (!err) {
            res.send("Successfully DELETE")
        } else {
            res.status(500).json({
                message: err
            })
        }
    })
})
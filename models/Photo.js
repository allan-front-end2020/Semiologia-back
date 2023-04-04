const mongoose = require("mongoose")
const {Schema} = mongoose

const photoSchema = new Schema({
    image: String,
    title: String,
    likes: Array,
    comments: Array,
    UserId: mongoose.ObjectId,
    userNAme: String,


},{
    timestamps: true
})

constPhoto = mongoose.model("Photo",photoSchema)

module.exports = Photo
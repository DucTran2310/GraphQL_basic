import mongoose from "mongoose";

const Schema = mongoose.Schema

const AuthorSchema = new Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  }
})

// Sử dụng export default để export một object là model
export default mongoose.model('authors', AuthorSchema)

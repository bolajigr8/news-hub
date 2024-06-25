import mongoose from 'mongoose'

const contactSchema = new mongoose.Schema(
  // defining fields and properties for our data

  {
    // db only carries the url, the img itself is supposed to be uploaded and stored in a drive
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const Contact =
  mongoose.models.contact || mongoose.model('contact', contactSchema)

export default Contact

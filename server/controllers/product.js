const mongoose = require('mongoose')

const url = 'mongodb+srv://Kenan:K2VRRTZFQ5QJ@cluster0.lgrbc.mongodb.net/example'
mongoose
  .connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('db is connected'))

const productSchema = new mongoose.Schema({
  id: String,
  title: String,
  image: String,
  price: Number,
  description: String
})
const productModel = mongoose.model('products', productSchema)

exports.getProduct = async (req, res) => {
  const productList = await productModel.find({})
  res.json(productList)
}

import { rFile } from '../functions/readFile'

exports.getProduct = async (req, res) => {
  const products = await rFile('product')
  res.json(products)
}

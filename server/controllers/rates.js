import axios from 'axios'

exports.getRates = async (req, res) => {
  const {
    data: { rates }
  } = await axios('https://api.exchangeratesapi.io/latest?symbols=USD,CAD')
  res.json(rates)
}

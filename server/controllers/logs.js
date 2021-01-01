const mongoose = require('mongoose')

const url = 'mongodb+srv://Kenan:K2VRRTZFQ5QJ@cluster0.lgrbc.mongodb.net/example'

mongoose
  .connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('db is connected'))

const logsSchema = new mongoose.Schema({
  time: String,
  log: String
})

const logsModel = mongoose.model('logs', logsSchema)
// eslint-disable-next-line import/prefer-default-export
export const setLogs = async (req, res) => {
  const postlog = req.body.newLog
  // eslint-disable-next-line new-cap
  await new logsModel({
    time: postlog.time,
    log: postlog.log
  }).save()
  res.json({ message: 'log is posted' })
}

export const getLogs = async (req, res) => {
  const logs = await logsModel.find({})
  res.json(logs)
}

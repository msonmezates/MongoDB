module.exports = {
  greeting(req, res) {
    res.send({ test: 'hi there' })
  },
  create(req, res) {
    console.log(req.body)
    res.send({ test: 'hi there' })
  }
}
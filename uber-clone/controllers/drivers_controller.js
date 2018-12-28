const Driver = require('../models/driver');

module.exports = {
  greeting(req, res) {
    res.send({ test: 'hi there' })
  },
  index(req, res, next) {
    const { lng, lat } = req.query;
    Driver.geoSearch(
      { type: 'Point', coordinates: [lng, lat] },
      { near: [lng, lat], maxDistance: 200000}
    )
      .then(drivers => res.send(drivers))
      .catch(err);
  },
  create(req, res, next) {
    const driverProps = req.body;
    Driver.create(driverProps)
      .then(driver => {
        res.send(driver);
      })
      .catch(next);
  },
  edit(req, res, next) {
    const { id } = req.params;
    const driverProps = req.body;
    Driver.findOneAndUpdate({ _id: id }, { $set: driverProps }, { new: true, multi: true })
      .then(driver => res.send({ driver }))
      .catch(next);
  },
  delete(req, res, next) {
    const { id } = req.params;
    Driver.findOneAndRemove({ _id: id })
      .then((driver) => res.status(204).send(driver))
      .catch(next);
  }
}
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for geolocation
const PointSchema = new Schema({
  type: {
    type: String,
    default: 'Point'
  },
  coordinates: {
    type: [Number],
    index: '2dsphere',
    required: true
  },
  geometry: PointSchema
});

const DriverSchema = Schema({
  email: {
    type: String,
    required: true
  },
  isDriving: {
    type: Boolean,
    default: false
  }
});

const Driver = mongoose.model('driver', DriverSchema); 

module.exports = Driver;
const Artist = require('../models/artist');

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 */
module.exports = () => {
  const minAgeArtist = Artist.find({}).sort({ age: 1 }).limit(1).then(artists => artists[0].age);
  const maxAgeArtist = Artist.find({}).sort({ age: -1 }).limit(1).then(artists => artists[0].age);

  return Promise.all([minAgeArtist, maxAgeArtist])
    .then(result => {
      return { min: minAgeArtist, max: maxAgeArtist };
    });
};

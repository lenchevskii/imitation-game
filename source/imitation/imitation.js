const R = require('ramda')
const IMITATION_HANDLER = require('./imitation.handler')

/**
 * @param {Array} collection 
 * @param {Function} fnc 
 */
const mapTCO =
  (collection, fnc) =>
    IMITATION_HANDLER.mapR(collection, fnc)

/**
 * @param {Array} collection 
 * @param {Function} fnc 
 * @param {*} initial 
 */
const reduceTCO =
  (collection, fnc, initial) =>
    R.compose(
      IMITATION_HANDLER.reduceR(R.__, fnc),
      IMITATION_HANDLER.maybeInitial(initial, R.__)
    )(collection)

module.exports = {
  mapTCO,
  reduceTCO
}

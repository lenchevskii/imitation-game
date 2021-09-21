const R = require('ramda')
const IMITATION_HANDLER = require('./imitation.handler')

/**
 * @param {Array} collection 
 * @param {Function} fnc 
 */
const mapTCE =
  (collection, fnc) =>
    IMITATION_HANDLER.mapR(collection, fnc)

/**
 * @param {Array} collection 
 * @param {Function} fnc 
 * @param {*} initial 
 */
const reduceTCE =
  (collection, fnc, initial) =>
    R.compose(
      IMITATION_HANDLER.reduceR(R.__, fnc),
      IMITATION_HANDLER.maybeInitial(initial, R.__)
    )(collection)

module.exports = {
  mapTCE,
  reduceTCE
}

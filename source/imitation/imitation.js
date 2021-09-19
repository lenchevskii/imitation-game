const R = require('ramda')
const IMITATION_HELPER = require('./imitation.helper')

/**
 * @param {Array} collection 
 * @param {Function} fnc 
 */
const mapTCE =
  (collection, fnc) =>
    IMITATION_HELPER.mapR(collection, fnc)

/**
 * @param {Array} collection 
 * @param {Function} fnc 
 * @param {*} initial 
 */
const reduceTCE =
  (collection, fnc, initial) =>
    R.compose(
      IMITATION_HELPER.reduceR(R.__, fnc),
      IMITATION_HELPER.maybeInitial(initial, R.__)
    )(collection)

module.exports = {
  mapTCE,
  reduceTCE
}

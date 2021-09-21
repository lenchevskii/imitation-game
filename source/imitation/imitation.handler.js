const R = require('ramda')

/**
 * @param {*} initial 
 * @param {Array} collection 
 */
const maybeInitial =
  (initial, collection) =>
    R.isNil(initial)
      ? collection
      : [].concat(initial).concat(collection)

/**
 * @param {*} paramO
 * @param {Function} fnc  
 */
const reduceR =
  ([frst, scnd, ...tail], fnc) =>
    scnd
      ? fnc(frst, reduceR([].concat(scnd).concat(tail), fnc))
      : frst

/**
 * @param {*} param0 
 * @param {Function} fnc 
 */
const mapR =
  ([head, ...tail], fnc) =>
    head
      ? [].concat(fnc(head)).concat(mapR(tail, fnc))
      : []

module.exports = {
  maybeInitial: R.curry(maybeInitial),
  reduceR: R.curry(reduceR),
  mapR
}

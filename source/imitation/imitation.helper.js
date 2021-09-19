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
 * @param {Function} innerFnc  
 */
const reduceR =
  ([frst, scnd, ...tail], innerFnc) =>
    scnd
      ? innerFnc(frst, reduceR([].concat(scnd).concat(tail), innerFnc))
      : frst

/**
 * @param {*} param0 
 * @param {Function} innerFnc 
 */
const mapR =
  ([head, ...tail], innerFnc) =>
    head
      ? [].concat(innerFnc(head)).concat(mapR(tail, innerFnc))
      : []

module.exports = {
  maybeInitial: R.curry(maybeInitial),
  reduceR: R.curry(reduceR),
  mapR
}

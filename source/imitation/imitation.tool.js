require('module-alias/register')

const L = require('lazy.js')
const H = require('@general-helper')
const IMITATION = require('./imitation')

const COLLECTION = [1, 2, 3, 4, 5, 6]
// const COLLECTION = L.range(10).toArray()   // wrong sequence initialization

H.trace(
  COLLECTION.map(Math.exp),
  ':standard - map'
)

H.trace(
  IMITATION.mapTCO(COLLECTION, Math.exp),
  ':tail call eliminated recursive map'
)

H.trace(
  COLLECTION.reduce((p, c) => p + c, 20),
  ':standard - reduce'
)

H.trace(
  IMITATION.reduceTCO(COLLECTION, (p, c) => p + c, 20),
  ':tail call eliminated recursive reduce'
)

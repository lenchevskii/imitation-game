require('module-alias/register')

const H = require('@general-helper')
const IMITATION = require('./imitation')

H.trace(
  IMITATION.COLLECTION.map(Math.exp),
  ':standard - map'
)

H.trace(
  IMITATION.mapTCE(IMITATION.COLLECTION, Math.exp),
  ':tail call eliminated recursive map'
)

H.trace(
  IMITATION.COLLECTION.reduce((p, c) => p + c, 20),
  ':standard - reduce'
)

H.trace(
  IMITATION.reduceTCE(IMITATION.COLLECTION, (p, c) => p + c, 20),
  ':tail call eliminated recursive reduce'
)

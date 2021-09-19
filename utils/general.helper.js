/**
 * Tracing function for embedding
 * @param {*} x Traced parameter
 * @param  {...any} comment Untraced comments
 * @returns x
 */
const trace =
  (x, ...comment) => { console.log(x, ...comment); return x }

module.exports = {
  trace
}
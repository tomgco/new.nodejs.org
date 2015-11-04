'use strict'

const semver = require('semver')

module.exports = function (version) {
  const major = semver.major(version)
  return `https://nodejs.org/dist/latest-v${major}.x/docs/api/`
}

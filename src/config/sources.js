
const sources = {
  gist: require('../app/sources/gist'),
  gdrive: require('../app/sources/gdrive'),
  local: require('../app/sources/local'),
}

  /*
  github: {
    title: 'Github repo',
    saveAs: function (file, text, done) {
    },
    save: function (file, options, text, done) {
    },
  },

  ipython: {
    title: 'ipython',
    enabled: file => file.repl === 'ipython',
    saveAs: function (file, text, done) {
    },
    save: function (file, options, text, done) {
    },
  },

  gorilla: {
    title: 'gorilla',
    enabled: file => file.repl === 'gorilla',
    saveAs: function (file, text, done) {
    },
    save: function (file, options, text, done) {
    },
  },

  dropbox: {
    title: 'dropbox',
    saveAs: function (file, text, done) {
    },
    save: function (file, options, text, done) {
    },
  },
  */

module.exports = sources

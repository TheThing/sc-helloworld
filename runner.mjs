import('./index.mjs').then(function(module) {
  return module.start({}, {}, {
    debug: console.log.bind(console),
    info: console.log.bind(console),
    warn: console.log.bind(console),
    error: console.error.bind(console),
    fatal: console.error.bind(console),
    event: {
      debug: function() {},
      info: function() {},
      warn: function() {},
      error: function() {},
      fatal: function() {},
    }
  }, {})
})

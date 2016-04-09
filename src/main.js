var m = require('mithril');
var resources = require('./resources.json')

var app = {
  view: function() {
    return m('div', resources['en-US'].HELLO_WORLD)
  }
}

m.mount(document.getElementById('app'), app)

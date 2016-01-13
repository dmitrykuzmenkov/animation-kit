var jext = require('jext');
var presenter = require('./animation.presenter.js');
var template = require('./animation.jext');
var pool = jext.pool(template);
var animation = require('../../index.js');
var map = require('./animation.map.js');
var domd = require('domd');

module.exports = function (root) {
  var emit = domd(root);

  var t = pool.get('animation', presenter(map));
  root.appendChild(t.dom());

  var element = document.querySelector('.js-animated-element');

  emit.on('click', '.js-animate', function (e, t) {
    var anim = t.getAttribute('data-animation');
    animation(element).animate(anim);
  });
};

require('./main.less');
var domd = require('domd');
var animation = require('./index.js');

document.addEventListener('DOMContentLoaded', function () {
  var element = document.querySelector('.js-animated-element');

  var emit = domd(document.body);

  emit.on('click', '.js-animate', function (e, t) {
    var anim = t.getAttribute('data-animation');
    animation(element).animate(anim);
  });

});

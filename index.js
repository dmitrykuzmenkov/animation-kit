// prefixer helper function
var prefixes = ['webkit', 'moz', 'MS', 'o', ''];

var add_event_listener = function (element, type, callback) {
  prefixes.forEach(function (prefix) {
    if (!prefix) {
      type = type.toLowerCase();
    }

    element.addEventListener(prefix + type, callback, false);
  });
};

var export_function = function (element, animation, cb) {
  return function (cb) {
    add_event_listener(element, animation, cb);
  };
};

module.exports = function (element) {
  return {
    start: export_function(element, 'AnimationStart', cb),
    end: export_function(element, 'AnimationEnd', cb),
    interaction: export_function(element, 'AnimationInteraction', cb)
  };
};

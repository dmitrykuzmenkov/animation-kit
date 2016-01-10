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

module.exports = function (element) {
  return {
    animate: function (animation, opts) {
      opts = opts || {};

      var class_name = animation + '-animation';
      element.classList.add('animated');
      if (opts.infinite) {
        element.classList.add('infinite');
      }
      element.classList.add(class_name);

      if (opts.keep) {
        return this;
      }

      this.end(function (e) {
        element.classList.remove(class_name);
      });

      return this;
    },
    start: function (cb) {
      add_event_listener(element, 'AnimationStart', cb);
      return this;
    },
    end: function (cb) {
      add_event_listener(element, 'AnimationEnd', cb);
      return this;
    },
    iteraction: function (cb) {
      add_event_listener(element, 'AnimationIteraction', cb);
      return this;
    }
  };
};

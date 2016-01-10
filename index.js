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

var get_class_list = function (animation, infinite) {
  var list = [];
  list.push('animated');
  if (infinite) {
    list.push('infinite');
  }
  list.push(animation + '-animation');
  return list;
};

module.exports = function (element) {
  return {
    animation_class: '',
    animate: function (animation, opts) {
      opts = opts || {};
      var class_list = get_class_list(animation, opts.infinite);
      class_list.forEach(function (name) {
        element.classList.add(name);
      });

      if (opts.keep) {
        return this;
      }

      this.end(function (e) {
        class_list.forEach(function (name) {
          element.classList.remove(name);
        });
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

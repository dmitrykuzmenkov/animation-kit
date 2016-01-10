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
    animation_class: '',
    animate: function (animation) {
      this.animation_class = animation + '-animation';
      require(this.animation_class);
      element.classList.add(this.animation_class);
      return this;
    },
    start: function (cb) {
      add_event_listener(element, 'AnimationStart', cb);
      return this;
    },
    end: function (cb) {
      add_event_listener(element, 'AnimationEnd', function (e) {
        element.classList.remove(this.animation_class);
        cb(e);
      });
      return this;
    },
    iteraction: function (cb) {
      add_event_listener(element, 'AnimationIteraction', cb);
      return this;
    }
  };
};

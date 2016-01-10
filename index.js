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
      element.classList.add('animated', this.animation_class);

      var _this = this;
      this.end(function (e) {
        element.classList.remove('animated', _this.animation_class);
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

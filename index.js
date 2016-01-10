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
      DOMTokenList.prototype.add.apply(element.classList, class_list);

      if (opts.keep) {
        return this;
      }

      var _this = this;
      this.end(function (e) {
        DOMTokenList.prototype.remove.apply(element.classList, class_list);
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

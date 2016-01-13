require('./main.less');

document.addEventListener('DOMContentLoaded', function() {
  var components = document.querySelectorAll('[component]');
  Array.prototype.forEach.call(components, function (mount_point) {
    var cn = mount_point.getAttribute('component');
    try {
      var cc = require('./component/' + cn + '/' + cn + '.js');
      new cc(mount_point);
    } catch (e) {
      console.warn('Failed to initialize component ' + cn + '. ' + e);
    }
  });
});

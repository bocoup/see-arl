// stars
define(function(require) {
  var $ = require("jquery").noConflict();

  return function(elem) {
    var $elem = $(elem);

    $elem.html('');

    for ( var i = 0; i < 10; i++ ) {
      var $u = $('<span class="uuu">u</span>');
      $u.css({
        opacity: '.'+ i,
        display: 'block'
      });

      $elem.append($u);
    }

  };
});

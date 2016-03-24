window.$ = window.jQuery = require('jquery');
require('textillate');
require('letteringjs')

$(function() {
  $('.tlt').textillate({
    in: {
      effect: 'fadeInLeft',
      sequence: true
    }
  });
})

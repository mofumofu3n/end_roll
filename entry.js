window.$ = window.jQuery = require('jquery');
require('textillate');
require('letteringjs')
window.GLSlideshow = require('./js/GLSlideshow.js')
require('./css/app.css')
require('./bower_components/animate.css/animate.css')

$(function() {
  $('.tlt').textillate({
    in: {
      effect: 'fadeInLeft',
      sequence: true
    }
  });

  var slideshow = GLSlideshow.autoDetectRenderer(
    [ './img/1.jpg', './img/2.jpg'],
    {
      width: 1920,
      height: 1080,
      duration: 1000,     // optional
      interval: 5000,     // optional
      effect: 'wind' // optional
    }
  );  $('#background').append(slideshow.domElement);
})

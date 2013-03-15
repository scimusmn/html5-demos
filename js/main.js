/*
 * @file main.js
 * @description JavaScript functions for the HTML5 demo page.
 * @author Sarah German
*/
/*
 * These jQuery functions run after the DOM is parsed.
 * See http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
*/
$(document).ready(function() {

  // Allow items with the "dragme" class to be draggable
  // This requires jQueryUI (see http://jqueryui.com/draggable)
  $('.dragme').draggable();

  // Play and pause buttons under the video
  var v = document.getElementById('roxanne-video');
  $('.btn.play').click(function() {
    v.play();
  });
  $('.btn.pause').click(function() {
    v.pause();
  });

});

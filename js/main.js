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
  $draggable = $('.dragme'); // Set this as a variable. Since we use it multiple times, this helps performance
  $draggable.draggable(); // Initialize draggable functionality

  // Make note of each draggable's original position, and store them as data on the objects.
  // Will use for resetting.
  $.each($draggable, function() {
    var top = $(this).offset().top,
        left = $(this).offset().left;
    $(this).data('top', top).data('left', left);
  });

  // Reset positions on draggables when the button is clicked
  $('#drag-reset').click(function() {
    $.each($draggable, function() {
      $(this).css({
        'top': $(this).data('top')
      });
      $(this).css({
        'position': 'absolute'
      });
      $(this).css({
        'left': $(this).data('left')
      });
    });
  });

  // Play and pause buttons under the video
  var v = document.getElementById('roxanne-video');
  $('.btn.play').click(function() {
    v.play();
  });
  $('.btn.pause').click(function() {
    v.pause();
  });

});

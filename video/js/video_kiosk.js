/*
 * Add-on functionality for video.js
 * Extra features for better playback on an exhibit kiosk.
*/

function video_kiosk() {

    // Create array of all video IDs on the page
    var videoIDs = [];
    $('video').each(function() {
      videoIDs.push(this.id);
    });

    // Initialize the videojs plugin. Usually automated, but needed here since the video markup is created with AJAX
    // https://github.com/zencoder/video-js/blob/master/docs/setup.md#alternative-setup-for-dynamically-loaded-html
    $.each(videoIDs, function(i, val) {
      _V_(val, {}, function(){});
    });

  // @TODO Stop a playing video if another is started

  // @TODO Start/pause video from clicking on its associated content

  // @TODO Use modal window for full-screen - easier to close on kiosk

  // @TODO Reset poster image when video ends

};

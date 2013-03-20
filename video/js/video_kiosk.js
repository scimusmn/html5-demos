/*
 * Add-on functionality for video.js
 * Extra features for better playback on an exhibit kiosk.
*/

function video_kiosk() {

  // Initialize the videojs plugin.
  // Usually automated, but needed here since the video markup is created with AJAX
  // https://github.com/zencoder/video-js/blob/master/docs/setup.md#alternative-setup-for-dynamically-loaded-html
  _V_('videoPlayer').ready(function() {

    // Reset poster image when video ends
    this.addEvent("ended", function() {
      this.posterImage.show();
    });

    // @TODO Start/pause video from clicking on its associated content
    // @TODO Use modal window for full-screen - easier to close on kiosk

  });


};



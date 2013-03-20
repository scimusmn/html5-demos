/*
 * Add-on functionality for video.js
 * Extra features for better playback on an exhibit kiosk.
*/

function video_kiosk() {

  // Set some variables, we'll use these a bunch
  var $videoOption = $('#video-options div');
  var videoPlayer = _V_('videoPlayer');
  // Path is relative to the kiosk page.
  // Should contain subdirectories for images and videos.
  var videoPath = '../media/video/';

  $videoOption.eq(0).addClass('selected'); // Select the first video initially

  // Initialize the videojs plugin.
  // Usually automated, but needed here since the video markup is created with AJAX
  // https://github.com/zencoder/video-js/blob/master/docs/setup.md#alternative-setup-for-dynamically-loaded-html
  videoPlayer.ready(function() {

    // Reset poster image when video ends
    this.addEvent("ended", function() {
      this.posterImage.show();
    });

    // @TODO Enlarge video on play, size back to normal on pause/end. Hide summary.
    // @TODO Use modal window for full-screen - easier to close on kiosk

  });

    // Toggle video play/pause by clicking on its title or poster image
    $videoOption.click(function() {
      var video = $(this).attr('data-video-source');
      var poster = $('img', this).attr('src');

      // Change the video source and poster attributes
      videoPlayer.src(videoPath + video);
      $('.vjs-poster').attr('src', poster);

      // Add the selected class to the selected video
      $('.selected').removeClass('selected');
      $(this).addClass('selected');
    });


};



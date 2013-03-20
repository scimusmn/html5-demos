/*
 * Add-on functionality for video.js
 * Extra features for better playback on an exhibit kiosk.
*/

function video_kiosk() {

  // Set some variables, we'll use these a bunch
  var $videoOption = $('#video-options div').not('.selected'),
      videoPlayer = _V_('videoPlayer'),
      // Path is relative to the kiosk page
      videoPath = '../media/video/';

  $videoOption.eq(0).addClass('selected'); // Select the first video initially

  // Initialize the videojs plugin.
  videoPlayer.ready(function() {

    // Enlarge video on play
    this.addEvent("play", function() {
      this.size(940, 530);
      $('.summary p').hide();
    });

    // Show play button on pause
    this.addEvent("pause", function() {
      $('.vjs-big-play-button').css('visibility','visible').show();
    });

    // Reset poster image and shrink back down when video ends
    this.addEvent("ended", function() {
      this.posterImage.show();
      this.size(512, 288);
      $('.summary p').show();
    });

    // Toggle main video by clicking on its title or poster image
    $videoOption.click(function() {
      var id = $(this).attr('id').match(/\d+/),
          video = $(this).attr('data-video-source'),
          poster = $('img', this).attr('src'),
          $summary = $('#summary-' + id).text();

      // Change the video source and poster attributes
      if (!$(this).hasClass('selected')) {
        videoPlayer.src(videoPath + video);
        $('.vjs-poster').attr('src', poster);

        // Be kind, rewind
        videoPlayer.currentTime("0").posterImage.show();
        $('.vjs-big-play-button').css('visibility','visible').show();

        videoPlayer.size(512, 288); // Shrink back down

        // Show the right summary
        $('.summary p').show().text($summary);

        // Add the selected class to the selected video
        $('.selected').removeClass('selected');
        $(this).addClass('selected');
      }
    });

    // @TODO Use modal window for full-screen - easier to close on kiosk

  });

};



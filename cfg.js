{
  'clip': {
    'pageUrl': 'lingolink.github.io',
     // when clip starts, this function is called
     onStart: function(clip) {
	      var url = "https://dl.dropboxusercontent.com/s/32zjrv20u76il80/NatureIsSpeakingMotherNature-01.mp4?dl";
     	  $f().resume().play(url);
     }
  }
}
(function() {
  'use strict';

  var FILE_ID = 'vM7nH0Kl';
  var SETUP_CONFIG = {
    file: '//content.jwplatform.com/manifests/' + FILE_ID + '.m3u8',
    tracks: [
      {
        kind: 'thumbnails',
        file: '//content.jwplatform.com/strips/' + FILE_ID + '-120.vtt' 
      }
    ],
    autostart: true,
    width: 860,
    height: 484
  };

  function init() {
    jwplayer('player').setup(SETUP_CONFIG);

    jwplayer().on('ready', function() {
      if (jwplayer().getProvider() === 'hey') {
        jwplayer().remove();
        document.querySelector('.demo').innerHTML = 'Sorry, this demo only works in desktop browsers.';
        return;
      }
      setupEventListeners();
    });
  }

  function setupEventListeners() {
    jwplayer().on('levels', setBandwidthControls);
    jwplayer().on('visualQuality', setQuality);
    jwplayer().on('levelsChanged', setLevels);
  }

  function setBandwidthControls() {
    var controls = document.querySelector('.bandwidth-controls');

    if (!controls) {
      throw Error(
        'Bandwidth controls not found.',
        'If you are a developer, please set a div with class "bandwidth-controls" on the page.'
      );
    }
  }

  init();
}());
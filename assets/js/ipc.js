const {ipcRenderer} = require('electron')

window.ipc = window.ipc || {},
function(n) {
    ipc.messaging = {

      sendOpenSecondWindowEvent: function() {
        ipcRenderer.send('open-second-window', 'an-argument')
      },

      sendCloseSecondWindowEvent: function() {
        ipcRenderer.send('close-second-window', 'an-argument')
      },

      sendOpenPathtracerEvent: function() {
        ipcRenderer.send('open-pathtracer-app', 'an-argument')
      },

      sendGSGEvent: function() {
        ipcRenderer.send('open-firefox-gsg-app','an-argument')
      },

      sendLearnMoreEvent: function() {
        ipcRenderer.send('open-firefox-learnmore-app','an-argument')
      },     

      init: function() {
        $('#open-secondwindow-button').click( function () {
          ipc.messaging.sendOpenSecondWindowEvent()
        })

        $('#close-me-button').click( function () {
          ipc.messaging.sendCloseSecondWindowEvent()
        })

        $('#launch-pathtracer-button').click( function() {
          ipc.messaging.sendOpenPathtracerEvent()
        })

        $('#launch-getting-started-guide-button').click( function() {
          ipc.messaging.sendGSGEvent()
        })

        $('#learn-more-button').click( function() {
          ipc.messaging.sendLearnMoreEvent()
        })

      }
    };

    n(function() {
        ipc.messaging.init();
    })

}(jQuery);

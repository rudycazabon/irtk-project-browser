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

      sendOpenXeyesEvent: function() {
        ipcRenderer.send('open-pathtracer-app', 'an-argument')
      },

      init: function() {
        $('#open-secondwindow-button').click( function () {
          ipc.messaging.sendOpenSecondWindowEvent()
        })

        $('#close-me-button').click( function () {
          ipc.messaging.sendCloseSecondWindowEvent()
        })

        $('#launch-pathtracer-button').click( function() {
          ipc.messaging.sendOpenXeyesEvent()
        })

      }
    };

    n(function() {
        ipc.messaging.init();
    })

}(jQuery);

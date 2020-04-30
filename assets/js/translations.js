window.localization = window.localization || {},
function(n) {
    localization.translate = {

      menu: function() {
        $('#welcome-menu').text(i18n.__('Welcome'));
        $('#whoweare-menu').text(i18n.__('Who we are'));
        $('#whatwedo-menu').text(i18n.__('What we do'));
        $('#getintouch-menu').text(i18n.__('Get in touch'));

      },

      welcome: function() {
        $('#welcome .inner p').text(i18n.__('A proposal for an Intel\xAE Render Kit\u2122 Teradici\xAE on-node browser.'));
        $('#learn-more-button').text(i18n.__('Learn more'));
      },

      init: function() {
        this.welcome();
        this.menu();
      }
    };

    n(function() {
        localization.translate.init();
    })

}(jQuery);

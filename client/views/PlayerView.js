// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    //console.log('helllooooooo', this);
    // this.model.on('ended', function(e) {
    //   console.log('does it come here into playerview on ended handler');
    //   this.model.ended();
    // }, this);
  },

  events: {
    'ended': function() {
      this.model.ended();
    }
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});

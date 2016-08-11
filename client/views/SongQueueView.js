// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {

    this.collection.forEach(this.renderSong, this);
    return this.$el;
  },

  renderSong: function(song) {
    var songQueueEntryView = new SongQueueEntryView({model: song});
    songQueueEntryView.render();
  }

});

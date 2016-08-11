// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  // render: function() {

  //   this.collection.forEach(this.renderSong, this);
  //   return this.$el;
  // },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song, index) {
        var newSongQueueEntry = new SongQueueEntryView({model: song}).render();
        if (index === 0 ) {
          newSongQueueEntry = new SongQueueEntryView({model: song}).renderFirst();
        }
        return newSongQueueEntry;

      })
    );
  }



  // renderSong: function(song) {
  //   var songQueueEntryView = new SongQueueEntryView({model: song});
  //   songQueueEntryView.render();
  // }

});

// SongQueue.js - Defines a backbone model class for the song queue.
var PlayList = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('addToPlaylist', function(e) {
      // console.log('got into Playlist collection');
      console.log('what is e????', e);
      this.add(e);
    });
    this.on('removeFromPlaylist', function(e) {
      // console.log('got into Playlist collection');
      console.log('what is e????', e);
      this.remove(e);
    });    
  },
});
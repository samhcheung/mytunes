// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({


  initialize: function() {
    //this.on('ended')
  },

  defaults: {
    playCount: 0
  },
  url: 'https://api.parse.com/1/classes/songs/',
  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  enqueue: function () {
    this.trigger('enqueue', this);
  },
  dequeue: function () {
    this.trigger('dequeue', this);
  },
  ended: function () {
    this.trigger('ended', this);
  },
  addToPlaylist: function () {
    this.trigger('addToPlaylist', this);
  }




});

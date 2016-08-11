// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    //console.log('blah',this);
    this.on('add', function() {
      if (this.models.length === 1 ) {
        this.playFirst();
      } else {
        //console.log('do nothing else');
      }
    }, this);

    this.on('ended', function(e) {
      //console.log('does not run', e);
      this.remove(this.at(0));
      //console.log('should set back index', this);
      if (this.length > 0) {

        this.playFirst();
      }
    }, this);

    this.on('enqueue', function(e) {
      console.log(e);
      this.add(e);
    }, this);

    this.on('dequeue', function(e) {
      if ( JSON.stringify(this.at(0)) === JSON.stringify(e) ) {
        console.log('whats HAPPENING?????');
        e.ended();
      } else {
        this.remove(e);
      }
      //console.log('should set back index', this);
    }, this);

  },

  playFirst: function() {
    this.at(0).play();

  }
});
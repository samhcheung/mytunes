// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  template: _.template ('<div class="song"> \
    <span class="title"><%- title %></span> \
    <span class="artist">(<%- artist %>)</span> \
    </div>'),

  initialize: function() {

  },

  render: function() {
     console.log('rendered a song queue entry view');
    // this.$el.html(this.template);
    // return this;
  },
});

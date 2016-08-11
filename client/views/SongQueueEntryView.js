// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  // template: _.template ('<div class="song"> \
  //   <span class="title"><%- title %></span> \
  //   <span class="artist">(<%- artist %>)</span> \
  //   </div>'),

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function() {

  },

  events: {
    'click': function() {
      this.model.dequeue();
    }
  },

  render: function() {
    //console.log('rendered a song queue entry view');
    // this.$el.html(this.template);
    // return this;
    return this.$el.html(this.template(this.model.attributes));
  },

  renderFirst: function() {
    //console.log('rendered a song queue entry view');
    // this.$el.html(this.template);
    // return this;
    var template = _.template('<td class="current">(<%= artist %>)</td><td class ="current"><%= title %></td>');
    return this.$el.html(template(this.model.attributes));
  }
});

// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="enqueue">(<%= artist %>)</td><td class="enqueue"><%= title %></td><td class="enqueue">Play Count:  <%= playCount %></td><td class="playlist">Add to Playlist</td>'),

  events: {
    'click .enqueue': function() {
      this.model.enqueue();
    },
    'click .playlist': function() {
      console.log('playlist');
      console.log(this.model);
      this.model.addToPlaylist();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});

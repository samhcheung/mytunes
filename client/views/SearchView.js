// SongQueueView.js - Defines a backbone view class for the song queue.
var SearchView = Backbone.View.extend({

  tagName: 'form',

  initialize: function() {
    this.render();
  },

  events: {
    'submit': function(event) {
      event.preventDefault();
      this.collection.buildSearch();
    }
  },


  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    return this.$el.html('Search<br>').append(
      '<input class="searchBar" type="text"><input class="submit" type="submit">'
    );
  }



});

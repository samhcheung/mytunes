// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'https://api.parse.com/1/classes/songs/',

  initialize: function() {
    var context = this;
    var mod = new SongModel();
    mod.fetch( {
      success: function() {
        var result = mod.get('results'); 
        result.forEach(function(elem) {
          context.add(elem);
        });
      } 
    });
    //console.log(mod);
    //setTimeout(   function() {console.log( mod.get('results')) }   , 5000);

    //this.add(mod.at(0));
    //console.log('what is this??', this);
    // if (mod.attributes.results) {
    //   mod.attributes.results.forEach(function(elem) {
    //     this.add(elem);
    //   });
    // }
  }
});
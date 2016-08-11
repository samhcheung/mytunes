// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'https://api.parse.com/1/classes/songs/',

  defaults: {
    search: {}
  },

  buildSearch: function() {
    console.log('it worked!!!!!!');
    var context = this;
    var searchString = $('.searchBar').val();
    //this.set('search', '{title: {$regex:"' + searchString + '",$options:"i"}}');
    //this.fetch( { where: JSON.stringify(this.get('search'))});
    this.fetch(   {
      data: {where: JSON.stringify(    {title: {$regex: searchString, $options: 'i'}, 
                                       }    )},
      success: function() {
        var newContent = context.at(0).get('results');
        //console.log(context);
        newContent.forEach(function(elem) {
          context.add(new SongModel(elem));
        });
        context.remove(context.at(0));
        //newSong = new SongModel(object);
      }
    });
  },



  initialize: function() {
    var context = this;
    var mod = new SongModel();

    this.fetch(  {
      data: {/*where: JSON.stringify(    {title: {$regex:'best',$options:'i'}, 
                                        album: {$regex:'best',$options:'i'}    }    )*/},
      success: function() {
        var newContent = context.at(0).get('results');
        //console.log(context);
        newContent.forEach(function(elem) {
          context.add(new SongModel(elem));
        });
        context.remove(context.at(0));
        //newSong = new SongModel(object);
      }
    });
    // mod.fetch( {
    //   success: function() {
    //     var result = mod.get('results'); 
    //     result.forEach(function(elem) {
    //       context.add(elem);
    //     });
    //    context.trigger('sync');
    //   } 
    // });
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
// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on( "add", this.onAdded, this);
    this.on( "ended", this.songEnded, this);
    this.on( "dequeue", this.remove, this);
    // this.on( "enqueue", this.addSong, this);
  },
  onAdded: function(){
    if (this.length === 1){
      this.playFirst();
    }
  },

  songEnded: function(){ 
      this.shift();
      if(this.length > 0){
        this.playFirst();
      }
  },

  // addSong: function(song){  
  //   this.add(song);
  // },

  playFirst: function(){
   if(this.at(0)){
     this.at(0).play();
   }
  }
});
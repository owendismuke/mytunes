// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on( "add", this.onAdded, this);
    this.on( "ended", this.songEnded, this);
    this.on( "dequeue", this.remove, this);
    this.on( "remove", this.onRemoved, this);
    // this.on( "enqueue", this.addSong, this);
  },
  onAdded: function(){
    if (this.length === 1){
      this.playFirst();
    }
    this.pushToStorage();
  },

  onRemoved: function(){
    this.pushToStorage();
  },

  songEnded: function(){ 
      this.shift();
      if(this.length > 0){
        this.playFirst();
      }
  },

  pushToStorage: function(){  
    localStorage.setItem('queue', JSON.stringify(this));
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
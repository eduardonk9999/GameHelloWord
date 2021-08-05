cc.Class({
  extends: cc.Component,

  properties: {
    starPrefab: {
      default: null,
      type: cc.Prefab
    },
    maxStarDuration: 0,
    minStarDuration: 0,

    ground: {
      default: null,
      type: cc.Node
    },
    player: {
      default: null,
      type: cc.Node
    }
      
  },

   
    


  onLoad () {
    //this.groundY = this.ground.y + this.ground.height/2; // "this.ground.top" may also work
    this.spawnNewStar();
  },

  spawnNewStar: function() {
    var newStar = cc.instantiate(this.starPrefab);
    this.node.addChild(newStar);
    newStar.setPosition(this.getNewStarPosition());

    newStar.getComponent('Star').game = this;

  },
  getNewStarPosition: function () {
    var randX = 0;
    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50;
    var maxX = this.node.width/2;
    randX = (Math.random() - 0.5) * 2 * maxX;
    return cc.v2(randX, randY);
  },


  //start () { },

  // update (dt) {},
});

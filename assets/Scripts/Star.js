cc.Class({
    extends: cc.Component,

    properties: {
        pickRdius: 0,
    },
    onLoad () {
        
    },

 
    getPlayerDistance: function() {
        var playerPos = this.game.player.getPosition();
        var dist = this.node.position.sub(playerPos).mag();
        return dist
    },

    onPicked: function() {
        this.game.spawnNewStar();
        this.node.destroy();
    },

    update: function (dt) {
        if (this.getPlayerDistance() < this.pickRdius) {
            this.onPicked();
            return;
        }

    },
});

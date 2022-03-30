/* 
基本信息

*/
let basicInfo = function(spawnName){

    this.spawn = Game.spawns[spawnName];
    this.myCreeps = this.spawn.room.find(FIND_MY_CREEPS).length;

}

//用户基本信息
basicInfo.prototype.userBasicInfo = function () {

    console.log("gcl level:" + Game.gcl.level);
    console.log("gcl progress:" + Game.gcl.progress + "/" + Game.gcl.progressTotal);
}

//房间基本信息
basicInfo.prototype.RoomBasicInfo = function () {

    //控制器升级进度progress / 控制器升级所需总量progressTotal
    console.log("controller progress: " + this.spawn.room.controller.progress + "/" + this.spawn.room.controller.progressTotal);
    //控制器衰减 tick
    console.log("controller ticksToDowngrade tick : " + this.spawn.room.controller.ticksToDowngrade);
    //母巢能量
    console.log("spawn energy : " + this.spawn.room.energyAvailable);
    //creeps数量
    console.log("my creeps:" + this.myCreeps);
}

module.exports = basicInfo;
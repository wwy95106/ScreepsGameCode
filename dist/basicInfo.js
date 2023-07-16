/**
 * 房间信息 对象
 * @param {spawnName} spawnName
 * */
let basicInfo = function(spawnName){
    this.spawn = Game.spawns[spawnName];
    this.myCreeps = this.spawn.room.find(FIND_MY_CREEPS).length;

    // console.log(FIND_MY_CREEPS);
    // console.log(this.spawn.room.find(FIND_MY_CREEPS));
};

//房间基本信息
basicInfo.prototype.RoomBasicInfo = function () {

    return {
        controllerProgress:this.spawn.room.controller.progress,
        controllerProgressTotal:this.spawn.room.controller.progressTotal,
        ticksToDowngrade:this.spawn.room.controller.ticksToDowngrade,
        energyAvailable:this.spawn.room.energyAvailable,
        myCreeps:this.myCreeps
    }
};

// 获取 母巢 能量情况
basicInfo.prototype.getSpawnEnergy = function () {
    return this.spawn.room.energyAvailable;
};

// 获取 creep 状态
basicInfo.prototype.getCreepsState = function () {

    let creepsList = this.spawn.room.find(FIND_MY_CREEPS);
    return {
        total:this.myCreeps,
        list: creepsList
    }
};

// 获取 用户基本信息
basicInfo.prototype.getUserBasicInfo = function () {
    // console.log("UESR gcl level:" + Game.gcl.level);
    // console.log("USER gcl progress:" + Game.gcl.progress + "/" + Game.gcl.progressTotal);

    return {
        gcl_level:Game.gcl.level,
        gcl_progress:Game.gcl.progress,
        gcl_progress_total:Game.gcl.progressTotal
    }
};

module.exports = basicInfo;
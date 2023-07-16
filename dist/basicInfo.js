/**
 * 房间信息 对象
 * @param {spawnName} spawnName
 * */
let basicInfo = function(spawnName){

    // console.log(Object.keys(Memory.creeps).length);

    // 当前房间的 spawn
    this.spawn = Game.spawns[spawnName];

    //房间
    this.room = this.spawn.room;
    // console.log("room",this.room);

    // 控制器
    this.controller = this.room.controller;
    // console.log("controller",this.controller);

    // 当前房间的 creeps
    this.myCreeps = this.spawn.room.find(FIND_MY_CREEPS).length;
};

// 获取 创建 creep 时，需要的信息
basicInfo.prototype.getCreateInfo = function () {

};

//房间基本信息
basicInfo.prototype.getRoomBasicInfo = function () {

    console.log(this.spawn.room.controller.level);

    return {
        controllerLevel:this.controller.level,
        controllerProgress:this.controller.progress,
        controllerProgressTotal:this.controller.progressTotal,
        ticksToDowngrade:this.controller.ticksToDowngrade,
        energyAvailable:this.room.energyAvailable,
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
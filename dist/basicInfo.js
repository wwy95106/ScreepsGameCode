/**
 * 房间信息 对象
 * @param {spawnName} spawnName
 * */
let gi = {
    /** 
     * 基础信息
     * @param {spawnName} spawnName 
     * **/
    basic: function (spawnName) {

        // 当前房间的 spawn
        let spawn = Game.spawns[spawnName];

        //房间
        let room = spawn.room;
        // let roomTer = Game.map.getRoomTerrain(room.name);

        console.log(`${room.controller.pos.roomName} spawn: ${room.controller.pos.x},${room.controller.pos.y}`);

        // 控制器
        let controller = room.controller;

        // 当前房间 属于我的 creeps
        let myCreeps = spawn.room.find(FIND_MY_CREEPS).length;

        return {
            // 控制器
            controller: {
                level: controller.level,
                progress: controller.progress,
                progressTotal: controller.progressTotal,
                ticksToDowngrade: controller.ticksToDowngrade,
            },
            // 总能量
            energyAvailable: room.energyAvailable,
            // 总上限能量
            energyCapacityAvailable: room.energyCapacityAvailable,
            // my creeps
            myCreeps: myCreeps
        }
    },

    /** 
     * 用户信息
     * **/
    user: function () {
        // console.log("UESR gcl level:" + Game.gcl.level);
        // console.log("USER gcl progress:" + Game.gcl.progress + "/" + Game.gcl.progressTotal);

        return {
            gcl_level: Game.gcl.level,
            gcl_progress: Game.gcl.progress,
            gcl_progress_total: Game.gcl.progressTotal
        }
    }

};









module.exports = gi;
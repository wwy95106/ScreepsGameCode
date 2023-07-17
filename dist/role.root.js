/**
 * 角色 根 方法
 * 通用 方法
 * 
 * 
 * 
 *  */
let roleRoot = {

    /**
     * 获取 creep 状态 
     * @param {creep} creep
     * @return {next state}
     */
    getCreepState: function (creep) {

        // 剩余容量
        let free = creep.store.getFreeCapacity();
        // 已承载容量
        let used = creep.store.getUsedCapacity();
        // 总容量
        let max = creep.store.getCapacity();

        // creep 下一步目标 采集||工作
        let nextTarget = creep.memory.nextTarget;

        let nextState = "work";

        if (nextTarget === "harveste" && ((free < max && used < max) || free === max)) {
            // 持续采集状态
            nextState = "harveste";
        } else if (nextTarget === "harveste" && used === max) {
            // 转换为工作状态
            creep.memory.nextTarget === "work";
            nextState = "work";
        } else if (nextTarget === "work" && (free < max && used < max)) {
            // 持续工作状态
            nextState = "work";
        } else if (nextTarget === "work" && free === max) {
            // 转换为采集状态
            creep.memory.nextTarget === "harveste";
            nextState = "harveste";
        }

        return nextState;
    },

    /**
     * 升级控制器 
     * @param {creep} creep
     * @return {undefined}
     */
    toDoUpdate: function (creep) {
        const controller = creep.room.controller;
        if (creep.upgradeController(controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(controller, { visualizePathStyle: { stroke: '#ffffff' } });
        };
    },

    /**
     * 采集能量点 
     * @param {creep} creep
     * @return {undefined}
     */
    toDoHarveste: function (creep) {
        let sources = creep.room.find(FIND_SOURCES);
        if (creep.harvest(sources[creep.memory.target || 0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[creep.memory.target || 0], { visualizePathStyle: { stroke: '#ffaa00' } });
        }
    },

    /**
     * 存储至 spawn 
     * @param {creep} creep
     * @return {undefined}
     */
    saveToSpawn: function (creep, spawnName) {
        const spawn = Game.spawns[spawnName];
        if (creep.transfer(Game.spawns[spawn], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(Game.spawns[spawn], { visualizePathStyle: { stroke: '#ffaa00' } });
        };
    }


};

module.exports = roleRoot;

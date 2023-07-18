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
     * @return {nextState}
     */
    getCreepState: function (creep) {

        // 剩余容量
        let free = creep.store.getFreeCapacity();
        // 已承载容量
        let used = creep.store.getUsedCapacity();
        // 总容量
        let max = creep.store.getCapacity();


        console.log(`----------------`);
        // creep 下一步目标 采集||工作
        let nowTarget = creep.memory.nextTarget;
        // console.log(`---nowTarget:${nowTarget}`);
        // console.log(`---role:${creep.memory.role}`);

        // 修正 creep 创建时 内存 错误
        if (creep.memory.nextTarget !== "harveste" || creep.memory.nextTarget !== "work") {
            creep.memory.nextTarget = "harveste";
        }

        let isMiddle = free < max && used < max;
        let isFull = used == max;
        let isEmpty = free == max;

        if (isMiddle) {
            nextState = nowTarget;
        } else if (isFull) {
            nextState = "work"; // 转换为工作
        } else if (isEmpty) {
            nextState = "harveste"; // 转换为采集
        }

        console.log(`creepState(${creep.memory.role}):${free}-${used}-${max} => ${nextState}`);
        creep.memory.nextTarget = nextState;
        return nextState;
    },

    /**
     * 升级控制器 
     * @param {creep} creep
     * @return {undefined}
     */
    toDoUpdate: function (creep) {
        console.log(`toDoUpdate`);
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
        console.log(`toDoHarveste`);
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
        console.log(`saveToSpawn:${spawnName}`);
        const spawn = Game.spawns[spawnName];
        if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(spawn, { visualizePathStyle: { stroke: '#ffaa00' } });
        };
    },

    /**
     * 将资源从该 creep 转移至其他对象
     * @param {creep} creep
     * @param {target} target
     * @param {resourceType} resourceType
     * @return {undefined}
     */
    transferTargetEnergy: function (creep, target, resourceType) {
        // 未完成
        // creep.pos.isNearTo(target)
        if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(target);

            // 转移所有资源
            for (const resourceType in creep.carry) {
                creep.transfer(target, resourceType);
            }
        }
    },

    /**
     * 捡起一个物品 (如捡起一些能量)。需要 CARRY 身体部件
     * @param {creep} creep
     * @param {target} target
     * @return {undefined}
     */
    picUpTarget: function (creep, target) {
        // 未完成
        // creep.pos.isNearTo(target)
        if (creep.pickup(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            creep.moveTo(target);
        }
    }
};

module.exports = roleRoot;

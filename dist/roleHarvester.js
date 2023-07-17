// let role = require("rootObject/role/role.js");
// console.log(role);

// import role from "./rootObject/role/role";
// console.log(role.creep);

// const role = require("./rootObject/role/role.js");
// console.log(role);

let roleHarvester = {

    getCreepState(creep) {
        // 剩余容量
        let free = creep.store.getFreeCapacity();

        // 已承载容量
        let used = creep.store.getUsedCapacity();

        // 总容量
        let max = creep.store.getCapacity();

        // creep 目标
        let nextTarget = creep.memory.nextTarget;
        // console.log(nextTarget);
        // console.log(free + '-' + used + '-' + max);

        if (nextTarget === "harveste" && ((free < max && used < max) || free === max)) {
            // 持续采集状态
            return "harveste";
        } else if (nextTarget === "harveste" && used === max) {
            // 转换为工作状态
            creep.memory.nextTarget === "work";
            return "work";
        } else if (nextTarget === "work" && (free < max && used < max)) {
            // 持续工作状态
            return "work";
        } else if (nextTarget === "work" && free === max) {
            // 转换为采集状态
            creep.memory.nextTarget === "harveste";
            return "harveste";
        }
    },

    /** @param {Creep} creep **/
    run: function (creep, energyAvailable) {

        const screepState = this.getCreepState(creep);
        // console.log(screepState);

        if (screepState === "harveste") {
            let sources = creep.room.find(FIND_SOURCES);

            // 采集
            if (creep.harvest(sources[creep.memory.target]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[creep.memory.target], { visualizePathStyle: { stroke: '#ffaa00' } });
            }

        } else if (screepState === "work") {

            // console.log("work energyAvailable", energyAvailable);
            
            if (energyAvailable === 300) {

                if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    // 升级 控制器
                    creep.moveTo(creep.room.controller, { visualizePathStyle: { stroke: '#ffffff' } });

                };
            } else {

                if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    // 存储在 spawn
                    creep.moveTo(Game.spawns['Spawn1'], { visualizePathStyle: { stroke: '#ffaa00' } });
                };

            }


        };

    }
};
module.exports = roleHarvester;
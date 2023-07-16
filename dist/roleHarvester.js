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
        console.log(nextTarget);

        console.log(free + '-' + used + '-' + max);

        if (nextTarget === "harveste" && ((free < max && used < max) || free === max)) {
            return "harveste";
        } else if (nextTarget === "harveste" && used === max) {
            creep.memory.nextTarget === "work";
            return "work";
        } else if (nextTarget === "work" && (free < max && used < max)) {
            return "work";
        } else if (nextTarget === "work" && free === max) {
            creep.memory.nextTarget === "harveste";
            return "harveste";
        }

        /* if ((free < max && used < max) || used === max) {
            // 既没装满也没完全空 || 装满
            return "work";
        } else if (free === max) {
            // 彻底空
            return "harveste"
        } */
    },

    /** @param {Creep} creep **/
    run: function (creep, total, creepsList, energyAvailable) {

        // this.getSources(creep);

        const screepState = this.getCreepState(creep);
        console.log(screepState);

        if (screepState === "harveste") {
            let sources = creep.room.find(FIND_SOURCES);

            // 采集
            if (creep.harvest(sources[creep.memory.target]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[creep.memory.target]);
            }

        } else if (screepState === "work") {

            if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                // 存储在 spawn
                creep.moveTo(Game.spawns['Spawn1']);
            };
            // if (energyAvailable === 300 && creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            //     // 升级 controller
            //     creep.moveTo(creep.room.controller);
            // } else if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
            //     // 存储在 spawn
            //     creep.moveTo(Game.spawns['Spawn1']);
            // };
        }
    }
};
module.exports = roleHarvester;
/**
 * 角色根类
 * 
 * 
 * 
 * 
 *  */
let role = {

    creep:null,

    getCreepState(creep) {
        // 剩余容量
        let free = creep.store.getFreeCapacity();

        // 已承载容量
        let used = creep.store.getUsedCapacity();

        // 总容量
        let max = creep.store.getCapacity();

        // creep 目标
        let nextTarget = creep.memory.nextTarget;

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
    }
};

module.exports = role;

// role root
let roleRoot = require("role.root");

/** 
 * 创建 creeps 流程
 */
let createCreeps = {

    /** 
     * 获取 screep 类型
     */
    getCreepType: function () {

        let type_harvester = 0; // 采集 人数
        let type_upgrader = 0; // 升级 人数
        let type_other = 0; // 未分类 人数
        let total = 0;

        // 检测 现有类型
        for (let name in Game.creeps) {

            let creep = Game.creeps[name];
            // console.log(creep.memory.role);

            switch (creep.memory.role) {
                case "harvester":
                    type_harvester++;
                    break;
                case "upgrader":
                    type_upgrader++;
                    break;
                default:
                    type_other++;
            };
            total++;
        };

        console.log("采集", type_harvester);
        console.log("更新", type_upgrader);
        console.log("其他", type_other);
        console.log("总数", total);

        // 提醒
        if (type_other) {
            console.log("发现未知类型creep,数量：", type_other);
        };

        if (total <= 6) {

            if (type_harvester <= 4) {
                return "harvester"; // 采集
            }

            if (type_upgrader <= 2) {
                return "upgrader"; // 升级
            }

        } else {
            return false;
        }

        // 返回 类型
        /*         if (type_harvester < 7) {
                    return "harvester"; // 采集
                } else if (type_upgrader < 2) {
                    return "upgrader"; // 升级
                } else {
                    return false; // 不建造
                } */

    },

    /** 
     * 获取 screep 目标
     */
    getCreepTarget() {
        let source0 = 0; // 采集点1 人数
        let source1 = 0; // 升级点2 人数
        let total = 0;

        // 检测 现有类型
        for (let name in Game.creeps) {

            let creep = Game.creeps[name];
            // console.log(creep.memory.role);

            switch (creep.memory.target) {
                case 0:
                    source0++;
                    break;
                case 1:
                    source1++;
                    break;
            };

            total++;
        };

        console.log("source0:", source0);
        console.log("source1:", source1);

        if (source0 <= 3) {
            return 0;
        };

        if (source1 <= 3) {
            return 1;
        };
    },

    // 运行
    run: function (energyAvailable) {

        const creepType = this.getCreepType();

        if (!creepType || energyAvailable <= 250) {

            return;

        } else if (creepType && energyAvailable >= 250) {

            const creepTarget = this.getCreepTarget();

            // console.log("creepType:",creepType);
            // console.log("creepTarget",creepTarget);
            // console.log("energyAvailable",energyAvailable);

            let creepName = creepType + Game.time;
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE, MOVE], creepName);
            Game.creeps[creepName].memory.role = creepType;

            switch (creepType) {
                case "harvester":
                    Game.creeps[creepName].memory.nextTarget = "harveste";
                    break;
                case "upgrader":
                    Game.creeps[creepName].memory.nextTarget = "upgrader";
                    break;
            };

            switch (creepTarget) {
                case 0:
                    Game.creeps[creepName].memory.target = 0;
                    break;
                case 1:
                    Game.creeps[creepName].memory.target = 1;
                    break;
            };
        };
    }
};

module.exports = createCreeps;
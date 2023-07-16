/** 
 * 创建 creeps 流程
 */
let createCreeps = {

    /** 
     * 获取 screep 类型
     * @param {creepsTotal} 总数
     * @param {creepsList} 详细列表
     */
    getCreepType: function (creepsTotal, creepsList) {

        let type_harvester = 0; // 采集 人数
        let type_upgrader = 0; // 升级 人数
        let type_other = 0; // 未分类 人数

        // 检测 现有类型
        for (const index in creepsList) {
            switch (creepsTotal[index].memory.role) {
                case "harvester":
                    type_harvester++;
                    break;
                case "upgrader":
                    type_upgrader++;
                    break;
                default:
                    type_other++;
            };
        };

        // 提醒
        if (type_other) {
            console.log("发现未知类型creep,数量：", type_other);
        };

        // 返回 类型
        if (type_harvester < 7) {
            return "harvester"; // 采集
        } else if (type_upgrader < 2) {
            return "upgrader"; // 升级
        } else {
            return false; // 不建造
        }

    },

    getCreepTarget(creepsList) {
        let source0 = 0; // 采集点1 人数
        let source1 = 0; // 升级点2 人数

        // 检测 现有类型
        for (const index in creepsList) {
            switch (creepsTotal[index].memory.target) {
                case 0:
                    source0 ++;
                    break;
                case 1:
                    source1 ++;
                    break;
            };
        };

        if (source0 < 4) {
            return 0;
        } else {
            return 1;
        };
    },

    // 运行
    run: function (creepsTotal, creepsList, energyAvailable) {

        const creepType = this.getCreepType(creepsTotal, creepsList);
        const creepTarget = this.getCreepTarget(creepsList);

        // console.log("creepType",creepType);
        // console.log("creepTarget",creepTarget);
        // console.log("energyAvailable",energyAvailable);


        if (creepType && energyAvailable >= 250) {
            let creepName = creepType + Game.time;
            Game.spawns['Spawn1'].spawnCreep([WORK, CARRY, MOVE, MOVE], creepName);
            Game.creeps[creepName].memory.role = creepType;
            // Game.creeps[creepName].memory.max = 100;
            Game.creeps[creepName].memory.nextTarget = "harveste";

            switch (creepTarget) {
                case 0:
                    Game.creeps[creepName].memory.target = 0;
                    break;
                case 1:
                    Game.creeps[creepName].memory.target = 1;
                    break;
            }

        };
    }
};

module.exports = createCreeps;
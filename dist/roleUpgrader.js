// role root
let roleRoot = require("role.root");

// 升级者 逻辑
var roleUpgrader = {

    /** 
     * run
     * @param {Creep} creep 
     * **/
    run: function (creep) {
        const creepState = roleRoot.getCreepState(creep);
        if (creepState === "harveste") {
            // 采集
            roleRoot.toDoHarveste(creep);
        } else if (creepState === "work") {
            // 升级 控制器
            roleRoot.toDoUpdate(creep);
        };
    },
};

module.exports = roleUpgrader;
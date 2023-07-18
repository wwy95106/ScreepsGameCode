// role root
let roleRoot = require("role.root");

// 采集者 逻辑
let roleHarvester = {

    /** 
     * run
     * @param {Creep} creep 
     * **/
    run: function (creep, energyAvailable) {
        const creepState = roleRoot.getCreepState(creep);
        if (creepState === "harveste") {
            // 采集
            roleRoot.toDoHarveste(creep);
        } else if (creepState === "work") {
            // console.log(energyAvailable);
            if (energyAvailable === 300) {
                // 升级
                roleRoot.toDoUpdate(creep);
            } else {
                // 存储
                roleRoot.saveToSpawn(creep, 'Spawn1');
            }
        };
    }
};
module.exports = roleHarvester;
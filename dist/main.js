// 控制台输出用户、房间等基本信息
let gi = require("basicInfo");

// 采集
let roleHarvester = require('role.harveste');

// 升级
let roleUpgrader = require('role.upgrade');

// 创建creeps
let roleCreate = require('role.create');

// 主方法
module.exports.loop = function () {
    console.log('---------' + Game.time + '---start------');

    // 基础信息
    let {
        controller,
        energyAvailable,
        myCreeps
    } = gi.basic("Spawn1");

    console.log("controller level: " + controller.level);
    console.log("controller progress: " + controller.progress + "/" + controller.progressTotal);
    console.log("controller ticksToDowngrade tick : " + controller.ticksToDowngrade);
    console.log("spawn energy : " + energyAvailable);
    console.log("my creeps:" + myCreeps);

    // 创建 creep
    roleCreate.run(energyAvailable);

    // 工作
    for (let name in Game.creeps) {

        let creep = Game.creeps[name];

        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep, energyAvailable);
        }
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    };


    // console.log(roleRoot.testProperty);

    console.log('---------' + Game.time + '----end-----');
    console.log("-");
};

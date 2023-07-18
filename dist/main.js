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
        energyCapacityAvailable,
    } = gi.basic("Spawn1");


    // level  progress
    console.log(`level : ${controller.level}, progress : ${controller.progress} / ${controller.progressTotal}, ticksToDowngrade : ${controller.ticksToDowngrade}`);
    // available energy
    console.log(`energy : ${energyAvailable} / ${energyCapacityAvailable}`);

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

    // console.log(Game.rooms["E48S41"].controller);
    //let exitsList = Game.map.describeExits("E49S41");
    //exitsList = Object.keys(exitsList);
    // console.log(exitsList);
    // console.log(exitsList[0]);
    // console.log(Object.keys(exitsList).length);

    // console.log(Game.map.describeExits("E49S41")["1"])

    console.log('---------' + Game.time + '----end-----');
    console.log("-");
};

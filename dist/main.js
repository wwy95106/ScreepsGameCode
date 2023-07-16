// 控制台输出用户、房间等基本信息
let INFO_OBJECT = require("basicInfo");

// 采集
let roleHarvester = require('roleHarvester');

// 升级
let roleUpgrader = require('roleUpgrader');
// 升级
let createCreeps = require('createCreep');

// 主方法
module.exports.loop = function () {
    //console.log("-");
    console.log('---------' + Game.time + '---start------');

    // 基础信息 对象
    const basicInfo = new INFO_OBJECT('Spawn1');

    const { controllerProgress, controllerProgressTotal, ticksToDowngrade, energyAvailable, myCreeps } = basicInfo.RoomBasicInfo();

    //控制器升级进度progress / 控制器升级所需总量progressTotal
    console.log("controller progress: " + controllerProgress + "/" + controllerProgressTotal);
    //控制器衰减 tick
    console.log("controller ticksToDowngrade tick : " + ticksToDowngrade);
    //母巢能量
    console.log("spawn energy : " + energyAvailable);
    //creeps数量
    console.log("my creeps:" + myCreeps);

    // creep 状态 包含 list total
    const { total, list } = basicInfo.getCreepsState();

    // 创建 creep
    if (total < 3) {
        createCreeps.run(total, list);
    };

    // 工作
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep, total, list, energyAvailable);
        }
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    };

    console.log('---------' + Game.time + '----end-----');
    console.log("-");
};


/*
let roleUpgrader = require('upgrade');
let towerLogic = require('tower');
*/


/*
检测以及调用各种任务的执行方法

*/
// const mession = require("mession");

/*
内存操作

*/
// let memory = require("memory");

/*
创建creep

*/
// let createCreep = require('createCreep');



/*
采集

*/
// let harvest = require('harvest');
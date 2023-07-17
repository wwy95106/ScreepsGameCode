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

    // 房间 信息汇总
    const {
        controllerLevel,// 控制器等级
        controllerProgress, // 升级进度
        controllerProgressTotal, // 升级总需求
        ticksToDowngrade, // controller 距离摧毁还有多久
        energyAvailable, // 总可用能源
        myCreeps // 所有 creeps 总数
    } = basicInfo.getRoomBasicInfo();

    //控制器升级进度progress / 控制器升级所需总量progressTotal
    console.log("controller progress: " + controllerProgress + "/" + controllerProgressTotal);
    //控制器衰减 tick
    console.log("controller ticksToDowngrade tick : " + ticksToDowngrade);
    //母巢能量
    console.log("spawn energy : " + energyAvailable);
    //creeps数量
    console.log("my creeps:" + myCreeps);

    // creep 状态 包含 list total
    // let { creepsTotal, creepsList } = basicInfo.getCreepsState();


    // console.log("执行创建函数")
    // 创建 creep
    createCreeps.run(energyAvailable);

    // console.log("执行工作函数",energyAvailable);

    // 工作
    for (let name in Game.creeps) {

        let creep = Game.creeps[name];
        // console.log(creep.memory.role);

        if (creep.memory.role == 'harvester') {
            roleHarvester.run(creep, energyAvailable);
        }
        if (creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    };

    console.log('---------' + Game.time + '----end-----');
    console.log("-");
};

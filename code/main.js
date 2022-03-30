/* 
let roleHarvester = require('harvest');
let roleUpgrader = require('upgrade');
let createCreep = require('createCreep');
let towerLogic = require('tower');
let testCode = require('testCode');

*/

/* 
任务队列

*/
let mession = require("mession");

/* 
内存

*/
let memory = require("memory");

module.exports.loop = function () {
    console.log("-");
    console.log('---------' + Game.time + '---start------');

    //console.log(mession.search);
    //console.log(memory.search);

    /* 
    //全局GCL
    console.log("gcl level:" + Game.gcl.level);
    console.log("gcl progress:" + Game.gcl.progress);
    console.log("gcl total:" + Game.gcl.progressTotal);
    */

    /* 
    //安全模式
    console.log("safeMode tick : " + Game.spawns['Spawn1'].room.controller.safeMode, "safeMode cooldown : " + Game.spawns['Spawn1'].room.controller.safeModeCooldown);
    if(Game.spawns['Spawn1'].room.controller.safeModeCooldown === undefined
    && Game.spawns['Spawn1'].room.controller.safeMode === 0){
        Game.spawns['Spawn1'].room.controller.activateSafeMode();
    }
    console.log(Game.spawns['Spawn1'].room.createConstructionSite( 30, 12, STRUCTURE_TOWER ));
    createCreep.check();
    */

    let spawn = Game.spawns['Spawn1'];

    console.log("controller progress: " + spawn.room.controller.progress);
    console.log("controller progressTotal: " + spawn.room.controller.progressTotal);
    console.log("controller ticksToDowngrade tick : " + spawn.room.controller.ticksToDowngrade);

    console.log("spawn energy : " + spawn.room.energyAvailable);


    let myCreeps = Game.spawns['Spawn1'].room.find(FIND_MY_CREEPS).length;

    console.log("my creeps:" + myCreeps);

    let controller = spawn.room.controller;

    if (myCreeps < 2 && spawn.store[RESOURCE_ENERGY] == 300) {

        let creepName = 'Harvester' + (myCreeps + 1);

        spawn.spawnCreep([WORK, CARRY, MOVE, MOVE], creepName);

    } else {

        for (let name in Game.creeps) {

            let creep = Game.creeps[name];
            let workNum = 0;
            let maxStoreFreeCapacity = 0;

            for (let index in creep.body) {
                if (creep.body[index].type == "work") workNum++;
            }

            maxStoreFreeCapacity = workNum * 50;

            if (creep.store.getFreeCapacity() == maxStoreFreeCapacity) {


                let sources = creep.room.find(FIND_SOURCES);

                if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0]);
                }

            } else {

                if (spawn.store[RESOURCE_ENERGY] < 300) {

                    if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(spawn);
                    }

                } else {

                    if (creep.transfer(controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(controller);
                    }
                }
            }
        }

    }


    console.log('---------' + Game.time + '----end-----');
    console.log("-");

}

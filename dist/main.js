/* 
let roleHarvester = require('harvest');
let roleUpgrader = require('upgrade');
let createCreep = require('createCreep');
let towerLogic = require('tower');
let testCode = require('testCode');


 */
module.exports.loop = function () {
    console.log("-");
    console.log('---------' + Game.time + '---start------');

    console.log("safeMode tick : " + Game.spawns['Spawn1'].room.controller.safeMode, "safeMode cooldown : " + Game.spawns['Spawn1'].room.controller.safeModeCooldown);

    console.log("ticksToDowngrade tick : " + Game.spawns['Spawn1'].room.controller.ticksToDowngrade);

    console.log("progress: " + Game.spawns['Spawn1'].room.controller.progress, "progressTotal: " + Game.spawns['Spawn1'].room.controller.progressTotal);

    console.log("spawn1 energy : " + Game.spawns['Spawn1'].room.energyAvailable);

    //start safeMode
    /* if(Game.spawns['Spawn1'].room.controller.safeModeCooldown === undefined
    && Game.spawns['Spawn1'].room.controller.safeMode === 0){
        Game.spawns['Spawn1'].room.controller.activateSafeMode();
    } */
    //console.log(Game.spawns['Spawn1'].room.createConstructionSite( 30, 12, STRUCTURE_TOWER ));
    //createCreep.check();

    let myCreeps = Game.spawns['Spawn1'].room.find(FIND_MY_CREEPS).length;

    let spawn = Game.spawns['Spawn1'];

    let controller = spawn.room.controller;

    if (myCreeps < 2 && spawn.store[RESOURCE_ENERGY] == 250) {

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

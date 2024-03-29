let roleHarvester = require('harvest');
let roleUpgrader = require('upgrade');
let createCreep = require('createCreep');
let towerLogic = require('tower');
let testCode = require('testCode');



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


    /*  */

    for (let name in Game.creeps) {
        let creep = Game.creeps[name];

        if (creep.store.getFreeCapacity() > 0) {
            let sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
        }
    }

    /* for(let name in Game.creeps){

        let creep = Game.creeps[name];
        let carryTotal = 0;
        let num = 0;
        for(let a=0;a<creep.body.length;a++){
            if(creep.body[a].type === 'carry'){
                num++ ;//BODYPART_COST
            }
        }
        carryTotal = 50 * num;
        console.log("creepCarryEneryTotal:"+carryTotal);
        

        if(creep.memory.role === 'Harvester'){
            roleHarvester.harvest(creep,carryTotal,1);
        }

        if(creep.memory.role === 'Upgrader'){
            roleHarvester.harvest(creep,carryTotal,0);
            //roleUpgrader.upgrade(creep,carryTotal,0);
        }

    } */

    //testCode.testFunc();

    //console.log(Game.spawns['Spawn1'].pos.findClosestByRange());
    //console.log(creep.pos.findClosestByRange(Game.spawns));


    //console.log(tower);
    //towerLogic.run();

    console.log('---------' + Game.time + '----end-----');
    console.log("-");

}

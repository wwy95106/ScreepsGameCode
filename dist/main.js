let roleHarvester = require('harvest');
let roleUpgrader = require('upgrade');
let createCreep = require('createCreep');
let testCode = require('testCode');


/*

Game.spawns['Spawn1'].room.createConstructionSite( 40, 10, STRUCTURE_EXTENSION );
Game.spawns['Spawn1'].room.createConstructionSite( 41, 10, STRUCTURE_EXTENSION );
Game.spawns['Spawn1'].room.createConstructionSite( 41, 11, STRUCTURE_EXTENSION );
Game.spawns['Spawn1'].room.createConstructionSite( 28, 12, STRUCTURE_EXTENSION );
Game.spawns['Spawn1'].room.createConstructionSite( 29, 12, STRUCTURE_EXTENSION );

Game.spawns['Spawn1'].room.createConstructionSite( 37, 12, STRUCTURE_ROAD );

*/


module.exports.loop = function () {
    console.log("-");
    console.log('---------'+Game.time+'---start------');
    
    console.log("safeMode tick : " + Game.spawns['Spawn1'].room.controller.safeMode,"safeMode cooldown : " + Game.spawns['Spawn1'].room.controller.safeModeCooldown);
    console.log("progress: " + Game.spawns['Spawn1'].room.controller.progress,"progressTotal: " + Game.spawns['Spawn1'].room.controller.progressTotal);
    
    //start safeMode
    /* if(Game.spawns['Spawn1'].room.controller.safeModeCooldown === undefined
    && Game.spawns['Spawn1'].room.controller.safeMode === 0){
        Game.spawns['Spawn1'].room.controller.activateSafeMode();
    } */

    createCreep.check()

    for(let name in Game.creeps){

        let creep = Game.creeps[name];
        let carryTotal = 0;
        let num = 0;
        for(let a=0;a<creep.body.length;a++){
            if(creep.body[a].type === 'carry'){
                num++ ;
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

    }

    //testCode.testFunc();

    console.log('---------'+Game.time+'----end-----');
    console.log("-");

}

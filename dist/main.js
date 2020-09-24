let roleHarvester = require('harvest');
let roleUpgrader = require('upgrade');
let createCreep = require('createCreep');

module.exports.loop = function () {
    console.log("-");
    console.log('---------'+Game.time+'---start------');
    
    //safeMode tick & cooldown
    console.log("safeMode tick : " + Game.spawns['Spawn1'].room.controller.safeMode,"safeMode cooldown : " + Game.spawns['Spawn1'].room.controller.safeModeCooldown);
    
    //start safeMode
    if(Game.spawns['Spawn1'].room.controller.safeModeCooldown === undefined
    && Game.spawns['Spawn1'].room.controller.safeMode === 0){
        Game.spawns['Spawn1'].room.controller.activateSafeMode();
    }

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
            roleHarvester.run(creep,carryTotal);
        }

        if(creep.memory.role === 'Upgrader'){
            roleUpgrader.upgrade(creep,carryTotal);
        }

    }

    console.log('---------'+Game.time+'----end-----');
    console.log("-");

}

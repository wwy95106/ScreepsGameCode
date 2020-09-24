let roleHarvester = require('harvest/harvest');
let roleUpgrader = require('upgrade/upgrade');
let createCreep = require('createCreep/createCreep');

module.exports.loop = function () {
    //console.log("-");
    //console.log('---------'+Game.time+'---start------');
    
    
    /* 
    //safeMode tick & cooldown
    console.log("safeMode tick : " + Game.spawns['Spawn1'].room.controller.safeMode,"safeMode cooldown : " + Game.spawns['Spawn1'].room.controller.safeModeCooldown);
    
    //start safeMode
    if(Game.spawns['Spawn1'].room.controller.safeModeCooldown === undefined
    && Game.spawns['Spawn1'].room.controller.safeMode === 0){
        Game.spawns['Spawn1'].room.controller.activateSafeMode();
    }
    */

    //createCreep.check()
    
    
    /* 
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

        let structures = creep.room.find(FIND_STRUCTURES);
        console.log(structures);
        
        for(let a=0;a<structures.length;a++){
            console.log(structures[a].structureType);
            if(structures[a].structureType === 'extension'){
                console.log(structures[a].store[RESOURCE_ENERGY]);
            }
        }

        if(creep.memory.role === 'Harvester'){
            roleHarvester.run(creep,carryTotal);
        }

        if(creep.memory.role === 'Upgrader'){
            roleUpgrader.upgrade(creep,carryTotal);
        }

    }
    */
    //console.log('---------'+Game.time+'----end-----');
    //console.log("-");



for(let name in Game.creeps){

    let creep = Game.creeps[name];

    //type of creeps
    if(creep.memory.role === 'Harvester'){

        //check creeps status

        //search something

        //do someting


    }

    //type of creeps
    if(creep.memory.role === 'Upgrader'){

        //check creeps status

        //search something

        //do someting

    }

}

}

let roleHarvester = require('harvest');
let roleUpgrader = require('upgrade');
let createCreep = require('createCreep');
let towerLogic = require('tower');
let testCode = require('testCode');


/*

Game.spawns['Spawn1'].room.createConstructionSite( 40, 10, STRUCTURE_EXTENSION );
Game.spawns['Spawn1'].room.createConstructionSite( 41, 10, STRUCTURE_EXTENSION );
Game.spawns['Spawn1'].room.createConstructionSite( 41, 11, STRUCTURE_EXTENSION );
Game.spawns['Spawn1'].room.createConstructionSite( 28, 12, STRUCTURE_EXTENSION );
Game.spawns['Spawn1'].room.createConstructionSite( 29, 12, STRUCTURE_EXTENSION );

Game.spawns['Spawn1'].room.createConstructionSite( 28, 10, STRUCTURE_EXTENSION );
Game.spawns['Spawn1'].room.createConstructionSite( 29, 10, STRUCTURE_EXTENSION );
Game.spawns['Spawn1'].room.createConstructionSite( 32, 10, STRUCTURE_EXTENSION );
Game.spawns['Spawn1'].room.createConstructionSite( 33, 10, STRUCTURE_EXTENSION );
Game.spawns['Spawn1'].room.createConstructionSite( 34, 10, STRUCTURE_EXTENSION );


Game.spawns['Spawn1'].room.createConstructionSite( 28, 9, STRUCTURE_EXTENSION );
Game.spawns['Spawn1'].room.createConstructionSite( 29, 9, STRUCTURE_EXTENSION );
Game.spawns['Spawn1'].room.createConstructionSite( 30, 9, STRUCTURE_EXTENSION );
Game.spawns['Spawn1'].room.createConstructionSite( 32, 9, STRUCTURE_EXTENSION );
Game.spawns['Spawn1'].room.createConstructionSite( 33, 9, STRUCTURE_EXTENSION );

Game.spawns['Spawn1'].room.createConstructionSite( 30, 7, STRUCTURE_EXTENSION );
Game.spawns['Spawn1'].room.createConstructionSite( 32, 6, STRUCTURE_EXTENSION );
Game.spawns['Spawn1'].room.createConstructionSite( 32, 7, STRUCTURE_EXTENSION );
Game.spawns['Spawn1'].room.createConstructionSite( 33, 6, STRUCTURE_EXTENSION );
Game.spawns['Spawn1'].room.createConstructionSite( 33, 7, STRUCTURE_EXTENSION );


Game.spawns['Spawn1'].room.createConstructionSite( 30, 12, STRUCTURE_TOWER );
Game.spawns['Spawn1'].room.createConstructionSite( 27, 11, STRUCTURE_TOWER );
Game.spawns['Spawn1'].room.createConstructionSite( 27, 8, STRUCTURE_TOWER );


Game.spawns['Spawn1'].room.createConstructionSite(30,15,STRUCTURE_EXTRACTOR);
ERR_INVALID_TARGET
invalid
target




for(let a=4;a<14;a++){
    Game.spawns['Spawn1'].room.createConstructionSite( 31, a, STRUCTURE_ROAD );
}

for(let a=28;a<39;a++){
    Game.spawns['Spawn1'].room.createConstructionSite( a, 11, STRUCTURE_ROAD );
}

for(let a=29;a<32;a++){
    Game.spawns['Spawn1'].room.createConstructionSite( a, 14, STRUCTURE_ROAD );
}

for(let a=28;a<34;a++){
    Game.spawns['Spawn1'].room.createConstructionSite( a, 8, STRUCTURE_ROAD );
}
*/


module.exports.loop = function () {
    console.log("-");
    console.log('---------'+Game.time+'---start------');
    
    console.log("safeMode tick : " + Game.spawns['Spawn1'].room.controller.safeMode,"safeMode cooldown : " + Game.spawns['Spawn1'].room.controller.safeModeCooldown);
    console.log("ticksToDowngrade tick : " + Game.spawns['Spawn1'].room.controller.ticksToDowngrade);
    console.log("progress: " + Game.spawns['Spawn1'].room.controller.progress,"progressTotal: " + Game.spawns['Spawn1'].room.controller.progressTotal);
    console.log("spawn1 energy : "+Game.spawns['Spawn1'].room.energyAvailable);
    
    //start safeMode
    /* if(Game.spawns['Spawn1'].room.controller.safeModeCooldown === undefined
    && Game.spawns['Spawn1'].room.controller.safeMode === 0){
        Game.spawns['Spawn1'].room.controller.activateSafeMode();
    } */
    //console.log(Game.spawns['Spawn1'].room.createConstructionSite( 30, 12, STRUCTURE_TOWER ));
    createCreep.check();


    /*  */
    

    

    for(let name in Game.creeps){

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

    }

    //testCode.testFunc();

    //console.log(Game.spawns['Spawn1'].pos.findClosestByRange());
    //console.log(creep.pos.findClosestByRange(Game.spawns));

    
    //console.log(tower);
    towerLogic.run();

    console.log('---------'+Game.time+'----end-----');
    console.log("-");

}

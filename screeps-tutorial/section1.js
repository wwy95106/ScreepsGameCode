/*
	screeps tutorials section 1
---------------------------------------

*/

//创建harvester1,
//work carry move
Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1' );


/*

---------------------------------------

*/


let creep = Game.creeps['Harvester1'];
let sources = creep.room.find(FIND_SOURCES);
if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
	creep.moveTo(sources[0]);
}


/*

---------------------------------------

*/


if(creep.store.getFreeCapacity() > 0){
	
	let sources = creep.room.find(FIND_SOURCES);
	if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
		creep.moveTo(sources[0]);
	}
	
}else{
	
	if( creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE ) {
		creep.moveTo(Game.spawns['Spawn1']);
	}
	
}


/*

---------------------------------------

*/


Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester2' );


/*

---------------------------------------

*/


for(let name in Game.creeps) {
	let creep = Game.creeps[name];

	if(creep.store.getFreeCapacity() > 0) {
		let sources = creep.room.find(FIND_SOURCES);
		if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
			creep.moveTo(sources[0]);
		}
	}
	else {
		if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
			creep.moveTo(Game.spawns['Spawn1']);
		}
	}
}


/*

---------------------------------------

*/


let roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.store.getFreeCapacity() > 0) {
            let sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
        }
	}
};
module.exports = roleHarvester;


/*

---------------------------------------

*/


let roleHarvester = require('role.harvester');

module.exports.loop = function () {

    for(let name in Game.creeps) {
        let creep = Game.creeps[name];
        roleHarvester.run(creep);
    }
}


/*

---------------------------------------

*/





















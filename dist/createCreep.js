/** 
 * 创建 creeps 流程
 */
let createCreeps = {

    run: function() {
	    for( const name in Game.rooms) {
            // console.log(Game.rooms[name].energyAvailable);

            let energyAll = Game.rooms[name].enegryAvailable;
            // let sources = Game.cooms.creep.room.find(FIND_SOURCES);
    
            if(energyAll === 300) {
                let creepName = 'harvester'+Game.time;
                // create creeps
    
                Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], creepName);
                Game.creeps[creepName].memory.role = 'harvester';
            };
    
        } 
	}

};

module.exports = createCreeps;
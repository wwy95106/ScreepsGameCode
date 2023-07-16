let roleHarvester = {

    /** @param {Creep} creep **/
    run: function (creep, total,creepsList, energyAvailable) {

        let target = null;

        /*         for(const key in creepsList) {
                    
        
                    switch(creepsList[key].memory.role) {
                        case "harvester":
        
                    }
        
                }; */

        if (creep.store.getFreeCapacity() > 0) {
            let sources = creep.room.find(FIND_SOURCES);

            // 采集
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }

        } else {
            // console.log(energyAvailable);
            if (energyAvailable === 300 && creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                // console.log("升级")
                // 升级 controller
                creep.moveTo(creep.room.controller);
            } else if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                // console.log("存储")
                // 存储在 spawn
                creep.moveTo(Game.spawns['Spawn1']);

            }

            /* if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                if (energyAvailable === 300 && creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    // 升级 controller
                    creep.moveTo(creep.room.controller);
                } else {
                    // 存储在 spawn
                    creep.moveTo(Game.spawns['Spawn1']);
                }
            } */
        }
    }
};
module.exports = roleHarvester;
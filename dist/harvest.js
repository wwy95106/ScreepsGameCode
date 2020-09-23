/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('harvest');
 * mod.thing == 'a thing'; // true
 */

let roleHarvest = {

  /** @param {Creep} creep **/
  run:function(creep){

    console.log('creep-run:');
    console.log('creep-name:' + creep.name," & energy :" + creep.store[RESOURCE_ENERGY]);
    console.log("creep-ticksToLive:"+creep.ticksToLive);

    //harvest or transfer
    if(creep.store.getFreeCapacity()>0){

      //find sources
      let sources = creep.room.find(FIND_SOURCES);

      //moveTo sources & harvest
      if(creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0]);
      }

    }else{

      //transfer spawns
      if( creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE ) {
        creep.moveTo(Game.spawns['Spawn1']);
      }

    }

  }
}
//export module
module.exports = roleHarvest;



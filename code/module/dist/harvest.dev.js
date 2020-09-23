"use strict";

/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('harvest');
 * mod.thing == 'a thing'; // true
 */
var roleHarvest = {
  /** @param {Creep} creep **/
  run: function run(creep) {
    //console.log(creep.name + 'is run');
    //console.log(creep.memory);
    //harvest or transfer
    if (creep.store.getFreeCapacity() > 0) {
      //find sources
      var sources = creep.room.find(FIND_SOURCES); //moveTo sources & harvest

      if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[0]);
      }
    } else {
      //transfer spawns
      if (creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
        creep.moveTo(Game.spawns['Spawn1']);
      }
    }
  }
}; //export module

module.exports = roleHarvest;
/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('upgrade');
 * mod.thing == 'a thing'; // true
 */
let roleUpgeader = {


  upgrade:function(creep,carryTotal){
    let sources = creep.room.find(FIND_SOURCES);
    let spawn1 = Game.spawns['Spawn1'];
    let controller = creep.room.controller;
    
    if(creep.memory.energyStatus === 'empty'){
      console.log('*Upgrader*' + creep.name + ' : harvest  sources');
      if(creep.harvest(sources[0]) === ERR_NOT_IN_RANGE){
        creep.moveTo(sources[0]);
      }else{
        if(creep.store.getUsedCapacity() === carryTotal){
          creep.memory.energyStatus = 'full';
          console.log('*Upgrader*' + creep.name + ' : energyStatus  full');
        }
      }

    }
    //upgrade Controller
    else{
      console.log('*Upgrader*' + creep.name + ' : upgrade  Controller');
      if(creep.upgradeController(controller) === ERR_NOT_IN_RANGE){
        creep.moveTo(controller);
      }else{
        if(creep.store.getUsedCapacity() === 0){
          creep.memory.energyStatus = 'empty';
          console.log('*Upgrader*' + creep.name + ' : energyStatus  empty');
        }
      }
    }

    
    
    

  },

  

}
module.exports = roleUpgeader;
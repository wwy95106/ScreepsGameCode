/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('upgrade');
 * mod.thing == 'a thing'; // true
 */
let roleUpgeader = {

  creepEnergyType:0,


  /**
   *  @param {Creep} creep 
   *  @param {carryTotal} carryEnergyTotal 
   * **/
  upgrade:function(creep,carryTotal){

    //console.log(creep.memory.HarvsetEnergyType = 'a');

    //console.log('creep-upgrade:');
    console.log('*Upgrade*' + creep.name ,"energy :" + creep.store[RESOURCE_ENERGY],'ticksToLive:'+creep.ticksToLive);

    let sources = creep.room.find(FIND_SOURCES);

    let creepX = creep.pos.x;
    let creepY = creep.pos.y;
  
    
    //upgrade controller  x,y:38,40
    if(creepX === 38 && creepY === 40 && creep.store.getUsedCapacity() > 0){
      creep.upgradeController(creep.room.controller);
      console.log('*Upgrade*' + creep.name + ' : upgrade controller(38,40)');
    }

    //harvest sources x,y:32,28
    else if(creepX === 32 && creepY === 28 && creep.store.getUsedCapacity() < carryTotal){
      creep.harvest(sources[1])
      console.log('*Upgrade*' + creep.name + ' : harvest sources(32,28)');
    }

    //moveTo sources
    else if(creep.store.getUsedCapacity() === 0){
      creep.moveTo(32,28);
      console.log('*Upgrade*' + creep.name + ' : moveTo sources(17,23)');
    }

    //moveTo controller
    else if(creep.store.getUsedCapacity() === carryTotal){
      //creep.moveTo(creep.room.controller);
      creep.moveTo(38,40);
      console.log('*Upgrade*' + creep.name + ' : moveTo controller(38,40)');
    }
    

  }

}
module.exports = roleUpgeader;
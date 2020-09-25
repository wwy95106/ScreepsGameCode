/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('harvest');
 * mod.thing == 'a thing'; // true
 */

let roleHarvest = {

  harvest:function(creep,carryTotal,sourcesNum){

    let sources = creep.room.find(FIND_SOURCES);//sources
    let spawn1 = Game.spawns['Spawn1'];//spawn1
    let controller = creep.room.controller;//controller
    let structures = creep.room.find(FIND_STRUCTURES);// find structrues
    let targets = creep.room.find(FIND_CONSTRUCTION_SITES);//fing structrues sites
    let structuresArr = [];
    let emptyExtension = [];

    
    for(let a=0;a<structures.length;a++){
        if(structures[a].structureType === 'extension'){
            structuresArr.push(structures[a]);
        }
    }
    for(let b=0;b<structuresArr.length;b++){
      if(structuresArr[b].store[RESOURCE_ENERGY] < 50){
        emptyExtension.push(structuresArr[b]);
      }

    }


    
    if(creep.memory.energyStatus === 'empty'){
      console.log('*Harvest*' + creep.name + ' : harvest  sources');
      if(creep.harvest(sources[sourcesNum]) === ERR_NOT_IN_RANGE){
        creep.moveTo(sources[sourcesNum]);
      }else{
        if(creep.store.getUsedCapacity() === carryTotal){
          creep.memory.energyStatus = 'full';
          console.log('*Harvest*' + creep.name + ' : energyStatus  full');
        }
      }

    }else if(creep.memory.energyStatus === 'full'){

      if(spawn1.store[RESOURCE_ENERGY] < 300){
        console.log('*Harvest*' + creep.name + ' : transfer spawns1');
        //transfer spawns
        if( creep.transfer(spawn1, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE ) {
          creep.moveTo(spawn1);
        }else{
          if(creep.store.getUsedCapacity() === 0){
            creep.memory.energyStatus = 'empty';
            console.log('*Harvest*' + creep.name + ' : energyStatus  empty');
          }
        }
        
      }

      //transfer extension
      else if(emptyExtension.length != 0){
        console.log('*Harvest*' + creep.name + ' : transfer extension');
        //transfer emptyExtension
        if( creep.transfer(emptyExtension[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE ) {
          creep.moveTo(emptyExtension[0]);
        }else{
          if(creep.store.getUsedCapacity() === 0){
            creep.memory.energyStatus = 'empty';
            console.log('*Harvest*' + creep.name + ' : energyStatus  empty');
          }
        }
        
      }

      //build target
      else if(targets.length != 0){
        
        console.log('*Harvest*' + creep.name + ' : build target');
        if(creep.build(targets[0]) === ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0]);
        }else{
          if(creep.store.getUsedCapacity() === 0){
            creep.memory.energyStatus = 'empty';
            console.log('*Harvest*' + creep.name + ' : energyStatus  empty');
          }
        }

      }

      //upgrade Controller
      else{
        console.log('*Harvest*' + creep.name + ' : upgrade  Controller');
        if(creep.upgradeController(controller) === ERR_NOT_IN_RANGE){
          creep.moveTo(controller);
        }else{
          if(creep.store.getUsedCapacity() === 0){
            creep.memory.energyStatus = 'empty';
            console.log('*Harvest*' + creep.name + ' : energyStatus  empty');
          }
        }
      }

    }
    
    

  },
  
}
//export module
module.exports = roleHarvest;
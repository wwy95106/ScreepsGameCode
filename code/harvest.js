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
    //target
    let sources = creep.room.find(FIND_SOURCES);//sources
    let spawn1 = Game.spawns['Spawn1'];//spawn1
    let controller = creep.room.controller;//controller
    let tombstone = creep.room.find(FIND_TOMBSTONES);//tombstone
    let targets = creep.room.find(FIND_CONSTRUCTION_SITES);//find structrues sites
    
    //structrues
    let structures = creep.room.find(FIND_STRUCTURES);// find structrues
    //tower arr
    let tower = [];//find tower
    //extension arr
    let structuresArr = [];//find extension
    //empty exrension arr
    let emptyExtension = [];// empty extension
    
    
    for(let a=0;a<structures.length;a++){
      //find extension
      if(structures[a].structureType === 'extension'){
          structuresArr.push(structures[a]);
      }
      //find tower
      if(structures[a].structureType === 'tower'){
        tower.push(structures[a]);
        //empty tower
        if(structures[a].store[RESOURCE_ENERGY] < 1000){
          console.log(structures[a]);
        }
      }
    }
    

    //empty extension
    for(let b=0;b<structuresArr.length;b++){
      if(structuresArr[b].store[RESOURCE_ENERGY] < 50){
        emptyExtension.push(structuresArr[b]);
      }
    }

    console.log('*Harvest*' + creep.name," has :"+creep.store.getUsedCapacity() + " energy");
    
    //harvest logic
    if(creep.memory.energyStatus === 'empty'){
      console.log('*Harvest*' + creep.name + ' : harvest  sources');
      
      //harvest sources
      if(creep.harvest(sources[sourcesNum]) === ERR_NOT_IN_RANGE){
        creep.moveTo(sources[sourcesNum]);
      }else{
        if(creep.store.getUsedCapacity() === carryTotal){
          creep.memory.energyStatus = 'full';
          console.log('*Harvest*' + creep.name + ' : energyStatus  full');
        }
      }

    }

    //work logic
    else if(creep.memory.energyStatus === 'full'){

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

      //transfer tower[0]
      else if(tower[0].store[RESOURCE_ENERGY] < 1000){
        console.log('*Harvest*' + creep.name + ' : transfer tower');
          //transfer tower
          if( creep.transfer(tower[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE ) {
            creep.moveTo(tower[0]);
          }else{
            if(creep.store.getUsedCapacity() === 0){
              creep.memory.energyStatus = 'empty';
              console.log('*Harvest*' + creep.name + ' : energyStatus  empty');
            }
          }
      }

      //transfer tower[1]
      else if(tower[1].store[RESOURCE_ENERGY] < 1000){
        console.log('*Harvest*' + creep.name + ' : transfer tower');
          //transfer tower
          if( creep.transfer(tower[1], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE ) {
            creep.moveTo(tower[1]);
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
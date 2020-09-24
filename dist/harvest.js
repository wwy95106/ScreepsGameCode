/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('harvest');
 * mod.thing == 'a thing'; // true
 */

let roleHarvest = {


  /**
   *  @param {Creep} creep 
   *  @param {carryTotal} carryEnergyTotal 
   * **/
  run:function(creep,carryTotal){

    //console.log('**creep-Harvest:');
    console.log('*Harvest*' + creep.name ,"energy :" + creep.store[RESOURCE_ENERGY],'ticksToLive:'+creep.ticksToLive);

    //find sources
    let sources = creep.room.find(FIND_SOURCES);
    const SourcesCollectionPoint1 = creep.room.lookForAt(LOOK_CREEPS, 17,23);
    const SourcesCollectionPoint2 = creep.room.lookForAt(LOOK_CREEPS, 17,24);

    const UpgeadeControllerPoint1 = creep.room.lookForAt(LOOK_CREEPS, 38,41);
    const UpgeadeControllerPoint2 = creep.room.lookForAt(LOOK_CREEPS, 38,42);

    let structures = creep.room.find(FIND_STRUCTURES);

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
    //console.log(structuresArr.length);

    /* for(let pos in structuresArr.room.pos){
      console.log(pos);
    } */

    //creep x
    let creepX = creep.pos.x;
    //creep y
    let creepY = creep.pos.y;
    //build targets
    let targets = creep.room.find(FIND_CONSTRUCTION_SITES);

    //harvest sources x,y:17,23
    if(creepX === 17 && creepY === 23 && creep.store.getUsedCapacity() < carryTotal){
      creep.harvest(sources[0])
      console.log('*Harvest*' + creep.name + ' : harvest sources(17,23)');
    }

    //harvest sources x,y:17,24
    else if(creepX === 17 && creepY === 24 && creep.store.getUsedCapacity() < carryTotal){
      creep.harvest(sources[0])
      console.log('*Harvest*' + creep.name + ' : harvest sources(17,24)');
    }
    
    //upgrade controller x,y:38,41
    else if(creepX === 38 && creepY === 41 && creep.store.getUsedCapacity() > 0){
      creep.upgradeController(creep.room.controller);
      console.log('*Harvest*' + creep.name + ' : upgrade controller(38,41)');
    }

    //upgrade controller x,y:38,42
    else if(creepX === 38 && creepY === 41 && creep.store.getUsedCapacity() > 0){
      creep.upgradeController(creep.room.controller);
      console.log('*Harvest*' + creep.name + ' : upgrade controller(38,41)');
    }
    
    //moveTo sources
    else if(creep.store.getUsedCapacity() === 0){
      
      if(SourcesCollectionPoint1.length === 0) {
        creep.moveTo(17,23);
      }else if(SourcesCollectionPoint2.length === 0){
        creep.moveTo(17,24);
      }

      console.log('*Harvest*' + creep.name + ' : moveTo sources');
      creep.moveTo(sources[0]);
    }

    //moveTo spawn || extension || buildTarget
    else if(creep.store.getUsedCapacity() > 0){
      //creep.moveTo(sources[0]);
      
      if(Game.spawns['Spawn1'].store[RESOURCE_ENERGY] < 300){
        console.log('*Harvest*' + creep.name + ' : transfer spawns');

        //transfer spawns
        if( creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE ) {
          creep.moveTo(Game.spawns['Spawn1']);
        }
        
      }
      //transfer extension
      else if(emptyExtension.length != 0){
        console.log('*Harvest*' + creep.name + ' : transfer extension');
        //transfer emptyExtension
        if( creep.transfer(emptyExtension[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE ) {
          creep.moveTo(emptyExtension[0]);
        }
        
      }
      //build
      else if(targets.length != 0){
        
        //build target
        if(creep.build(targets[0]) === ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0]);
        }

      }
      //moveTo controller
      else{

        if(SourcesCollectionPoint1.length === 0) {
          creep.moveTo(38,41);
        }else if(SourcesCollectionPoint2.length === 0){
          creep.moveTo(38,42);
        }
        
      }

    }

  }
}
//export module
module.exports = roleHarvest;
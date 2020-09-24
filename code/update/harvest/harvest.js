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
  
      //creep x
      let creepX = creep.pos.x;
      //creep y
      let creepY = creep.pos.y;
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
      
      //moveTo sources
      else if(creep.store.getUsedCapacity() === 0){
        
        if(SourcesCollectionPoint1.length === 0) {
          creep.moveTo(17,23);
        }else if(SourcesCollectionPoint2.length === 0){
          creep.moveTo(17,24);
        }else{
          console.log('ERROR:foundSources1 != 0 && foundSources2 != 0')
        }
  
        console.log('*Harvest*' + creep.name + ' : moveTo sources');
        creep.moveTo(sources[0]);
      }
  
      //moveTo spawn || buildTarget
      else if(creep.store.getUsedCapacity() > 0){
        //creep.moveTo(sources[0]);
        
        if(Game.spawns['Spawn1'].store[RESOURCE_ENERGY] < 300){
          console.log('*Harvest*' + creep.name + ' : transfer spawns');
  
          //transfer spawns
          if( creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE ) {
            creep.moveTo(Game.spawns['Spawn1']);
          }
          
        }else{
  
          console.log('*Harvest*' + creep.name + ' : to build target');
  
          //find target
          let targets = creep.room.find(FIND_CONSTRUCTION_SITES);
          
          //build target
          if(targets.length != 0){
            
            if(creep.build(targets[0]) === ERR_NOT_IN_RANGE) {
              creep.moveTo(targets[0]);
            }
  
          }
        }
  
      }
  
    }
  }
  //export module
  module.exports = roleHarvest;
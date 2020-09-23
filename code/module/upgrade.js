/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('upgrade');
 * mod.thing == 'a thing'; // true
 */
let roleUpgeader = {

  upgrade:function(creep){

    let sources = creep.room.find(FIND_SOURCES);

    //upgrade controller
    if(creep.store[RESOURCE_ENERGY] === 0){
      //moveTo sources & harvest
      if(creep.harvest(sources[1]) === ERR_NOT_IN_RANGE) {
        creep.moveTo(sources[1]);
      }

    }else{
      //upgradeController
      if( creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE ) {
        creep.moveTo(creep.room.controller);
      }
    }
  }

}
module.exports = roleUpgeader;
/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('createCreep');
 * mod.thing == 'a thing'; // true
 */
let createCreep = {
  check:function(){
    
    let Harvester = _.filter(Game.creeps,(creep) => creep.memory.role === "Harvester");
    let Upgrader = _.filter(Game.creeps,(creep) => creep.memory.role === "Upgrader");
    //let Attack = _.filter(Game.creeps,(creep) => creep.memory.role = "Attack");
    //console.log('creep-number:');
    console.log('---Harvester: ' + Harvester.length);
    console.log('---Upgrader: ' + Upgrader.length);

    //delete creeps(died) memory
    for(let name in Memory.creeps){
      //console.log(Game.creeps[name]);
      if(Game.creeps[name] === undefined){
          delete Memory.creeps[name];
      }
    }


    if(Harvester.length < 3){

      let name = 'Harvester_' + Game.time;
      this.create(name,'Harvester');

    }
     
    if(Upgrader.length < 3){

      let name = 'Upgrader_' + Game.time;
      this.create(name,'Upgrader');

    }
    /*

    FIND_HOSTILE_CREEPS other creeps

    //find other creeps
    



    if(Attack.length < 2){

      let name = 'Attack_' + Game.time;
      this.create(name,'Attack');

    } */

  },
  create:function(name,role){

    let spawn1 = Game.spawns['Spawn1'];
    //energyAvailable
    //console.log(spawn1.room.energyAvailable);
    //console.log(spawn1.room.energyCapacityAvailable);

    //RCL 3 
    /* if(spawn1.room.energyCapacityAvailable === 800){
      spawn1.spawnCreep([WORK,WORK,WORK,CARRY,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], name,
        {
          memory: {
            role: role,
            energyStatus:'empty',
          }
      });
    } */

    spawn1.spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], name,
      {
        memory: {
          role: role,
          energyStatus:'empty',
        }
    });

    //RCL 2 
    /* if(spawn1.room.energyCapacityAvailable === 550){
      spawn1.spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], name,
        {
          memory: {
            role: role,
            energyStatus:'empty',
          }
      });
    } */
    //RCL 1
    /* else if(spawn1.room.energyCapacityAvailable === 300){
      spawn1.spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE], name,
        {
          memory: {
            role: role,
            energyStatus:'empty',
          }
      });
    } */
    

  }
}
module.exports = createCreep;
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
      
      let Harvester = _.filter(Game.creeps,(creep) => creep.memory.role === 'Harvester');
      let Upgrader = _.filter(Game.creeps,(creep) => creep.memory.role === 'Upgrader');
      //console.log('creep-number:');
      //console.log('---Harvester: ' + Harvester.length);
      //console.log('---Upgrader: ' + Upgrader.length);
  
  
      if(Harvester.length < 2){
  
        let name = 'Harvester_' + Game.time;
        this.create(name,'Harvester');
  
      }
  
      if(Upgrader.length < 1){
  
        let name = 'Upgrader_' + Game.time;
        this.create(name,'Upgrader');
  
      }
  
    },

    // 1 move need 50 energy
    // 1 carry need 50 energy
    // 1 work need 100 energy
    // 1 attack need 80 energy
    // 1 ranged_attack need 150 energy
    // 1 heal need 250 energy
    // 1 claim need 600 energy
    // 1 tough need 10 energy


    // 5 work parts are enough
    create:function(name,role){
  
      let spawn1 = Game.spawns['Spawn1'];
      spawn1.spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE], name,{memory: {role: role}});
  
    }

  }


module.exports = createCreep;



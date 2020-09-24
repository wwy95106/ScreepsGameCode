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


    if(Harvester.length < 3){

      let name = 'Harvester_' + Game.time;
      this.create(name,'Harvester');

    }

    if(Upgrader.length < 2){

      let name = 'Upgrader_' + Game.time;
      this.create(name,'Upgrader');

    }

  },
  create:function(name,role){

    let spawn1 = Game.spawns['Spawn1'];
    spawn1.spawnCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE,MOVE], name,{memory: {role: role}});

  }
}
module.exports = createCreep;
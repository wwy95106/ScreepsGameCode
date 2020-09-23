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
    console.log('creep-msg:');
    console.log('---Harvester: ' + Harvester.length);
    console.log('---Upgrader: ' + Upgrader.length);


    if(Harvester.length < 1){

      let name = 'Harvester' + Game.time;
      this.create(name,'Harvester');

    }

    if(Upgrader.length < 1){

      let name = 'Upgrader' + Game.time;
      this.create(name,'Upgrader');

    }

  },
  create:function(name,role){

    let spawn1 = Game.spawns['Spawn1'];
    console.log('create-creep:');
    console.log('creep-name:' + name);
    console.log('creep-memory-role:' + role);
    spawn1.spawnCreep([WORK,CARRY,MOVE], name,{memory: {role: role}});

  }
}
module.exports = createCreep;
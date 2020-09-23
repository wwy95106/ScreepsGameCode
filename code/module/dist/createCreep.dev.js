"use strict";

/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('createCreep');
 * mod.thing == 'a thing'; // true
 */
var createCreep = {
  check: function check() {
    var Harvester = _.filter(Game.creeps, function (creep) {
      return creep.memory.role === 'Harvester';
    });

    var Upgrader = _.filter(Game.creeps, function (creep) {
      return creep.memory.role === 'Upgrader';
    });

    console.log('Harvester: ' + Harvester.length);
    console.log('Upgrader: ' + Upgrader.length);

    if (Harvester.length < 1) {
      var name = 'Harvester' + Game.time;
      this.create(name, 'Harvester');
    }

    if (Upgrader.length < 1) {
      var _name = 'Upgrader' + Game.time;

      this.create(_name, 'Upgrader');
    }
  },
  create: function create(name, role) {
    var spawn1 = Game.spawns['Spawn1'];
    spawn1.spawnCreep([WORK, CARRY, MOVE], name, {
      memory: {
        role: role
      }
    });
  }
};
module.exports = createCreep;
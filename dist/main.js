let roleHarvester = require('harvest');
let roleUpgrader = require('upgrade');
let createCreep = require('createCreep');

module.exports.loop = function () {

    createCreep.check()

    for(let name in Game.creeps){

        let creep = Game.creeps[name];

        if(creep.memory.role === 'Harvester'){
            roleHarvester.run(creep);
        }

        if(creep.memory.role === 'Upgrader'){
            roleUpgrader.upgrade(creep);
        }

    }
}

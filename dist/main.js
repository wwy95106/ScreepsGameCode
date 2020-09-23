let roleHarvester = require('harvest');
let roleUpgrader = require('upgrade');
let createCreep = require('createCreep');

module.exports.loop = function () {
    console.log("-");
    console.log("-");
    console.log('---------'+Game.time+'---start------');

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

    console.log('---------'+Game.time+'----end-----');
    console.log("-");
    console.log("-");

}

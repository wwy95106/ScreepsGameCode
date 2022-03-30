/* 
let roleUpgrader = require('upgrade');
let towerLogic = require('tower');
*/


/* 
控制台输出用户、房间等基本信息

*/
const basicInfo = require("./basicInfo");

/* 
检测以及调用各种任务的执行方法

*/
const mession = require("mession");

/* 
内存操作

*/
let memory = require("memory");

/* 
创建creep

*/
let createCreep = require('createCreep');



/* 
采集

*/
let harvest = require('harvest');

module.exports.loop = function () {
    
    console.log("-");
    console.log('---------' + Game.time + '---start------');

    //基本信息
    let bi = new basicInfo("Spawn1");
    //bi.userBasicInfo();
    bi.RoomBasicInfo();

    //任务
    let mes = new mession("Spawn1");
    //mes.checkEnergy();

    
    let spawn = Game.spawns['Spawn1'];
    let controller = spawn.room.controller;
    let myCreeps = spawn.room.find(FIND_MY_CREEPS).length;

    if (myCreeps < 2 && spawn.store[RESOURCE_ENERGY] == 300) {

        let creepName = "harvester" + '_' + Game.time;

        spawn.spawnCreep([WORK,CARRY,CARRY,MOVE,MOVE], creepName,{
            memory: { role: "harvester", }
          });

    } else {

        for (let name in Game.creeps) {

            let creep = Game.creeps[name];
            let workNum = 0;
            let maxStoreFreeCapacity = 0;

            for (let index in creep.body) {
                if (creep.body[index].type == "work") workNum++;
            }

            maxStoreFreeCapacity = workNum * 50;

            if (creep.store.getFreeCapacity() == maxStoreFreeCapacity) {


                let sources = creep.room.find(FIND_SOURCES);

                if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0]);
                }

            } else {

                if (spawn.store[RESOURCE_ENERGY] < 300) {

                    if (creep.transfer(spawn, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(spawn);
                    }

                } else {

                    if (creep.transfer(controller, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(controller);
                    }
                }
            }
        }

    }


    console.log('---------' + Game.time + '----end-----');
    console.log("-");
};

/* 
创建creep

option = {type,level,totalEngery}

*/
let createCreep = {

  //创建新creep
  createCreepHarvester: option => {

    if (!option) { console.log("createCreepHarvester option error", option); return; };

    let creepBody = createCreep.getCreepBody(option);

    let creepName = option.type + '_' + Game.time;

    let memory = {
      memory: { role: option.type, }
    };

    spawn.spawnCreep(creepBody, creepName, memory);
  },

  //根据控制器等级和能量上限配置creep body
  getCreepBody: (option) => {

    switch (option.type) {
      case "harvester":
        break;
      case "upgrader":
        break;
    }

    return [WORK, CARRY, CARRY, MOVE, MOVE];
  },

  //获取creep可承载最大能量值
  getMaxStoreFreeCapacity: (creep) => {

    return creep.getActiveBodyparts(WORK) * 50;
  }
}
module.exports = createCreep;
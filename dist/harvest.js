/* 
采集/转移
*/
let harvest = {

  harvest: (creep, sources) => {
    if (creep.harvest(sources) == ERR_NOT_IN_RANGE) {
      creep.moveTo(sources);
    }
  },

  transfer: (creep, target) => {
    if (creep.transfer(target, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
      creep.moveTo(target);
    }
  }


}
//export module
module.exports = harvest;
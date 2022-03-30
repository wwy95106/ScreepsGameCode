/* 
内存

*/
let memory = {
    createMessionList:(mName,mType,mStatus)=>{

        if(!Memory.messionList){
            Memory.messionList = {};
        };

        //Memory.messionList

    },
    deteleCreepMemory:creepName=>{
        delete Memory.creeps[creepName];
    }
}

module.exports = memory;
let creep = {
    
    //havest || tranfer || build || upgrade
    creepDo:function(){
        for(let name in Game.creeps){
            let creeps = Game.creeps[name];

            if(creeps.memory.energyStatus === "empty"){
                
                console.log(Memory.rooms.room1.harvestLocation[0].x);
                console.log(Memory.rooms.room1.harvestLocation[0].y);

                if(creep.transfer(emptyExtension[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){

                }


                creeps.memory.energyStatus = "full";
            }

            if(creeps.memory.energyStatus === "full"){





                creeps.memory.energyStatus = "empty";
            }


        }
    },
    
    
    //get harvest location
    getHarvestLocation:function(){

    },

    //harvest
    harvest:function(){

    }


}

module.exports = creep;
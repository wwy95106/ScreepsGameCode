let tower = {
    
    tower : Game.getObjectById("5f6db07f0ab49004e7a96174"),
    //closestHostile : this.tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS),

    run:function(){
        //let tower = Game.getObjectById("5f6db07f0ab49004e7a96174");
        let closestHostile = this.tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        
        
        if(closestHostile) {
            this.attackTarget(closestHostile);
        }else{
            this.repair();
        }
        //console.log(this.closestHostile);
        //this.repairTarget(repairTarget);
        //console.log("tower ： "+tower);
        //console.log("closestHostile ： "+closestHostile);
        //console.log("repairTarget ： "+repairTarget);
        //console.log("repairTarget.hits ： "+repairTarget.hits);
        //console.log("repair ： "+tower.repair(repairTarget));
        //console.log("repairTarget.hits ： "+repairTarget.hits);
    },

    attackTarget:function(target){
        this.tower.attack(target);
        //Memory.defenseMode = true;
    },

    getRepairTarget:function(){
        let repairTarget = Game.spawns["Spawn1"].room.find(FIND_STRUCTURES);
        let target = [];
        //console.log(repairTarget);
        for(let a=0;a<repairTarget.length;a++){
            if(repairTarget[a].structureType === STRUCTURE_ROAD){//road
                if(repairTarget[a].hits != repairTarget[a].hitsMax){
                    target.push(repairTarget[a]);
                }
            }
        }
        return target;
    },

    repair:function(){
        let target = this.getRepairTarget();
        if(target.length != 0){
            this.tower.repair(target[0]);
        }
    },

    getStructure:function(){

    }



}

module.exports = tower;

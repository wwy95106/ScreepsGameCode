/* 
内存操作

*/
let memory = require("memory");

/* 
创建creep

*/
let createCreep = require('createCreep');

/* 
任务

*/
let mession = function(spawnName) {

    this.spawn = Game.spawns[spawnName];

    //检测现有的screep;
    this.checkCreeps();

    //检测能源是否已满
    this.energyIsFull = this.checkEnergy();
    //console.log("检测能源是否已满",this.energyIsFull);


    if(this.energyIsFull){
        //screep升级controller

        //for(llet name in Game.creeps){}

    }else {
        //screep存储能量

    }

    
    
    //检测creep多余的内存
    this.checkCreepsMemory();
}

/* 
检测能源存储 spawn & extension


*/
mession.prototype.checkEnergy = function(){

    //spawn & extension 可用能量 总额
    this.energyAvailable = this.spawn.room.energyAvailable;
    //spawn & extension 容量上限 总额
    this.energyCapacityAvailable = this.spawn.room.energyCapacityAvailable;

    //console.log(this.energyAvailable);
    //console.log(this.energyCapacityAvailable);

    if(this.energyAvailable == this.energyCapacityAvailable) {
        return true;
    }else {
        return false;
    }
    
}

/* 
检测creeps存活量
采集

*/
mession.prototype.checkCreeps = function(){

    this.creeps = this.spawn.room.find(FIND_MY_CREEPS);
    
    /* for(let index in this.creeps){
        console.log(this.creeps[index].name);
        console.log(this.creeps[index].memory.type);
        console.log(createCreep.getMaxStoreFreeCapacity(this.creeps[index]));
    } */
}

/* 
检测能源存储 extension


*/
mession.prototype.checkExtension = function(){

}

/* 
根据控制器等级检测是否需要建造新建筑


*/
mession.prototype.checkisNeedBuild = function(){

    this.controllerLevel = this.spawn.room.controller.level;

    switch(this.controllerLevel){

        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        default:
    }

}

/* 
检测creep多余的内存

*/
mession.prototype.checkCreepsMemory = function(){

    for(let name in Memory.creeps){
        if(Game.creeps[name] === undefined){
            memory.deteleCreepMemory(name);
        }
    }
}




module.exports = mession;

/* 



*/
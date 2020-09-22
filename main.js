module.exports.loop = function () {

    //激活安全模式
    StructureController.activateSafeMode

    //包含你所有施工工地的 hash，并以 id 作为关键字。
    console.log("Game.constructionSites :"+Game.constructionSites);
    //Game.constructionSites :[object Object]


    //game.cpu(包含有关 CPU 使用率信息的对象，具有以下属性：
    console.log("Game.cpu :"+Game.cpu.limit , "Game.tickLimit :"+Game.cpu.tickLimit , "Game.bucket :"+Game.cpu.bucket , "Game.shardLimits :"+Game.cpu.shardLimits , "Game.unlocked :"+Game.cpu.unlocked , "Game.unlockedTime :"+Game.cpu.unlockedTime);
    // Game.cpu :20 (你在当前指定 shard 的CPU限制
    // Game.tickLimit :500 (当前游戏 tick 可用的 CPU 时间,通常它高于 Game.cpu.limit
    // Game.bucket :4846  (在你的 bucket 中累积的未使用的 CPU 数量。
    // Game.shardLimits :[object Object]  (包含了每个 shard cpu 上限的对象，以 shard 名称为关键字。你可以使用 setShardLimits 方法重设他们
    // Game.unlocked :true  (您的账户是否已经解锁了完整的 CPU。
    // Game.unlockedTime :undefined  (您账户解锁完整 CPU 时的 UNIX 毫秒时间戳。当您账户的完整 CPU 未解锁或未使用 subscription 时该属性未定义。

    //包含你所有 creep 的 hash，并以 creep 名作为关键字。
    console.log("Game.creeps: " + Game.creeps);

    //包含你所有 flag 的 hash，以 flag 名作为关键字。
    console.log("Game.flags: " + Game.flags);

    //game.gcl(全局控制等级
    console.log("Game.gcl.level: " + Game.gcl.level,"Game.gcl.progress: " + Game.gcl.progress,"Game.gcl.progressTotal: " + Game.gcl.progressTotal);

    //game.gpl(全局能量等级
    console.log("Game.gpl.level: " + Game.gpl.level,"Game.gpl.progress: " + Game.gpl.progress,"Game.gpl.progressTotal: " + Game.gpl.progressTotal);

    //表示世界地图的全局对象
    console.log(Game.map);

    //表示游戏内市场的全局对象
    console.log(Game.market);

    //spawn的能量 小于300自动增长
    console.log("spawnEnergy:s"+Game.spawns['Spawn1'].store[RESOURCE_ENERGY]);

    //creep采集  value = -9(太远)   value = 0 (成功纳入计划)
    console.log(creep.harvest(sources[0]));

    //creep回可用的剩余容量
    // resource (可选)	string	资源的类型
    console.log("creep可用的剩余容量:"+creep.store.getFreeCapacity());

    //creep已使用的容量
    // resource (可选)	string	资源的类型
    console.log("creep已使用的容量:"+creep.store.getUsedCapacity());

    //creep还有多少ticks死亡
    console.log("creep还有多少ticks死亡:"+creep.ticksToLive);

    /*
    let creep = Game.creeps['Harvester1'];//creep  Harvester1

    if(creep.store.getFreeCapacity() > 0){//返回该存储的剩余可用容量


        let sources = creep.room.find(FIND_SOURCES);//目标能量

        if(Game.spawns['Spawn1'].store[RESOURCE_ENERGY] == 300){//如果母巢能量满，就去给控制器升级
            creep.moveTo(Game.spawns['5bbcae419099fc012e638a6b']);
            console.log(creep.moveTo(Game.spawns['5bbcae419099fc012e638a6b']));
        }else{

        }

        if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            creep.moveTo(sources[0]);
        }

    }else{

        if( creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE ) {
            creep.moveTo(Game.spawns['Spawn1']);
        }

    }*/

    for(let name in Game.creeps){

        let creep = Game.creeps[name];

        //creep存储过程
        if(creep.store.getFreeCapacity() === 50 ){//creep可用存储容量为空

            let sources = creep.room.find(FIND_SOURCES);//目标能量

            //离能量点距离不够就往能量点方向走1，距离够了就采集
            if(creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }

        }else{//creep可用存储容量满了


            if(Game.spawns['Spawn1'].store[RESOURCE_ENERGY] < 250){//如果母巢可存储容量小于creep携带能量

                console.log(creep.store.getUsedCapacity());
                console.log(Game.spawns['Spawn1'].store[RESOURCE_ENERGY])


                if( creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE ) {//creep将资源转移到spawn
                    creep.moveTo(Game.spawns['Spawn1']);
                }

            }else{//如果母巢可存储容量小于creep携带能量

                if( creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE ) {//creep去升级controller

                    creep.moveTo(creep.room.controller);
                }

            }



        }

    }


    //let creep = Game.creeps['Harvester1'];//creep  Harvester1
    //let sources = creep.room.find(FIND_SOURCES);//目标能量















    
}
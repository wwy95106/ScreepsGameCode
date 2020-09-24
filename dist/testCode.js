let testCode = {

    testFunc : function(){
        
        //https://github.com/screeps/screeps.git
        
        
        console.log('----');
        console.log('----testCodeGo----');
        console.log('testCodeGo');
        
        if(Memory.rooms.room1.harvestLocation.length === 0){
            this.setRoomData();
        }
        
       //Memory.rooms;
       console.log(Memory.rooms.room1.harvestLocation[0]);
    },

    setRoomData:function(){
        
        Memory.rooms = {
            room1:{
                name:"E23N19",
                harvestLocation:[],
            }
        };

        //get harvest lcoation  by spawn's room;
        let spawnObj = Game.spawns['Spawn1'];
        let sourcesLocation = this.getSourcesXy(spawnObj);
        for(let b in sourcesLocation){
            Memory.rooms.room1.harvestLocation.push(sourcesLocation[b]);
        }
        
    },

    //return [soureces1 x & y , soureces2 x & y]
    getSourcesXy:function(spawnObj){
        //sources location
        let sources = spawnObj.room.find(FIND_SOURCES);
        let roomName = spawnObj.room.name;

        //terrain around target;
        let location1,location2,location3,location4,location6,location7,location8, location9,
            locationArr = [];
        
        //search hearvest terrain
        for(let a in sources){
            if(this.getStaticTerrain(sources[a].pos.x-1,sources[a].pos.y-1,roomName) === 2 || 
               this.getStaticTerrain(sources[a].pos.x-1,sources[a].pos.y-1,roomName) === 0){
                location1 = {x:sources[a].pos.x-1,y:sources[a].pos.y-1};
                locationArr.push(location1);
            }
            if(this.getStaticTerrain(sources[a].pos.x,sources[a].pos.y-1,roomName) === 2 || 
               this.getStaticTerrain(sources[a].pos.x,sources[a].pos.y-1,roomName) === 0){
                location2 = {x:sources[a].pos.x,y:sources[a].pos.y-1};
                locationArr.push(location2);
            }
            if(this.getStaticTerrain(sources[a].pos.x+1,sources[a].pos.y-1,roomName) === 2 || 
               this.getStaticTerrain(sources[a].pos.x+1,sources[a].pos.y-1,roomName) === 0){
                location3 = {x:sources[a].pos.x+1,y:sources[a].pos.y-1};
                locationArr.push(location3);
            }
            if(this.getStaticTerrain(sources[a].pos.x-1,sources[a].pos.y,roomName) === 2 || 
               this.getStaticTerrain(sources[a].pos.x-1,sources[a].pos.y,roomName) === 0){
                location4 = {x:sources[a].pos.x-1,y:sources[a].pos.y};
                locationArr.push(location4);
            }
            if(this.getStaticTerrain(sources[a].pos.x+1,sources[a].pos.y,roomName) === 2 || 
               this.getStaticTerrain(sources[a].pos.x+1,sources[a].pos.y,roomName) === 0){
                location6 = {x:sources[a].pos.x+1,y:sources[a].pos.y};
                locationArr.push(location6);
            }
            if(this.getStaticTerrain(sources[a].pos.x-1,sources[a].pos.y+1,roomName) === 2 || 
               this.getStaticTerrain(sources[a].pos.x-1,sources[a].pos.y+1,roomName) === 0){
                location7 = {x:sources[a].pos.x-1,y:sources[a].pos.y+1};
                locationArr.push(location7);
            }
            if(this.getStaticTerrain(sources[a].pos.x,sources[a].pos.y+1,roomName) === 2 || 
               this.getStaticTerrain(sources[a].pos.x,sources[a].pos.y+1,roomName) === 0){
                location8 = {x:sources[a].pos.x,y:sources[a].pos.y+1};
                locationArr.push(location8);
            }
            if(this.getStaticTerrain(sources[a].pos.x+1,sources[a].pos.y+1,roomName) === 2 || 
               this.getStaticTerrain(sources[a].pos.x+1,sources[a].pos.y+1,roomName) === 0){
                location9 = {x:sources[a].pos.x+1,y:sources[a].pos.y+1};
                locationArr.push(location9);
            }
        };
        return locationArr;
    },
    //return  1(wall) || 2(swamp) || 0(none)
    getStaticTerrain:function(x,y,roomName){
        //const terrain = Game.map.getRoomTerrain("E23N19");
        const terrain = Game.map.getRoomTerrain(roomName);
        switch(terrain.get(x,y)) {
            case TERRAIN_MASK_WALL:
                //console.log(1,"TERRAIN_MASK_WALL");
                return 1;
                break;
            case TERRAIN_MASK_SWAMP:
                //console.log(2,"TERRAIN_MASK_SWAMP");
                return 2;
                break;
            case 0:
                //console.log(0,"NONE");
                return 0;
                break;
        }
    },


    harvest:function(location){

    }

}


module.exports = testCode;
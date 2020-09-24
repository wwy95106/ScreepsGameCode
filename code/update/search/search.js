let search = {
    
    
    searchPos:function(x,y){

    },
    
    //search structures type 
    searchStructuresType:function(type){

        let structures = creep.room.find(FIND_STRUCTURES);

        let structuresArr = [];
        
        for(let a=0;a<structures.length;a++){
            if(structures[a].structureType === type){
                structuresArr.push(structures[a]);
            }
        }

        return structuresArr;

    },

    //room static terrain data
    searchRoomTerrain:function(room,x,y){
        const TERRAIN = Game.map.getRoomTerrain(room);
        switch(TERRAIN.get(x,y)){
            case TERRAIN_MASK_LAVA:
                //wall
                return "TERRAIN_MASK_WALL"
                break;
            case TERRAIN_MASK_SWAMP:
                //swanp
                return "TERRAIN_MASK_SWAMP"
                break;
            case 0 :
                //none
                return "NONE"
                break
            default:
                return "undefined"
        }
    }
    
}
let search = {
    //room static terrain
    TERRAIN : Game.map.getRoomTerrain(room),
    
    //all structures list
    structures : creep.room.find(FIND_STRUCTURES),

    getTargetPos:function(target){
        
    },
    
    //search structures type 
    getStructuresType:function(type){
         
        let structuresList = [];
        
        for(let a=0;a<structures.length;a++){
            if(structures[a].structureType === type){
                structuresArr.push(structures[a]);
            }
        }

        return structuresList;

    },

    //room static terrain data
    getRoomXyTerrain:function(room,x,y){
        
        switch(this.TERRAIN.get(x,y)){
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
    },
    
    getTargetAroundXy:function(source){

    },
    
}
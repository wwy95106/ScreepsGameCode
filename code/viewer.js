/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('harvest');
 * mod.thing == 'a thing'; // true
 */

 let viewer = {
  screep:[],
  
  structure:creep.room.find(FIND_STRUCTURES),
  construction:[],
  tower:[],
  extension:[],
  extractor:[],
  powerBank:'',

  findStructuresWithNeedSource:function(){

  },

 }
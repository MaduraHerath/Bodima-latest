var db = require('../database/database.js')

var bordima = {
    getAllBodim:function(callback){
        return db.query("SELECT * FROM bodim",callback);
    },
    getBodimByDistrict:function(id,callback){
        console.log("get a bodim");
        return db.query("SELECT * FROM bodim WHERE Id=?",[id],callback);
        

    },
    addBodim:function(Bodim,callback){
          console.log("inside service");
             console.log(Bodim.Id);
        return db.query("INSERT INTO bodim VALUES(?,?,?,?)",[Bodim.Id,Bodim.Title,Bodim.District,Bodim.Status],callback)
    },
    deleteBodim:function(id,callback){
        return db.query("DELETE FROM bodim WHERE Id=?"[id],callback);
    },
    updateBodim:function(id,Bodim,callback){
    return  db.query("update task set Title=?,Status=? where Id=?",[Task.Title,Task.Status,id],callback);
},
deleteAll:function(item,callback){

var delarr=[];
   for(i=0;i<item.length;i++){

       delarr[i]=item[i].Id;
   }
   return db.query("delete from bodim where Id in (?)",[id],callback);
}
    
};
module.exports=bordima;
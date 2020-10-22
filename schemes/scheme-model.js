const db = require('../data/config');

//SchemeRouter is saying we need a 
//find()
function find(){
    return db("schemes").select("*")
};

//findById(id)
function findById(id){
    return db("schemes").select("*").where("id", id)  
};

//findSteps(id)
function findSteps(id){
    return db("schemes")
            .select("schemes.scheme_name",
                    "steps.step_number", 
                    "steps.instructions")
            .join("steps", "steps.scheme_id", "schemes.id")
            .where("schemes.id", id)
            .orderBy("steps.step_number")
};

//add(data)
function add(info){
  return  db("schemes").insert(info)

};


//addStep(data, id)
function addStep(info, id){
   return db("steps").insert({"step_number": info.step_number, "instructions" : info.instructions, "scheme_id": id})
   
};


//update(changes, id)
function update(changes, id){
     return db("schemes").where("id", id).update(changes)
};


//remove(id)
function remove(id){
    return db("schemes").where("id", id).del()
}


//Export the functions so the router can use them
module.exports={
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove
}
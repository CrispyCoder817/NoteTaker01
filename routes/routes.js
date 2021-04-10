const fs = require('fs');
// const util = require('util');

module.exports = (app) => {
  app.get("/api/notes", function(req, res){
    fs.readFile("./db/db.json", "utf-8", function(err, data){
        if(err){
            throw err;
        }
       const notes = JSON.parse(data);
       console.log(notes);
       return res.json(notes);
    });
})

//Post - New Notes Created
  app.post("/api/notes",function(req, res){
    const note = req.body;
    fs.readFile("./db/db.json", "utf-8", function(err, data){
        if(err){
            throw err;
        }
       let notes = JSON.parse(data);
       notes.push(note);
       notes = JSON.stringify(notes);
    fs.writeFile("./db/db.json", notes, function(err){
        if(err){
            throw err;
        }
    })
    });
    return res.json(note);
})

  // Delete request to remove note
  app.delete('/api/notes', (req, res) => {
    
  });

};

const { response } = require('express');
const fs = require('fs');
const path = require('path');
const notes = require('../db/db.json')
module.exports = app => {

    // Setup notes variable
    
        // API ROUTES
    
        // /api/notes get
        app.get("/api/notes", function(req, res) {
            console.log('/api/notes');
            let results = notes;
            console.log(notes);
            // Read the db.json file and return all saved notes as JSON.
            res.json(results);
        });

        // /api/notes post
        app.post("/api/notes", function(req, res) {
            // Receives a new note, adds it to db.json, then returns the new note
            require.body.id = notes.length;
            let createNote = req.body;
            notes.push(createNote);
            updateDb();
            res.send("Added new note: "+createNote.title);
        });


        // // Deletes note
        // app.delete("/api/notes/:id", function(req, res) {
        //     notes.splice(req.params.id, 1);
        //     updateDb();
        //     console.log("Deleted note "+req.params.id);
        // });

        // //updates the json file whenever a note is made or erased
        // function updateDb() {
        //     fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
        //         if (err) throw err;
        //         return true;
        //     });
        // }

}
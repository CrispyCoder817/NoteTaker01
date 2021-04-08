var path = require('path');
module.exports = app => {
// Display notes.html when /notes is accessed
app.get('/notes', function(req,res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Display index.html if else
app.get('*', function(req,res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
};
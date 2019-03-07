var friends = require("../data/friends")

// ROUTING
module.exports = function(app) {
    app.get("/api/friendList", function(req, res) {
        res.json(friends);
    });

    app.post("/api/friendList", function(req, res) {
        console.log(req.body)
    });
    
}


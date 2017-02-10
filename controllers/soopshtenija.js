var db = require("../core/db");

exports.getSoopshtenija = function (req, resp) {
    db.executeSql("SELECT title, content DATE_FORMAT(datum, '%d.%c.%Y') as datum FROM soopshtenija ORDER BY datum DESC", function (data, err) {
        if (err) {
            resp.writeHead(500, "Internal error");
            console.log(err);
        }
        else {
            resp.writeHead(200, { "Content-Type": "application/json" });
            resp.write(JSON.stringify(data));
        }
        resp.end();
    });
};
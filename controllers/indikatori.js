var db = require("../core/db");

exports.getIndikatori = function (req, resp) {
    db.executeSql("SELECT DISTINCT naziv FROM indikatori GROUP BY naziv, DATUM order BY DATUM DESC", function (data, err) {
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

exports.getIndikator = function (req, resp, naziv) {
    db.executeSql("SELECT distinct naziv, VREDNOST, PERIOD, LINK FROM indikatori WHERE naziv = " + naziv + "order by PERIOD", function (data, err) {
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
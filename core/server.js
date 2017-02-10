var http = require("http");
var soopshtenija = require("../controllers/soopshtenija");
var indikatori = require("../controllers/indikatori");
http.createServer(function (req, resp) {
    switch (req.method) {
        case "GET":
            if (req.url === "/") {
                resp.end();
            }
            else if (req.url === "/soopshtenija") {
                soopshtenija.getSoopshtenija(req, resp);
            }
            else if (req.url === "/indikatori") {
                indikatori.getIndikatori(req, resp);
            }
            else {
                var IndiPath = indikatori.naziv;
                var pat = new RegExp("/indikatori/" + IndiPath);
                if (patt.test(req.url)) {
                    patt = new RegExp(IndiPath);
                    var naziv = patt.exec(req.url);
                    indikatori.getIndikator(req, resp, naziv);
                }
                else {
                    console.log("Not found!")
                }
            }
            break;
        default:
            break;
    }
}).listen(3001, function () { 
    console.log("The server is running");
});
var http = require("http");
var url = require("url");
var util = require("util");
var sqlFunc = require("./ajaxMysql/linkMysql.js");

http
  .createServer(function (req, res) {
    // Cross-domain processing
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "PUT,POST,GET,DELETE,OPTIONS"
    );
    res.setHeader("X-Powered-By", " 3.2.1");
    res.setHeader("Content-Type", "application/json");

    var reqUrl = req.url;
    var mainPath = reqUrl.split("?")[0];
    var reqData = reqUrl.split("?")[1].split("=");

    if (mainPath == "/test") {
      sqlFunc
        .LinkMysql(
          "goods_info",
          reqData[0],
          JSON.stringify(decodeURIComponent(reqData[1]))
        )
        .then(function (val) {
          Console.log("Get data from the database" + val);
          sqlFunc.cutMysql();

          res.writeHead(200, { "content-Type": "text/plain; charset=utf-8" });
          res.end(JSON.stringify(val));
        });
    } else {
      res.writeHead(404, { "content-Type": "text/plain; charset=utf-8" });
    }
  })
  .listen(3000);

console.log("Server running at http://localhost:3000");

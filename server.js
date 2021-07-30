const static = require("node-static");
const port = 8000;
const file = new static.Server("./public");

require("http")
  .createServer(function (req, res) {
    req
      .addListener("end", function () {
        file.serve(req, res);
      })
      .resume();
  })
  .listen(port, function () {
    console.log("server started on port " + port);
  });

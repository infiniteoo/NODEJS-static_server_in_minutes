# NODE.JS - Static Server in Minutes w/Node-Static

### About

node-static was a module for Node.js in use before the advent of Express to create a web server to serve stastic files. node-static has not been updated in a long time and as a result has security issues and app-breaking bugs. this was a quick trip down memory lane.

```
const static = require("node-static");
const port = 8000;
const file = new static.Server("./public");

require("http")
  .createServer(function (req, res) {
    req
      .addListener("end", function () {
        file.serve(req, res, function (e, res) {
          if (e && e.status === 404) {
            file.serveFile("/error.html", 404, {}, req, res);
          }
        });
      })
      .resume();
  })
  .listen(port, function () {
    console.log("server started on port " + port);
  });


```

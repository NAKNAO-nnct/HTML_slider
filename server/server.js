
// モジュールオブジェクトの初期化
var fs = require("fs");
var server = require("http").createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var output = fs.readFileSync("../index.html", "utf-8");
    res.end(output);
}).listen(18270);  // portを指定

var io = require("socket.io").listen(server);

// イベントの定義
io.sockets.on("connection", function (socket) {

    // メッセージ送信カスタムイベント
    socket.on("publish", function (data) {
        io.sockets.emit("publish", { value: data.value });
    });
});
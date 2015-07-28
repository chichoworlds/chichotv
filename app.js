var express=require("express");
var app=new express();
var http=require("http").Server(app);
var io=require("socket.io")(http);
var Log = require('log'),
	log = new Log('debug');

var dato = [];
var i = 0;

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));
app.get('/',function(req,res){
	res.redirect('index.html');
});

io.on('connection',function(socket){
	socket.on('stream',function(data){
		dato[i] = data;
		socket.broadcast.emit('stream',dato[i]);
		i++;
	});
});

http.listen(port,function(){
	log.info('Servidor escuchando a traves del puerto %s',port);
});
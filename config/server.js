import Express from "express";
import bodyParser from "body-parser";
//import consign from "consign";
import { router } from "../app/controllers/routes.js"
import http from "http";
import { Server } from "socket.io";

const app = Express();

const serverHttp = http.createServer(app);

const io = new Server(serverHttp);

app.set('views engine', 'ejs');
app.set('views', './app/views');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);
app.use(Express.static('./app/public'));

/*consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);*/

export { app, serverHttp, io }
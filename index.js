import { app, serverHttp, io } from "./config/server.js";

serverHttp.listen(80, () => { console.log("Server is Runing: http://localhost:80") })


io.on("connection", socket => {

	socket.on('disconnect', () => {
		console.log("Usuario desconectou")
	})

	socket.on("msgParaServidor", data => {
		//dialogo
		socket.emit('msgParaClient', { apelido: data.apelido, mensagem: data.mensagem })
		socket.broadcast.emit('msgParaClient', { apelido: data.apelido, mensagem: data.mensagem })

		//participantes

		if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {
			socket.emit('participantesParaClient', { apelido: data.apelido })
			socket.broadcast.emit('participantesParaClient', { apelido: data.apelido })
		}


	})
})


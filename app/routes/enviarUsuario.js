import { validationResult } from "express-validator"
import { io } from "../../config/server.js"


export default function cadastrarUsuario(req, res) {
	const dadosForm = req.body;

	const errors = validationResult(req);
	//console.log(errors)
	if (!errors.isEmpty())
		return res.render('index.ejs', { errors })

	io.emit("msgParaClient", { apelido: dadosForm.apelido, mensagem: " Acabou de entrar no chat" })

	res.render("chat.ejs", { dadosForm: dadosForm })
}
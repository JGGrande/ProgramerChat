import { Router } from 'express';
import { body } from "express-validator"
import cadastrarUsuario from '../routes/enviarUsuario.js';
export const router = Router();

router.get('/', (req, res) => {

	res.render('index.ejs', { errors: req.body })
});
router.post('/chat', [
	body('apelido', "Campo não pode estar vazio!").notEmpty(),
	body('apelido', 'O nome deve conter entre 3 e 15 caracteres').isLength({ min: 3, max: 15 })
], cadastrarUsuario)
router.get('/chat', cadastrarUsuario)
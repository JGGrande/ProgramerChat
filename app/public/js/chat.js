const socket = io();

$("#enviarMsg").click(() => {
	//verifica se tem conteudo no imput
	if (($("#mensagem").val())) {
		socket.emit('msgParaServidor',
			{
				apelido: $("#enviar_apelido").val(),
				mensagem: $("#mensagem").val(),
				apelido_atualizado_nos_clientes: $("#apelido_atualizado_nos_clientes").val()
			})
		$("#apelido_atualizado_nos_clientes").val(1)
		$("#mensagem").val("")

	}

})

$("#mensagem").keydown((evento) => {
	//verifica se tem conteudo no imput e se a tecla digitada é o enter
	if (($("#mensagem").val()) && evento.which == 13) {
		socket.emit('msgParaServidor',
			{
				apelido: $("#enviar_apelido").val(),
				mensagem: $("#mensagem").val(),
				apelido_atualizado_nos_clientes: $("#apelido_atualizado_nos_clientes").val()
			})
		$("#apelido_atualizado_nos_clientes").val(1)
		$("#mensagem").val("")

	}

})


socket.on('msgParaClient', (data) => {

	let html = '';
	html += "<div class='dialogo'>";
	html += `<h4>${data.apelido}</h4>`;
	html += `<p>${data.mensagem}</p>`;
	html += "</div>";

	$('#dialogos').append(html)

	window.scrollTo(0, document.body.scrollHeight)
});

socket.on('participantesParaClient', (data) => {

	let html = '';
	html += "<span class='participante'>";
	html += "<img src='images/ico_usuario.png'>"
	html += data.apelido;
	html += "</span>";

	$('#pessoas').append(html)

});


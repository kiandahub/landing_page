/*
	KiandaHUB: Landing Page
*/

// Elementos do DOM
var BODY = document.getElementsByTagName("body"),
	header = document.querySelector(".mainHeader");

window.addEventListener("scroll", function() {
	//
}, false);

/* ---- Lightbox ---- */

// DOM
var fecharBT = document.querySelector(".fechar");
var	inscrever_me = document.querySelector(".inscricao");
var	lightbox = document.querySelector(".form_fazerparte");

// Abre o lightbox / formulário
inscrever_me.addEventListener("click", function(){
	lightbox.style.display = "flex";
}, false);

// Fecha o lightbox / formulário
fecharBT.addEventListener("click", function(){
	lightbox.style.display = "none";
}, false);

/* ---- Form ---- */

// Elementos DOM
var select_interesse = document.querySelector(".interessado");
var proximo = document.querySelector(".proximo");
var registar = document.querySelector(".registar");

// Campos origatórios.
var nome = document.querySelector(".i_nome"),
	email = document.querySelector(".i_email"),
	pais = document.querySelector(".i_pais");


// Enable o botão próximo quando selecionado um item da lista
select_interesse.addEventListener("change", function(){
	
	// Enable o button
	proximo.disabled = false;

}, false);

// Novos campos conforme a escolha do utilizador
var newForm = function(nomeDoForm){

	// DOM
	var startup = document.querySelector(".startup");
	var	investidor = document.querySelector(".investidor");
	var	mentor = document.querySelector(".mentor");
	var	formBasico = document.querySelector(".formBasico");
	var formulario = document.querySelector(".mainForm");

	// Oculta o formulário básico
	formBasico.style.display = "none";

	// Condições para mostrar um form conforme o interesse escolhido
	if(nomeDoForm == "Startup"){
		startup.style.display = "block";
		formulario.action = "https://docs.google.com/forms/d/1-YF-k7JCMVbzhcdnQpyLQOc_Zl3E3iwsQRWtUidAV5E/formResponse";
	}

	if(nomeDoForm == "Investir em startups"){
		investidor.style.display = "block";
		formulario.action = "https://docs.google.com/forms/d/1omqrWQ1piLGjRH4TI2cE_rxgd15OBvVfeU6KCaKex4Y/formResponse";
	}

	if(nomeDoForm == "Ser um mentor"){
		mentor.style.display = "block";
		formulario.action = "https://docs.google.com/forms/d/1Heps7QBHBRWwEHhp5PZiiZRA3scmIfuWrie_YyLLaIk/formResponse";
	}

	// Disable o botão
	proximo.disabled = true;

	// Enable o botão registar
	registar.disabled = false;

	// Submit
	registar.addEventListener("click", function(){

		if(nomeDoForm == "Startup"){
			if(Valid("req_startup") != false){
				formulario.submit();
			}
		}

		if(nomeDoForm == "Investir em startups"){
			if(Valid("req_investidor") != false){
				formulario.submit();
			}
		}

		if(nomeDoForm == "Ser um mentor"){
			if(Valid("req_mentor") != false){
				formulario.submit();
			}
		}

	}, false);

}

// Escolha de algum item na lista de interesse
proximo.addEventListener("click", function(){

	if(Valid("required") != false){

		// Invoca a função para selecionar o novo formulário.
		newForm(select_interesse.value);
	}
	
}, false);

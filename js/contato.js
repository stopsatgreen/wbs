// JavaScript Document
    function getSendContato()
	{
		var nome, email;
		//FUNÇÃO QUE MONTA A URL E CHAMA A FUNÇÃO AJAX
		nome = document.getElementById("nome").value;
		email = document.getElementById("email").value;

		 //ENVIA ESSA URL
		 url="controles/controle_app.php?funcao=contato&nome="+nome+"&email="+email;
		 ajax(url);
	
	   //  document.getElementById("btnEnviar").disabled = true;
		 document.getElementById("nome").value="";
		 document.getElementById("email").value="";
	}
	
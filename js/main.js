$( document ).ready(function(){
	$('#telf_contact').numeric();

	$(".button-collapse").sideNav();
	$('.slider').slider({ interval: 2000 });

	$('.ir-arriba').click(function(){ $('body, html').animate({ scrollTop: '0px' }, 300); });
 
	$(window).scroll(function(){ if( $(this).scrollTop() > 0 ){ $('.ir-arriba').slideDown(300); } else { $('.ir-arriba').slideUp(300); } });

	$(".btn_enviar").click(function (e) {
		e.preventDefault();
		var urldestino = "send.php";
		var name_contact = $("#name_contact").val(); 
		var email_contact = $("#email_contact").val(); 
		var validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
		var telf_contact = $("#telf_contact").val(); 
		var text_contact = $("#text_contact").val(); 

		var datos = 'name_contact='+ name_contact + '&email_contact=' + email_contact + '&telf_contact=' + telf_contact + '&text_contact=' + text_contact;

		if (name_contact == "") {
			$("#name_contact").focus();
			return false;
		}else if(email_contact == "" || !validacion_email.test(email_contact)){
			$("#email_contact").focus();    
			return false;
		}else if(telf_contact == ""){
			$("#telf_contact").focus();
			return false;
		}else if(text_contact == ""){
			$("#text_contact").focus();
			return false;
		}else{
			$.ajax({
				url: urldestino, type: 'POST', 
				//dataType: 'json',
				data: {name_contact: name_contact, email_contact: email_contact, telf_contact: telf_contact, text_contact: text_contact},
				//data: datos,
				success: function(data) {
					$('.msg').text('Mensaje enviado!').addClass('msg_ok').animate({ 'right' : '130px' }, 300);
					console.log("success");
				},
				error: function(data) {
					console.log(data);
					$('.msg').text('Hubo un error!').addClass('msg_error').animate({ 'right' : '130px' }, 300);
					console.log("error");
				},
				always: function () {
					console.log("complete");
					$("#name_contact").val("");
					$("#email_contact").val("");
					$("#telf_contact").val("");
					$("#text_contact").val(""); 
				}
			});
		}
	});
})

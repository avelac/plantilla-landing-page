<?php
	$mail_destiny = "tucorreo@gmail.com";
	$name_contact = $_POST["name_contact"];
	$email_contact = $_POST["email_contact"];
	$telf_contact = $_POST["telf_contact"];
	$text_contact = $_POST["text_contact"];

	$cuerpo = '<html><head><title>$name_contact</title></head><body><p>$text_contact</p><p>Telefono de contacto: $telf_contact</p></body></html>'; 

	// Estas son cabeceras que se usan para evitar que el correo llegue a SPAM:
	//para el envío en formato HTML 
	$headers = "MIME-Version: 1.0\r\n"; 
	$headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 
	//dirección del remitente 
	$headers .= "From: $name_contact <$email_contact>\r\n"; 
	mail( $mail_destiny, $name_contact, $cuerpo, $headers);
?>
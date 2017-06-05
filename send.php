<?php

// Do not edit this if you are not familiar with php
error_reporting (E_ALL ^ E_NOTICE);
$post = (!empty($_POST)) ? true : false;
if($post) {
	function ValidateEmail($email){

		$regex = "^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$^";
		$eregi = preg_replace($regex,'', trim($email));
		
		return empty($eregi) ? true : false;
	}

	$name = $_POST['ContactName'];
	$to = trim($_POST['to']);
	$email = trim($_POST['ContactEmail']);
	$subject = $_POST['subject'];
	$message = $_POST['ContactComment'];
	$error = '';
	$Reply=$to;
	$from=$to;
	$header = 'From: ' . $email;
	$msjCorreo = "Nombre: $name\n E-Mail: $email\n Mensaje:\n $message";
	
	// Check Name Field
	if(!$name) {
		$error .= 'Debe digitar su nombre.<br />';
	}
	
	// Checks Email Field
	if(!$email) { 
		$error .= 'Debe digitar Email.<br />';
	}
	if($email && !ValidateEmail($email)) {
		$error .= 'Email no válido.<br />';
	}

	// Checks Subject Field
	if(!$subject) {
		$error .= 'Debe digitar tema.<br />';
	}
	
	// Checks Message (length)
	if(!$message || strlen($message) < 3) {
		$error .= "Debe digitar mensaje de al menos 50 caracteres.<br />";
	}
	
	// Let's send the email.
	  
	if ($_POST['submit']) {
	if(!$error) {
		$messages="From: $email <br>";
		$messages.="Name: $name <br>";
		$messages.="Email: $email <br>";	
		$messages.="Message: $message <br><br>";
		$emailto=$to;
		
		$mail = mail($to, $subject, $msjCorreo, $header);
		
		
	   
		if($mail) {
			echo 'Enviado';
		}
	} 
		else {
		echo '<div class="error">'.$error.'</div>';
	}

}
}
?>
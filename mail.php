<?php 
 
	if(isset($_POST['username'], $_POST['email'], $_POST['tel'], $_POST['message'])){
		
		$to = "najoull19@gmail.com"; //this is your Email address
		$from = $_POST['username'];
		$username = $_POST['username'];
		$email = $_POST['email'];
		$tel = $_POST['tel'];
		$message = $_POST['message'];


		$subject = "Form submission";
		$message = $username . "\n" . $email . "\n" . $tel . "\n" . $message;

		$headers = "From:" . $from;


		if (mail($to, $subject, $message, $headers)) {

		    echo "success";

		} else {

			echo "failed";

		}

	}		

?>
<?php 
	if(isset($_POST['submit'])) {
		$name = $_POST['name'];
		$email = $_POST['email'];

		echo "Your name is: ".$name;
		echo "<br/>";
		echo "Your email is: ".$email;
	}
?>
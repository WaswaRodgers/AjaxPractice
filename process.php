<?php 

		

	if(isset($_POST['name']) || isset($_POST['uemail'])) {
		

		echo "Your name is: ".$_POST['name'];
		echo "Your email is: ".$_POST['uemail'];
	}
?>
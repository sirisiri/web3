<!--The tutorials on phpacademy.org were used as references in writing this code-->

<?php

	session_start();
	
	// include_once('php/connection.php');

	if(isset($_POST['submit'])){
		$userChoice = $_POST['userChoice'];

		if(empty($userChoice)){
			$error = "You need to pick a dish!";
		}else{
			// $query = $pdo->prepare("INSERT INTO choices (choice_dish) VALUES (?)");
			// $query->bindValue(1, $userChoice);
			// $query->execute();

			$_SESSION['currentChoice'] = $userChoice;
		}
	}

?>
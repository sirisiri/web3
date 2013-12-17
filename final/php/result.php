<?php
	session_start();

	// include_once('php/connection.php');

	$userChoice = $_SESSION['currentChoice'];

?>

<!DOCTYPE html>
<html>
	<head>
	  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	  <meta name="author" content="Napangsiri Wanpen and Seungkyun Lee">
	  <meta name="description" content="Final Project/Web 3/Parsons MFADT/Fall 2013">
	  <meta name="viewport" content="width=device-width, initial-scale = 1.0, user-scalable = no">

	  <title>HEADLESS CHICKEN RUN</title>
	  <link rel="stylesheet" href="../css/chicken-style.css">
	</head>

	<body>
		<div class="container">
			<h3>Congrats! You have successfully cooked the chicken!
				<!--<?php echo $userChoice ?>!-->
			</h3>
			<br/><br/>
			<img src="../images/<?php echo $userChoice ?>.png">
			<br/><br/>
			<a href="../index.php">&larr; Back</a>
		</div>
	</body>

</html>
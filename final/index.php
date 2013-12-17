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

			header('Location: headless.html');
		}
	}

?>

<!DOCTYPE html>
<html>
	<head>
	  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	  <meta name="author" content="Napangsiri Wanpen and Seungkyun Lee">
	  <meta name="description" content="Final Project/Web 3/Parsons MFADT/Fall 2013">
	  <meta name="viewport" content="width=device-width, initial-scale = 1.0, user-scalable = no">

	  <title>HEADLESS CHICKEN RUN</title>
	  <link rel="stylesheet" href="css/chicken-style.css">
	</head>

	<body>
		<div class="container">
			<h1>Welcome to HEADLESS CHICKEN RUN</h1>
			<p>
				Chickens can stay alive and move around for a little while even after they have been decapitated.
				(In fact, there is a famous story about <a href="http://en.wikipedia.org/wiki/Mike_the_Headless_Chicken" target="_blank">Mike the Headless Chicken</a>, who lived for 18 months after its head was cut off.)
				<br/><br/>
				In HEADLESS CHICKEN RUN, you need to run away from a chicken's headless body
				until the time is up so that you can start cooking.
				<br/><br/>
			</p>

			<h2>To begin, pick a dish you wish to cook.</h2>

			<form name="chickenChoice" action="index.php" method="post">

				<input type="radio" name="userChoice" value="roasted" />Roasted chicken
			    <br/>
		    	<input type="radio" name="userChoice" value="fried" />Fried chicken
			    <br/>
		    	<input type="radio" name="userChoice" value="burger" />Chicken burger
			    <br/>
		    	<input type="radio" name="userChoice" value="potpie" />Chicken pot pie
			    <br/>
				<input type="radio" name="userChoice" value="soup" />Chicken soup
			    <br/><br/>

			    <?php if(isset($error)){ ?>
						<small style="color:#c00;">
							<?php echo $error; ?>
						</small>
						<br/> <br/>
				<?php } ?>

			    <input type="submit" name="submit" value="Submit and Play!" />
			</form>

				<br/>

			<!-- <a href="index.php">&larr; Back</a> -->
			<!-- <h5><a href="php/result.php">Display result</a></h5> -->

		</html>

		</div>

	</body>

</html>
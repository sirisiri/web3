<?php
	
	try{
		$pdo = new PDO('mysql:host=localhost;dbname=chicken', 'root', 'root');
	}catch(PDOException $e){
		exit('database error');
	}

?>
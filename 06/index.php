<?php
if (strpos($_SERVER['HTTP_USER_AGENT'], 'MSIE') !== FALSE) {
	?>
	<h3>BOOOOOOOO</h3>
	<p>You are using Internet Explorer. Go away dinosaur.</p>
	<?php
}
else {
	?>
	<h3>COOL!</h3>
	<p>You are using <?php
		echo $_SERVER['HTTP_USER_AGENT'];
		?>.</p>
		<p>Clearly, you are not using Internet Explorer. Therefore, you are awesome.</p>
		<?php
	}
?>
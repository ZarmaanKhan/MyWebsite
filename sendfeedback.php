<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['feedback'];
  $constructedmessage = ("Feedback from $name.\nWith the email: $email.\nstating: \"$message\".");

  mail("feedback@zarmaan.com.pk","Feedback",$constructedmessage);
?>

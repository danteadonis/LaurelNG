
<?php
  echo "Hello " . $_POST['name'];
  echo '<br>';
  echo "You sent: " . $_POST['message'] . "\n from: " . $_POST['email'];

  mail("adegboye72@gmail.com", "the subject", "the message body", "the header");
?>


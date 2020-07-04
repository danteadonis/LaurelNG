
<?php 

  if(!empty($_POST["Order"])){
    $prodName= $_POST["prodName"];
    $prodPrice= $_POST["prodPrice"];
    $qtty= $_POST["quantity"];
    $buyerAddr= $_POST["buyerAddr"];
    $nearestBustop= $_POST["nearestBustop"];
    $buyerPhone= $_POST["buyerPhone"];
    $buyerEmail= $_POST["buyerEmail"];

    $toEmail= "adegboye72@gmail.com";
    $header= "From: LaurelNG Products Order Form.";
  
    if(mail($toEmail, "Mail Subjectttt", [$prodName . "\r\n" . $prodPrice . "\r\n" . $qtty . "\r\n" . $buyerAddr . "\r\n" . $nearestBustop . "\r\n" . $buyerPhone . "\r\n" . $buyerEmail], $header)){
      $message= "message inside mail() method.";
      $type= "type success";
    }
  }

  require_once "order-submit.php";


?>


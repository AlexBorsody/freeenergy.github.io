<?php
$url = 'https://subscribe.hearstmags.com/api/circ/xml/Transaction';

$xml = '<?xml version="1.0" encoding="utf-8"?>
    <opt xsi:noNamespaceSchemaLocation=https://subscribe.hearstmags.com/subscribe/HearstOrder-1.0.xsd version="1.0">
    <offer_term>136320-1</offer_term>
    <sweep_id>25190</sweep_id>
    <pt_id>6</pt_id>
    <offer_accept>0</offer_accept>
    <country_code>US</country_code>
    <ship_country_code>US</ship_country_code>
    <first_name>MYNAMEHERE</first_name>
    <ship_first_name>MYNAMEHERE</ship_first_name>
    <last_name>MYNAMEHERE</last_name>
    <ship_last_name>MYNAMEHERE</ship_last_name>
    <address>300 W 57th ST</address>
    <ship_address>300 W 57th ST</ship_address>
    <address2>dddd frfrf</address2>
    <ship_address2>cdc dfeferfrf</ship_address2>
    <city>Morgantown</city>
    <ship_city>Morgantown</ship_city>
    <state>WV</state>
    <ship_state>WV</ship_state>
    <postal_code>26508</postal_code>
    <ship_postal_code>26508</ship_postal_code>
    <email>test@hearst.com</email>
    <ship_email>test@hearst.com</ship_email>
    <general_optin>Y</general_optin>';



  /*  $header = "POST HTTP/1.1 \r\n";
    $header .= "Content-type: text/xml \r\n";
    $header .= "Content-length: " . strlen($xml_str) . "\r\n";
    $header .= "Content-transfer-encoding: text \r\n";
    $header .= "Connection: close \r\n\r\n";*/
  //  $header .= $xml_str;

/*
     $ch =  curl_init("http://www.widget.devserver2012.com/insert.php");
     curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);  
     curl_setopt($ch, CURLOPT_URL, $url); //set to url to post to 
     curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); // tell curl to return data in a variable
     curl_setopt($ch, CURLOPT_TIMEOUT, 20); // set timeout in seconds
   //  curl_setopt($ch, CURLOPT_REFERER, 'http://www.widget.devserver2012.com/widget2.html');
     curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $header); // post the xml 
     $result = curl_exec($ch);*/

    // Inicia cURL

  /*  $headers = array( 
    "POST HTTP/1.0", 
    //"Content-type: xml",
    'Content-type: application/x-www-form-urlencoded;charset=UTF-8',

    "Content-length: ".strlen($post_string), 
  //  "Content-transfer-encoding: text", 
    );
    
    $ch = curl_init();
            $options = array(CURLOPT_URL => $url,
                       
                             CURLOPT_SSL_VERIFYPEER => false,
                             CURLOPT_POST => true,
                             
                             CURLOPT_POSTFIELDS => $xml,
                                   CURLOPT_HTTPHEADER => $headers,
                             CURLOPT_RETURNTRANSFER => true
                            );

    curl_setopt_array($ch, $options);

    $response = curl_exec($ch);

    curl_close($ch);

  */



//Using CURL to submit data



$lenxml = strlen($xml);

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);

curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-type: text/html, Content-Length: ' . $lenxml));

curl_setopt($ch, CURLINFO_HEADER_OUT, true);

curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);


$result = curl_exec($ch);

clearstatcache();

curl_close ($ch);



 print print_r($result, 1);

/*
 header('Access-Control-Allow-Origin: *');

if (isset($_POST['pledge'])) {
    
   $con = mysql_connect('mysql.alexcreativeconsulting.com','hearst_widget','NYnynynyny10538');
   
   if (!$con) {
      die('Could not connect: ' . mysql_error());
    }
    mysql_select_db('hearst_widget', $con);

    $signature = htmlspecialchars(trim($_POST['signature']));
    $email = htmlspecialchars(trim($_POST['email']));
    $ch = $_POST['checkbox'];
	$ln = $_POST['lastName'];
	$ad = $_POST['address'];
	$ad2 = $_POST['address2'];
	$cy = $_POST['city'];
	$st = $_POST['state'];
	$zp = $_POST['zip'];
	
    $sql="INSERT INTO test (pladge, signature, email, subscribe, lastName, address, address2, city, state, zip) VALUES ('$_POST[pledge]', '$signature' ,'$email' , '$ch', '$ln', '$ad','$ad2','$cy','$st','$zp')";   

    if (!mysql_query($sql,$con)) {
      die('Error: ' . mysql_error());
    
    }
    mysql_close($con);
}*/


?> 
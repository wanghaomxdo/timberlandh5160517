<?php 

    $mysql_server_name='localhost'; 
    $mysql_username='tlh5160517';
    $mysql_password='tlh5160517';
    $mysql_database='tlh5160517';
  
    $conn = mysqli_connect($mysql_server_name, $mysql_username, $mysql_password,$mysql_database);
    if($conn)
    	mysqli_query($conn,"SET NAMES 'utf8'");

?>
<?php
include 'config.php';

$sql = "SELECT ID, Category, RefNo, Price, Area FROM Properties where Category=:Category  ORDER BY Price ASC";



try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->prepare($sql); 
	$stmt->bindParam("Category", $_GET[Category]);
	$stmt->execute();
	$employees = $stmt->fetchAll(PDO::FETCH_OBJ); 
	$dbh = null;
	echo '{"items":'. json_encode($employees) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}


?>



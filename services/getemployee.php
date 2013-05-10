<?php
include 'config.php';

$sql = "SELECT ID, Category, RefNo, Bedrooms, Bathrooms, Fireplace, Lounge, DiningRoom, Kitchen, Garage, Pool, Telephone, Water, Electric, `Access`, HouseSquareMeters, LandSquareMeters, Text, `General Description Spanish`, `General Description Building`, `General Description Building Spanish`, Price, Area, status FROM Properties where ID=:ID ";


try {
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);	
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$stmt = $dbh->prepare($sql);  
	$stmt->bindParam("ID", $_GET[ID]);
	$stmt->execute();
	$employee = $stmt->fetchObject();  
	$dbh = null;
	echo '{"item":'. json_encode($employee) .'}'; 
} catch(PDOException $e) {
	echo '{"error":{"text":'. $e->getMessage() .'}}'; 
}

?>


<?php

// 1. Connect to MySQL server
$mysql = mysql_connect("localhost", "root", "") or die(mysql_error());

// 2. Select the database named "mydatabase"
mysql_select_db("mydatabase", $mysql) or die(mysql_error());

// 3. Write SQL statement that inserts the record into table named "people"
$query = "INSERT INTO people VALUES('','Abu Bakar','0191234567','No 1, Jalan 2, Gambang, Kuantan'),
('','Cheng Chen Lee','0122345678','D203, Kolej Kediaman 2, UMP, Gambang, Kuantan'),
('','Aliah Ahmad','0111234567','210, Kolej Kediaman 3, UMP, Gambang, Kuantan'),
('','Monesh','0101234567','No 20/2, Taman Cili, Temerloh'),
('','Muthusamy','0107654321','Lot 239, Jalan 7/8, Temerloh')"
	or die(mysql_error());

// To run SQL query in database
$result = mysql_query($query);

// Check whether the insert was successful or not
if ($result) {
	echo ("Data inserted");
} else {
	die("Insert failed");
}

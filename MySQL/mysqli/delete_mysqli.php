<?php

// 1. Connect to MySQL server
$mysql = mysqli_connect("localhost", "root", "") or die(mysql_connect_error());

// 2. Select the database named "mydatabase"
mysqli_select_db($mysql, "mydatabase") or die(mysqli_error($mysql));

// 3. Write SQL statement that deletes the record from table named "people"
$query = "DELETE FROM people WHERE id = 2";
mysqli_query($mysql, $query);

// 4. Close the connection to MySQL server
mysqli_close($mysql);

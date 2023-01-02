<?php

// config_all.php
// Creation of database and table, and insertion of sample records

// 1. Connect to MySQL server
$mysql = mysqli_connect("localhost", "root", "");

if (!$mysql) {
  die('Could not connect: ' . mysqli_connect_error());
}

// 2. Create a database named "user"
if (mysqli_query($mysql, "CREATE DATABASE user")) {
  echo "Database created successfully\n";
} else {
  echo "Error creating database: " . mysqli_error($mysql) . "\n";
}

// 3. Select the database named "user"
mysqli_select_db($mysql, "user") or die(mysqli_error($mysql));

// 4. Write SQL statement that creates a table named "members"
$query = "CREATE TABLE members (member_id INT(11) NOT NULL AUTO_INCREMENT,
username VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL,
PRIMARY KEY(member_id))";

if (mysqli_query($mysql, $query)) {
  echo "Table created successfully\n";
} else {
  echo "Error creating table: " . mysqli_error($mysql) . "\n";
}

// 5. Close the connection to MySQL server
mysqli_close($mysql);

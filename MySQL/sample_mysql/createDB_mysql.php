<?php

// config_all.php
// Creation of database and table, and insertion of sample records

// 1. Connect to MySQL server
$mysql = mysql_connect("localhost", "root", "");

if (!$mysql) {
  die('Could not connect: ' . mysql_error());
}

// 2. Create a database named "user"
if (mysql_query("CREATE DATABASE user", $mysql)) {
  echo "Database created successfully\n";
} else {
  echo "Error creating database: " . mysql_error($mysql) . "\n";
}

// 3. Select the database named "user"
mysql_select_db("user", $mysql);

// 4. Write SQL statement that creates a table named "members"
$query = "CREATE TABLE members (member_id INT(11) NOT NULL AUTO_INCREMENT,
username VARCHAR(100) NOT NULL,
password VARCHAR(100) NOT NULL,
PRIMARY KEY(member_id))";

if (mysql_query($query, $mysql)) {
  echo "Table created successfully\n";
} else {
  echo "Error creating table: " . mysql_error($mysql) . "\n";
}

// 5. Close the connection to MySQL server
mysql_close($mysql);

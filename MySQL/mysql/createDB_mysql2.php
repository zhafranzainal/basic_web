<?php

// 1. Connect to MySQL server
$mysql = mysql_connect("localhost", "root", "");

if (!$mysql) {
    die('Could not connect: ' . mysql_error());
}

// 2. Create a database named "mydatabase"
$query = "CREATE DATABASE mydatabase";

if (mysql_query($query, $mysql)) {
    echo "Database created successfully\n";
} else {
    echo "Error creating database: " . mysql_error($mysql) . "\n";
}

// 3. Close the connection to MySQL server
mysql_close($mysql);

<?php

// 1. Connect to MySQL server
$mysql = mysqli_connect("localhost", "root", "");

if (!$mysql) {
    die('Could not connect: ' . mysqli_connect_error());
}

// 2. Create a database named "mydatabase"
$query = "CREATE DATABASE mydatabase";

if (mysqli_query($mysql, $query)) {
    echo "Database created successfully\n";
} else {
    echo "Error creating database: " . mysqli_error($mysql) . "\n";
}

// 3. Close the connection to MySQL server
mysqli_close($mysql);

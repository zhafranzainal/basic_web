<?php

// 1. Connect to MySQL server
$mysql = mysqli_connect("localhost", "root", "");

if (!$mysql) {
    die('Could not connect: ' . mysqli_connect_error());
}

// 2. Select the database named "mydatabase"
mysqli_select_db($mysql, "mydatabase") or die(mysqli_connect_error());

// 3. Create a table named "people"
$query = "CREATE TABLE people (id INT AUTO_INCREMENT, FirstName VARCHAR(100), Phone INT, Address VARCHAR(100), PRIMARY KEY(id))";

if (mysqli_query($mysql, $query)) {
    echo "Table created successfully\n";
} else {
    echo "Error creating table: " . mysqli_error($mysql) . "\n";
}

// 4. Close the connection to MySQL server
mysqli_close($mysql);

<?php

// 1. Connect to MySQL server
$mysql = mysqli_connect("localhost", "root", "") or die(mysqli_connect_error());

// 2. Select the database named "mydatabase"
mysqli_select_db($mysql, "mydatabase") or die(mysqli_error($mysql));

// 3. Write SQL statement that selects the record from table named "people"
$query = "SELECT * FROM people";

// To run SQL query in database
$result = mysqli_query($mysql, $query);

// Loop the recordset $result 
// Each row will be made into an array ($row) using mysql_fetch_array 
while ($row = mysqli_fetch_array($result)) {
    // Write the value of the column FirstName (which is now in the array $row)
    echo $row['FirstName'] . "<br/>";
}

// 4. Close the connection to MySQL server
mysqli_close($mysql);

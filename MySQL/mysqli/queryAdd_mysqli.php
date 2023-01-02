<?php

// 1. Connect to MySQL server
$mysql = mysqli_connect("localhost", "root", "") or die(mysqli_connect_error());

// 2. Select the database named "mydatabase"
mysqli_select_db($mysql, "mydatabase") or die(mysqli_error());

// 3. Write SQL statement that selects the record from table named "people"
$query = "SELECT * FROM people where Address like '%Kuantan%'";

// To run SQL query in database
$result = mysqli_query($mysql, $query);

// Loop the recordset $result
while ($row = mysqli_fetch_array($result)) {
    // Write the value of the column FirstName and Address
    echo $row['FirstName'] . "  " . $row['Address'] . "<br/>";
}

// 4. Close the connection to MySQL server
mysqli_close($mysql);

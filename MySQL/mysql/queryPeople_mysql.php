<?php

// 1. Connect to MySQL server
mysql_connect("localhost", "root", "") or die(mysql_error());

// 2. Select the database named "mydatabase"
mysql_select_db("mydatabase") or die(mysql_error());

// 3. Write SQL statement that selects the record from table named "people"
$query = "SELECT * FROM people";

// To run SQL query in database
$result = mysql_query($query);

// Loop the recordset $result
// Each row will be made into an array ($row) using mysql_fetch_array
while ($row = mysql_fetch_array($result)) {
    // Write the value of the column FirstName (which is now in the array $row)
    echo $row['FirstName'] . "<br/>";
}

// 4. Close the connection to MySQL server
mysql_close();

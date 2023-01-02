<?php

// 1. Connect to MySQL server
mysql_connect("localhost", "root", "") or die(mysql_error());

// 2. Select the database named "mydatabase"
mysql_select_db("mydatabase") or die(mysql_error());

// 3. Write SQL statement that deletes the record from table named "people"
$query = "DELETE FROM people WHERE id = 2";
mysql_query($query);

// 4. Close the connection to MySQL server
mysql_close();

<?php

// 1. Connect to MySQL server
mysql_connect("localhost", "root", "") or die(mysql_error());

// 2. Select the database named "mydatabase"
mysql_select_db("mydatabase") or die(mysql_error());

// 3. Create a table named "people"
mysql_query("CREATE TABLE people (id INT AUTO_INCREMENT,
FirstName VARCHAR(100),
Phone INT,
Address VARCHAR(100),
PRIMARY KEY(id))")
    or die(mysql_error());

// 4. Close the connection to MySQL server
mysql_close();

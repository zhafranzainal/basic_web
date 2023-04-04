<!DOCTYPE html>

<html>

<head>
    <title>Lab9(1)</title>

    <style type="text/css">
        table,
        td {
            border: 1px solid black;
        }
    </style>
</head>

<body>

    <?php

    function print_number($maxNumber)
    {
        echo "<table>";

        for ($loop = 1; $loop <= $maxNumber; $loop++) {

            echo "<td>";
            echo $loop;
            echo "</td>";

            // If we have printed 5 numbers, start a new line
            if ($loop % 5 == 0) {
                echo "</tr>";
            } else {
                // Otherwise, print a space after the number
                echo "";
            }
        }
        echo "</table>";
    }

    print_number(50);
    print_number(67);
    print_number(81);

    ?>

</body>

</html>
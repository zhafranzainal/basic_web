<!DOCTYPE html>

<html>

<head>
    <style type="text/css">
        table, th, td {
            margin-left: auto;
            margin-right: auto;
            border: 1px solid black;
        }

        table {
            width: 30%;
            height: 300px;
        }
    </style>
</head>

<body>

    <p>
        <center><b>User input is listed below:</b></center>
    </p>

    <table>

        <tr>
            <td>Name</td>
            <td>
                <?php
                echo $_POST['name'];
                ?>
            </td>
        </tr>

        <tr>
            <td>Age</td>
            <td>
                <?php
                echo $_POST['age'];
                ?>
            </td>
        </tr>

        <tr>
            <td>Gender</td>
            <td>
                <?php
                echo $_POST['gender'];
                ?>
            </td>
        </tr>

        <tr>
            <td>Title</td>
            <td>
                <?php
                echo $_POST['title'];
                ?>
            </td>
        </tr>

        <tr style="height: 10px;">
            <td>Hobbies</td>
            <td>
                <?php
                echo nl2br($_POST['hobby']);
                ?>
            </td>
        </tr>

        <tr>
            <td>Comment</td>
            <td>
                <?php
                echo nl2br($_POST['comment']);
                ?>
            </td>
        </tr>

    </table>

</body>

</html>
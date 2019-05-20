<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php 
        //当unameerr有在值的时候，把值放在span中
        // if(!empty($_GET["unameerr"])){

        // }
    ?>
    <form action="03-check.php" method="POST">
        <input type="text" name="uname" id="uname"  /><span><?php if(!empty($_GET["unameerr"])){ echo $_GET["unameerr"];}?></span><br />
        <input type="text" name="pwd" id="pwd" /><span><?php if(!empty($_GET["pwderr"])){ echo $_GET["pwderr"];}?></span><br />
        <input type="submit" />
    </form>
</body>
</html>
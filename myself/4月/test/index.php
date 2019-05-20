<?php
    include "init.inc.php";
    include "inc/dbconn.php";
    $sql = "select * from commity limit 5";
    $result = $conn->query($sql);
    if($result->num_rows>0){
        while($row = mysqli_fetch_assoc($result)){
            $value[] = $row;
        }
    }

    $str=json_encode($value);
    echo '<script>var data='.$str.'</script>';
    $conn->close();
    // $smarty->assign("data",$arr);
?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body> 
        <div id="temp2">

        </div>
        <button id="btn">点击</button>
    <script type="text/template" id="temp1">
        <div class="content">
            <ul>
            <% data.forEach(function(value,index,data){ %>
                <li>
                <p>商品:<%= data[index].id%></p>
                <p>商品名字:<%= data[index].itemname %></p>
                <p>价格:<%= data[index].price %></p>
                <p>其他:<%= data[index].other %></p>
                </li>
            <% }) %> 
            </ul>
        </div>
        
    </script>
    <script src="ejs.js"></script>
    <script src="https://cdn.bootcss.com/jquery/1.11.3/jquery.js"></script>
    <script>
        // console.log(data)
        var temp2=document.getElementById("temp2");
        var str = document.getElementById("temp1").innerHTML;
        var html= ejs.render(str,{data:data});
        temp2.innerHTML = html;
        btn.onclick=function(){
            var num=parseInt($("ul li").last().find("p").html().slice(3));
            console.log(num)
            $.ajax({
                url:"./inc/inf.php",
                data:"num="+num,
                success:function(data){
                    console.log(data)
                    var data=JSON.parse(data)
                    var html= ejs.render(str,{data:data});
                    temp2.innerHTML += html;
                }
            })
        }
    </script>
    </body>
    </html>



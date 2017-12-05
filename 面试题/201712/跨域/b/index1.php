<?php

    $age = $_GET['age'];
    $callback = $_GET['callback'];
//    echo "alert($age)";
    //业务代码比如操作数据库
    echo "$callback(30)";//回调



?>
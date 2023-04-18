<?php
    try{
        $pdo = new PDO('mysql:host=127.0.0.1;dbname=dbdreamaway;port=3306','murilo','123456');
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $pdo->exec("SET CHARACTER SET utf8");

    }catch(PDOException $error){
        echo 'Error '.$error->getMessage();
    }
?>
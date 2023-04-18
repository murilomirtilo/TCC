<?php
    require('../conn.php');

    $tituloMarcador = $_POST['tituloMarcador'];
    $descricaoMarcador = $_POST['descricaoMarcador'];
    $cordenadaMarcador = $_POST['cordenadaMarcador'];
   
    if(empty($tituloMarcador) || empty($descricaoMarcador) || empty($cordenadaMarcador)){
        echo "Os valores não podem ser vazios";
    }else{
        $cad_prod = $pdo->prepare("INSERT INTO marcador(tituloMarcador, descricaoMarcador, cordenadaMarcador) 
        VALUES(:tituloMarcador, :descricaoMarcador, :cordenadaMarcador)");
        $cad_prod->execute(array(
            ':tituloMarcador'=> $tituloMarcador,
            ':descricaoMarcador'=> $descricaoMarcador,
            ':cordenadaMarcador'=> $cordenadaMarcador  
        ));

        echo "<script>
        alert('Cordenada cadastrada com sucesso!');
        </script>";
        header('Location: ../map.html'); 
    }
?>
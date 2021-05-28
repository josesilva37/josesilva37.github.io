<?php
try{
    $pdo = new PDO('mysql:host=estga-dev.clients.ua.pt;port:3306; dbname=ptw', 'ptw','ptw');

    $statement = $pdo->prepare("SELECT * FROM  ptw.Utilizadores");
    $statement->execute();
    $json['Utilizadores'] = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($json); 
}catch(PDOException $e){
    echo json_encode($e->getMessage());
}
?>

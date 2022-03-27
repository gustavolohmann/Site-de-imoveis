<?php
    include_once("conn.php");
?>
<?php

    $data = $_POST;
    if(!empty($data)){

        if(isset($data["submit"])){

            $query = "INSERT INTO username (name,email) VALUES (:name,:email)";

            $stmt = $conn->prepare($query);

            $stmt->bindParam(":name",$data["name"]);
            $stmt->bindParam(":email",$data["email"]);

            $stmt->execute();

        }if(isset($stmt) || empty($stmt)){

            header("location:http://localhost/SiteDeImoveis/templates/registro.php");
            
        }

    }

    
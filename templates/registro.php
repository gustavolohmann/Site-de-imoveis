<?php
include_once("header.php");
?>
    <h1 class="tnt-pagina">Registre-se para receber novidades</h1>
    <form action="../config/index.php" method="POST">
        <div class="name-input">
            <input type="text" id="name" name="name"placeholder="Digite seu nome" required="required">
        </div>
        <div class="email-input">
            <input type="text" id="email" name="email"placeholder="Digite seu email" required="required">
        </div>
        <div class="btn"> 
           <button type="submit" name="submit">Enviar</button>
        </div>
    </form>
<?php
include_once("footer.php");
?>
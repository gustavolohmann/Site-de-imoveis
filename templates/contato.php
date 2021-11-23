<?php
include_once("header.php");
?>
    <h1>Entre em contato conosco</h1>
        <div>
            <input type="text" name="name"placeholder="Digite seu nome">
        </div>
        <div>
            <input type="text" name="email"placeholder="Digite seu email">
        </div>
        <div>
            <textarea name="opniao" id="opniao" cols="30" rows="10"></textarea>
        </div>
        <div>
           <button type="submit" name="submit">Enviar</button>
        </div>
    </form>
<?php
include_once("footer.php");
?>
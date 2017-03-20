<?php

// AJAX nous envoie bien les datas (onglet network) XHR

?>
<?php
// Connexion à la BDD
  $instance = new PDO("mysql:host=localhost;dbname=fea", "root", "");


  //var_dump($_POST['saisie']);
  //$searchname = $_POST['saisie'];
  $query = $instance->query("SELECT * FROM characters ORDER BY name ASC");
  $listeChar = $query->fetchAll();
?>



<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Champ de recherche</title>

    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

  </head>
  <body>
    <form action="index.php" method="post">
      <label for="searchchar">Heros à rechercher :</label>
      <input type="text" id="searchchar" name="usersearch">
      <ul id="charList">
        <?php
          for ($i=0; $i < count($listeChar) ; $i++) {
            echo "<li><a href=#>".$listeChar[$i]['name']."</a></li>";
          }
        ?>
      </ul>
      <input type="submit">
    </form>

    <div id="message"></div>

    <!-- Chargement de la librairie jQuery -->
     <script src="http://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
     <script src="static/js/master.js" charset="utf-8"></script>
  </body>
</html>

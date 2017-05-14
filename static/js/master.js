$(function() {

  var saisieUser;

  // On récupère en instantanée la saisie de l'utilisateur
  $('#searchchar').keyup(function() {
    saisieUser = $('#searchchar').val();
    $.ajax({
      url: 'index.php',
      method: 'POST',
      data: {saisie: saisieUser},
      success: function(data){
        //$('#message').html(saisieUser); //Pour afficher ce que l'utilisateur tappe
      }
    });
    // On appelle la fonction qui selon la saisie masque les choix qui ne correspondent pas
    interactiveList();
  });

  // Fonction gérant l'affichage de la liste selon la saisie de l'utilisateur
  function interactiveList(){
    // Pour chaque li (Perso)
    for (i = 0; i < $('#charList li').length; i++) {
      // filter est bien synchrone avec la saisie utilisateur
      var filter = saisieUser;
      a = $('#charList li')[i].getElementsByTagName("a")[0];
      // a renvoie <a href="#">Tharja</a> par exemple
      // le -1 est ce que renvoie la méthode indexof() si elle ne trouve rien
      // to lowercase() règle les soucis de case
      if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
        $('#charList li')[i].style.display = "";
      } else {
        $('#charList li')[i].style.display = "none";
      }
    }
  }

  // Fonction qui s'active lors d'un clic sur un personnage
  $('#charList li a').click(function(){
    var persoChoisi = $(this).text();
    // permet de copier coller le nom du perso dans l'input
    $('#searchchar').val(persoChoisi);
    // permet de dynamiquement afficher l'image du perso choisi
    $("#HeroImg").attr('src','http://localhost/FEAcharapp/static/img/character/'+persoChoisi+'.png');

    // On charge toutes les datas du perso
    $.get('http://localhost/FEAcharapp/HeroesData/'+persoChoisi+'.txt', function(data) {
      gestionAffichageData(data);
      //$('#HeroDesc').html(data);
    }, 'text');
  });


  function gestionAffichageData(dataduHeros){
    var dataduHerosSplit = dataduHeros.split('/');
    var descriptionHeros = dataduHerosSplit[0];
    $('#HeroDesc').html(descriptionHeros);
    var listeClasses = dataduHerosSplit[1];

  }



});

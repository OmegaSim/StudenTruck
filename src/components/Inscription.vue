<template>
  <div id="container">
    <div id="connectionCard" class="demo-card-wide mdl-card mdl-shadow--2dp">
      <div id="topCardTitle" class="mdl-card__title">
        <h2 class="mdl-card__title-text">Inscription</h2>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <form name="InscriptionForm" id="InscriptionForm" action="/" onsubmit="return validateForm()" method="get">
        <div id="mailInputBox" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" name="mail" type="text" id="mail">
            <label class="mdl-textfield__label" for="mail">Email</label>
        </div>
        <div id="mailConfirmationInputBox" class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" name="mail" type="text" id="mailConfirmation" autocomplete="off">
            <label class="mdl-textfield__label" for="mail">Confirmation du mail</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
            <input class="mdl-textfield__input" type="password" id="password">  
            <label class="mdl-textfield__label" for="password">Mot de passe</label>
        </div>
        <div id="InscriptionButton">
            <button id="submitButton" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"> Inscription </button>
            <p> Vous avez déjà un compte ? <a href="/"> cliquez ici ! </a> </p>
            <a href="/RequeteFoodtruck"> Inscrire mon foodtruck </a>
        </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

const $ = require('jquery')

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Ceci est la page d\'inscription'
    }
  },
  mounted: function() {
    $(document).ready(function(){
      
      $('#submitButton').on('click', function(e){
     
        var userInputMail = $("#mail").val();
        var userInputMailConfirmation = $("#mailConfirmation").val();
        var userInputPassword = $("#password").val();

        var mailRegex = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");  
        
        var errorMsg = ""; 
        var wrongMail = (userInputMail == "" || !mailRegex.test(userInputMail));
        var verifMailsInputs = (userInputMail === userInputMailConfirmation);
        
        if(wrongMail) {
            errorMsg += "Mail invalide \n";
        }
        if(!verifMailsInputs) {
            errorMsg += "Les mails ne sont pas les mêmes \n";
        }
        if (userInputPassword.length < 8) {
            errorMsg += "Votre mot de passe doit faire au moins 8 caractères \n ";
        }
        if(errorMsg !== "") {
            e.preventDefault();
            alert("Erreur : \n" + errorMsg);
        }
      });
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

#container {
        position: relative;
        top: 10vh;
        width:50%;
        margin: auto;
    }

@media screen and (max-width: 600px) {
    #container {
        position: relative;
        top: 10vh;
        width: 100%;
        margin: auto;
    }
}

#connectionCard {
    min-width: 300px;
    width: auto;
    height: auto;
    padding-bottom: 15px;
}

#topCardTitle h2 {
    color: balck;
    text-shadow: 0px 0px 1px white;
}

#topCardTitle {
    padding:10px;
    background-size: cover;
}

#InscriptionButton button, p {
     margin: 10px;
}

</style>

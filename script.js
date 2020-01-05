
// Fonction pour définir le choix du joueur selon son click
let playerItem = getPlayerChoice = (playerChoice) => {
    playerItem = playerChoice;
    console.log('getPlayerChoice : ' + playerItem);
    let rockItem = document.getElementById('rock-item').innerHTML = '<img src="img/rock-1.png" class="img-card" />';
    let paperItem = document.getElementById('paper-item').innerHTML = '<img src="img/paper-1.png" class="img-card" />';
    let cisorsItem = document.getElementById('cisors-item').innerHTML = '<img src="img/cisors-1.png" class="img-card" />';

    if(playerItem === 'rock') {
        rockItem = document.getElementById('rock-item').innerHTML = '<img src="img/rock.png" class="img-card" />';
    }
    else if(playerItem === 'paper') {
        paperItem = document.getElementById('paper-item').innerHTML = '<img src="img/paper.png" class="img-card" />';
    }
    else if(playerItem === 'cisors') {
        cisorsItem = document.getElementById('cisors-item').innerHTML = '<img src="img/cisors.png" class="img-card" />';
    }
}


// Fonction pour définir le choix automatique (desktop)
getRandomItem = () => {
    // Retourne aléatoirement un chiffre entre 0 et 2.
    let randomChoice = Math.floor(Math.random()*Math.floor(3));
    let desktopChoice;
    console.log('randomNumber : ' + randomChoice);
    switch(randomChoice) {
        case 0 :
            desktopChoice = 'rock';
            break;
        case 1 :
            desktopChoice = 'paper';
            break;
        case 2 :
            desktopChoice = 'cisors';
            break;
        default:
            alert('Please, select a card.');
    }
    console.log('Random desktopChoice :' + desktopChoice);
    return desktopChoice;
}

// Variables des scores accumulés
let player1Score = 0;
let player2Score = 0;
// Variables des scores de la partie
let player1Point = 0;
let player2Point = 0;
// Variable pour vérifier si une partie est en cours
let alreadyPlaying = false;

// Afficher le bouton "stop this game"
stopThisGameButton = () => {
    let stopButton = document.getElementById('stop').innerHTML = '<button onclick="stopGame()" class="game-button">Stop this game</button></div>';
}

// Sélection du type de jeu avec un filtre vérifiant si une partie est en cours
gameSelection = (choice) => {
    if(choice === 'desktopOnly' && alreadyPlaying === false) {
        gameChoice = 'desktopOnly';
        alreadyPlaying = true;
        // Ajout du bouton PLAY dans le DOM
        let GameDiv = document.getElementById('game-space');
        GameDiv.innerHTML = '<h3>Desktop v/s Desktop</h3><p>_</p><p>Click "play" when you are ready.</p><br /><button onclick="playGameDesktopOnly()" class="play-button" >Play</button>';
        // Ajout du bouton STOP
        stopThisGameButton();
    }
    else if(choice === 'desktopOnly' && alreadyPlaying === true) {
        // Message d'alerte -> Etes-vous sure de vouloir quitter cette partie ?
        let alert = document.getElementById('alert');
        alert.innerHTML = '<p class="red center">Do you want to quit this game ?</p><p class="red center"> Click "Stop this game" or continue.</p><br />';
    }
    else if(choice === 'humanVsDesktop' && alreadyPlaying === false) {
        gameChoice = 'humanVsDesktop';
        alreadyPlaying = true;
        console.log('alreadyPlaying : ' + alreadyPlaying + '- gameChoice : ' + gameChoice)
        // Ajout du bouton PLAY dans le DOM
        let GameDiv = document.getElementById('game-space');
        GameDiv.innerHTML = '<h3>Human v/s Desktop</h3><p>_</p><h4 class="center">Which item do you want to play ?</h4><p>Rock, paper or cisorcs ?</p><p>Click on a picture, then on the play button.</p><p>Good luck !</p><br /><button onclick="playGameHumanVsDesktop()" class="play-button">Play</button><br />';
        // Ajout du bouton STOP
        stopThisGameButton();
    }
    else if(choice === 'humanVsDesktop' && alreadyPlaying === true) {
        // Message d'alerte -> Etes-vous sure de vouloir quitter cette partie ?
        let alert = document.getElementById('alert');
        alert.innerHTML = '<p class="red center">Do you want to quit this game ?</p><p class="red center"> Click "Stop this game" or continue.</p><br />';
    }
    else {
        console.log('Error : gameChoice')
    }
}

// Règles du jeu
getScore = (player1,player2) => {
    // En cas d'égalité :
    if(player1 === player2) {
        player1Point = 0;
        player2Point = 0;
        console.log('Player 1 : ' + player1 + ' - ' + player1Score + ' - Player 2 : ' + player2 + ' - ' + player2Score);
        return 'match nul';   
    }
    else {
        switch(player1) {
            case 'rock' :
                if(player2 === 'paper') {
                    player2Score +=1;
                    player1Point = 0;
                    player2Point = 1;
                    console.log('Player 1 : ' + player1 + ' - ' + player1Score + ' - Player 2 : ' + player2 + ' - ' + player2Score)             
                    return('the winner is player 2')
                } else if(player2 === 'cisors') {
                    player1Score +=1;
                    player1Point =1;
                    player2Point = 0;
                    console.log('Player 1 : ' + player1 + ' - ' + player1Score + ' - Player 2 : ' + player2 + ' - ' + player2Score)
                    return('the winner is player 1')
                }
                break;
            case 'paper' :
                if(player2 === 'cisors') {
                    player2Score +=1;
                    player1Point = 0;
                    player2Point = 1;
                    console.log('Player 1 : ' + player1 + ' - ' + player1Score + ' - Player 2 : ' + player2 + ' - ' + player2Score)
                    return('the winner is player 2')
                }
                else if(player2 === 'rock') {
                    player1Score +=1;
                    player1Point = 1;
                    player2Point = 0;
                    console.log('Player 1 : ' + player1 + ' - ' + player1Score + ' - Player 2 : ' + player2 + ' - ' + player2Score)
                    return('the winner is player 1')
                }
                break;
            case 'cisors' :
                if(player2 === 'paper') {
                    player1Score +=1;
                    player1Point = 1;
                    player2Point = 0;
                    console.log('Player 1 : ' + player1 + ' - ' + player1Score + ' - Player 2 : ' + player2 + ' - ' + player2Score)
                    return('the winner is player 1')
                }
                else if(player2 === 'rock') {
                    player2Score +=1;
                    player1Point = 0;
                    player2Point = 1;
                    console.log('Player 1 : ' + player1 + ' - ' + player1Score + ' - Player 2 : ' + player2 + ' - ' + player2Score)
                    return('the winner is player 2')
                }
                break;
            default:
                console.log('Please, select a card.');
        }
    
    }
}

// Insertion des scores dans le DOM
displayScores = () => {
    if(player1Score>=0 && player2Score>=0) {
        // Score du player 1
        document.getElementById('score-one').innerHTML = '<h3 class="center">' + player1Score + '</h3>';
        // Score du player 2
        document.getElementById('score-two').innerHTML = '<h3 class="center">' + player2Score + '</h3>';
    }
    else {
        console.log('No score to display.');
    }
}

// Affichage des items sélectionnés dans le bloc "Game"
displaySelectedItems = (gameChoice, player1, player2) => {

    if(gameChoice === 'humanVsDesktop') {
        if(player1 === 'rock') {
            let itemsSelected = document.getElementById('item-selected');
            itemsSelected.innerHTML = '<p>Player 1 : <span class="bold">' + player1 + '</span></p><p>Player 2 : <span class="bold">' + player2 + '</span></p>';
        }
        else if(player1 === 'paper') {
            itemsSelected = document.getElementById('item-selected');
            itemsSelected.innerHTML = '<p>Player 1 : <span class="bold">' + player1 + '</span></p><p>Player 2 : <span class="bold">' + player2 + '</span></p>';
        }
        else if(player1 === 'cisors') {
            itemsSelected = document.getElementById('item-selected');
            itemsSelected.innerHTML = '<p>Player 1 : <span class="bold">' + player1 + '</span></p><p>Player 2 : <span class="bold">' + player2 + '</span></p>';
        }
        // Message d'erreur si aucune carte n'est sélectionnée
        else {
            alert('Oups ! Select an item to start the game.')
        }
    }

    else if(gameChoice === 'desktopOnly') {
        itemsSelected = document.getElementById('item-selected');
        itemsSelected.innerHTML = '<p>Player 1 : <span class="bold">' + player1 + '</span></p><p>Player 2 : <span class="bold">' + player2 + '</span></p>';
    }
    else {
        console.error('displaySelectItem not working')
    }
}

// Ajout de petites phrases de motivation pour le jeu Human V/s Desktop - Sur la manche en cours (et non le total des parties)
phrase = (player1Point,player2Point) => {
    // Si Human gagne
    if(player1Point>player2Point) {
        document.getElementById('motivation').innerHTML = '<p class="motivation-phrase">Great, you win !</p>';
    }
    // Si Human perd
    else if(player1Point<player2Point) {
        document.getElementById('motivation').innerHTML = '<p class="motivation-phrase">Oups, you loose. Choose another item !</p>';
    }
    // En cas de match nul
    else if(player1Point === player2Point) {
        document.getElementById('motivation').innerHTML = '<p class="motivation-phrase">No winner. Try again :)</p>';
    }
}

// Lancer le jeu : Desktop Only
playGameDesktopOnly = () => {
    // Définition des joueurs
    let player1 = getRandomItem();
    let player2 = getRandomItem();
    // Fonctions : Règle du jeu + Affichage des items + affichage des scores
    getScore(player1,player2);
    displaySelectedItems(gameChoice,player1,player2);
    displayScores(player1Score,player2Score);
    console.log('Player1 score : ' + player1Score  + ' - ' + 'Player2 score : ' + player2Score)
}

// Lancer le jeu : Desktop Vs Human
playGameHumanVsDesktop = (player1,player2) => {
    // Définition des joueurs
    player1 = playerItem;
    player2 = getRandomItem();
    // Fonctions : Règle du jeu + Affichage des items + affichage des scores
    getScore(player1,player2);
    displaySelectedItems(gameChoice,player1,player2);
    displayScores(player1Score,player2Score);
    phrase(player1Point,player2Point);
    console.log('Partie en cours : Human:' + player1Point + ' Desktop: ' + player2Point + ' - Scores Human: ' + player1Score  + 'Desktop : ' + player2Score);
}

// Reload la page / Mise à zéro des scores
stopGame = () => {
    window.location.reload();
}

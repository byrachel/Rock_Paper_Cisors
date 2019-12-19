
// Fonction pour définir le choix du joueur en fonction de son click
let playerItem = getPlayerChoice = playerChoice => {
    playerItem = playerChoice;
    console.log('getPlayerChoice : ' + playerItem);
}

// Fonction pour définir le choix automatique (desktop)
function getRandomItem() {
    choice = Math.floor(Math.random()*Math.floor(3));
    console.log('randomItem : ' + choice);
    switch(choice) {
        case 0 :
            choice = 'pierre';
            break;
        case 1 :
            choice = 'feuille';
            break;
        case 2 :
            choice = 'ciseaux';
            break;
        default:
            alert('Please, select a card.');
    }
    console.log('randomItemValue :' + choice);
    return choice;
}

// Variables des scores
let player1Score = 0;
let player2Score = 0;

// Vérifier si une partie est en cours
let alreadyPlaying = false;

// Afficher le bouton "stop this game"
stopThisGame = () => {
    let stopButton = document.createElement('div');
    stopButton.innerHTML = '<button onclick="stopGame()">Stop this game</button></div>';
    document.getElementById('stop').appendChild(stopButton);
}

// Sélection du type de jeu
gameSelection = (choice) => {
    
    if(choice === 'desktopOnly' && alreadyPlaying === false) {
        gameChoice = 'desktopOnly';
        alreadyPlaying = true;
        // Ajout du bouton PLAY dans le DOM
        let GameDiv = document.createElement('div');
        GameDiv.innerHTML = '<h3>Desktop v/s Desktop</h3><p>Click "play" when you are ready.</p><br /><button onclick="playGameDesktopOnly()" class="play-button" >Play</button><br />';
        document.getElementById('game-space').appendChild(GameDiv);
        stopThisGame();
    }
    else if(choice === 'desktopOnly' && alreadyPlaying === true) {
        // Message d'alerte -> Stopper le jeu avant de changer de type de jeu
        let alert = document.createElement('div');
        alert.innerHTML = '<p class="red center">Caution : Stop the game before !';
        document.getElementById('alert').appendChild(alert);
    }
    else if(choice === 'humanVsDesktop' && alreadyPlaying === false) {
        gameChoice = 'humanVsDesktop';
        alreadyPlaying = true;
        console.log('alreadyPlaying : ' + alreadyPlaying + '- gameChoice : ' + gameChoice)
        // Ajout du bouton PLAY dans le DOM
        let GameDiv = document.createElement('div');
        GameDiv.innerHTML = '<h3>Human v/s Desktop</h3><br /><h4 class="center">Which item do you want to play ?</h4><p>Rock, paper or cisorcs ?</p><p>Click on a picture, then on the play button.</p><p>Good luck !</p><br /><button onclick="playGameHumanVsDesktop()" class="play-button">Play</button><br />';
        document.getElementById('game-space').appendChild(GameDiv);
        stopThisGame();
    }
    else if(choice === 'humanVsDesktop' && alreadyPlaying === true) {
        // Message d'alerte -> Stopper le jeu avant de changer de type de jeu
        let alert = document.createElement('div');
        alert.innerHTML = '<p class="red center">Caution : Stop the game before !';
        document.getElementById('alert').appendChild(alert);
    }
    else {
        console.log('Error : gameChoice')
    }
    console.log('gameSelection : ' + gameChoice)
}

// Lancer le jeu : Desktop Only
playGameDesktopOnly = () => {
    let player1 = getRandomItem();
    let player2 = getRandomItem();
        getScore(player1,player2);
        displaySelectedItems(player1,player2);
        displayScores(player1Score,player2Score);
        console.log('Player1 score : ' + player1Score  + '-' + 'Player2 score : ' + player2Score)
}

// Lancer le jeu : Desktop Vs Human
playGameHumanVsDesktop = () => {
    let player1 = playerItem;
    let player2 = getRandomItem();
    getScore(choice,player1,player2);
    displaySelectedItems(player1,player2);
    displayScores(player1Score,player2Score);
    console.log('Player 1 score : ' + player1Score  + 'Player 2 score : ' + player2Score)
}

// Insertion des scores dans le DOM
displayScores = (player1Score,player2Score) => {
    if(player1Score>=0 && player2Score>=0) {
        // Score player 1
        let scoreOne = document.createElement('div');
        scoreOne.innerHTML = '<p class="center">' + player1Score + '</p>';
        document.getElementById('score-one').appendChild(scoreOne);
        // Score player 2
        let scoreTwo = document.createElement('div');
        scoreTwo.innerHTML = '<p class="center">' + player2Score + '</p>';
        document.getElementById('score-two').appendChild(scoreTwo);
    }
    else {
        console.log('Error : no score to display.')
    }
}

// Règles du jeu

getScore = (player1,player2) => {
    if(player1 === player2) {
        console.log('Player 1 : ' + player1 + '-' + player1Score + ' - Player 2 : ' + player2 + '-' + player2Score)
    }
    else {
        switch(player1) {
            case 'pierre' :
                if(player2 === 'feuille') {
                    player2Score ++;
                    console.log('Player 1 : ' + player1 + '-' + player1Score + ' - Player 2 : ' + player2 + '-' + player2Score)
                } else if(player2 === 'ciseaux') {
                    player1Score ++;
                    console.log('Player 1 : ' + player1 + '-' + player1Score + ' - Player 2 : ' + player2 + '-' + player2Score)

                }
                break;
            case 'feuille' :
                if(player2 === 'ciseaux') {
                    player2Score ++;
                    console.log('Player 1 : ' + player1 + '-' + player1Score + ' - Player 2 : ' + player2 + '-' + player2Score)
                }
                else if(player2 === 'pierre') {
                    player1Score ++;
                    console.log('Player 1 : ' + player1 + '-' + player1Score + ' - Player 2 : ' + player2 + '-' + player2Score)

                }
                break;
            case 'ciseaux' :
                if(player2 === 'feuille') {
                    player1Score ++;
                    console.log('Player 1 : ' + player1 + '-' + player1Score + ' - Player 2 : ' + player2 + '-' + player2Score)

                }
                else if(player2 === 'pierre') {
                    player2Score ++;
                    console.log('Player 1 : ' + player1 + '-' + player1Score + ' - Player 2 : ' + player2 + '-' + player2Score)

                }
                break;
            default:
                console.log('Please, select a card.');
        }
    
    }
}

// Affichage des items sélectionnés
displaySelectedItems = (player1,player2) => {
    if((player1 === 'pierre') || (player1 === 'feuille') || (player1 === 'ciseaux')) {
    let itemsSelected = document.createElement('div');
    itemsSelected.innerHTML = '<p>Player 1 : ' + player1 + ' - Player 2 : ' + player2 + '</p>';
    document.getElementById('item-selected').appendChild(itemsSelected);
    }
    else {
        let itemAlert = document.createElement('div');
        itemAlert.innerHTML = '<h2 class="red center">Oups ! Select an item to start the game.</h2>';
        document.getElementById('item-selected').appendChild(itemAlert);
    }
}

stopGame = () => {
    window.location.reload();
}
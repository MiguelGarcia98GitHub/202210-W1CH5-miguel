const playerList1 = {
    Miguel: { name: "Miguel", bestScore: 600, currentScore: 0 },
    Gandalf: { name: "Gandalf", bestScore: 1000, currentScore: 0 },
    Garfunkel: { name: "Garfunkel", bestScore: 500, currentScore: 0 },
    Spiderman: { name: "Spiderman", bestScore: 400, currentScore: 0 },
};

//
let playerListStorage = [];
let currentPlayer1;
let currentPoints = 1000;
let currentRoundCountNumber = 0;
let currentBingoPaper = [];
let firstLineValue = 0;
let secondLineValue = 0;
let thirdLineValue = 0;
let storeOfRandomNumbers = [];

//

function generateRandomBingoPaper() {
    firstLineValue = 0;
    secondLineValue = 0;
    thirdLineValue = 0;
    if (currentBingoPaper.length !== 0) {
        currentBingoPaper = [];
    }
    while (currentBingoPaper.length < 15) {
        let randomNum = Math.floor(Math.random() * 20 + 1);
        if (currentBingoPaper.includes(randomNum) !== true) {
            currentBingoPaper.push(randomNum);
        }
    }
}

function newTurn() {
    // BINGO!
    if (
        currentBingoPaper.every((currentValue) => currentValue === "x") === true
    ) {
        console.log("BINGO, el juego ha finalizado");
        console.log(
            `Tu puntuación de esta partida ha sido ${currentPlayer1.currentScore} puntos `
        );
        if (currentPlayer1.currentScore > currentPlayer1.bestScore) {
            currentPlayer1.bestScore = currentPlayer1.currentScore;
            console.log(
                `Has mejorado tu puntuación, tu mejor puntuación ahora es ${currentPlayer1.bestScore}`
            );
        }

        console.log(`Has tardado ${currentRoundCountNumber} rondas`);
        currentPlayer1.currentScore = 0;
        playerListStorage = [];
        for (let name in playerList1) {
            let player = playerList1[name];
            playerListStorage.push(player);
        }

        let playerListOrderedByScore = +[...playerListStorage].sort((a, b) =>
            a.bestScore > b.bestScore ? -1 : 1
        );

        console.log("Veamos el Ranking de usuarios:");
        for (let i = 0; i < playerListOrderedByScore.length; i++) {
            console.log(
                `En el puesto ${i} tenemos al usuario ${playerListOrderedByScore[i].name} con la puntuación de ${playerListOrderedByScore[i].bestScore} `
            );
        }
    }
    // New turn
    const newTurnConfirm = confirm("¿Empezamos un nuevo turno?");
    if (currentPoints === 855) {
        return;
    }

    if (!newTurnConfirm) {
        return;
    }

    if (newTurnConfirm === true) {
        if (currentPoints === 850) {
            return;
        }

        currentPlayer1.currentScore -= 5; // new
        currentRoundCountNumber += 1;
        console.log(`Tienes: ${currentPlayer1.currentScore} puntos`);

        let randomNumToCheck = Math.floor(Math.random() * 30 + 1);
        while (storeOfRandomNumbers.includes(randomNumToCheck) === true) {
            // 150
            randomNumToCheck = Math.floor(Math.random() * 30 + 1);
        }
        storeOfRandomNumbers.push(randomNumToCheck);
        console.log(`Ha salido el número: ${randomNumToCheck}`);
        const currentIndexOfNumber =
            currentBingoPaper.indexOf(randomNumToCheck);

        if (currentIndexOfNumber === -1) {
            console.log("Vaya, este número que ha salido no está en el cartón");
        }
        if (currentIndexOfNumber !== -1) {
            currentBingoPaper[currentIndexOfNumber] = "x";
            console.log(
                "Genial, tenemos un número que cuadra con nuestro cartón"
            );
            console.log(
                "Después de tachar el nuevo número, el cartón queda así:"
            );
            console.log(currentBingoPaper);
            // LINE
            if (
                currentBingoPaper[0] === "x" &&
                currentBingoPaper[1] === "x" &&
                currentBingoPaper[2] === "x" &&
                currentBingoPaper[3] === "x" &&
                currentBingoPaper[4] === "x" &&
                firstLineValue === 0
            ) {
                console.log("Primera línea");
                firstLineValue++;
            }

            if (
                currentBingoPaper[5] === "x" &&
                currentBingoPaper[6] === "x" &&
                currentBingoPaper[7] === "x" &&
                currentBingoPaper[8] === "x" &&
                currentBingoPaper[9] === "x" &&
                secondLineValue === 0
            ) {
                console.log("Segunda Línea");
                secondLineValue++;
            }

            if (
                currentBingoPaper[10] === "x" &&
                currentBingoPaper[11] === "x" &&
                currentBingoPaper[12] === "x" &&
                currentBingoPaper[13] === "x" &&
                currentBingoPaper[14] === "x" &&
                thirdLineValue === 0
            ) {
                console.log("Tercera Línea");
                thirdLineValue++;
            }
        }
    }
    if (newTurnConfirm === false) {
        console.log(
            "Decidiste dejar de jugar en medio de la partida antes de que terminase"
        );
    }
    newTurn();
}

generateRandomBingoPaper();

function playBingo() {
    // Reset values before doing anything else
    currentPoints = 1000;
    let namePrompt = "";
    firstLineValue = 0;
    secondLineValue = 0;
    thirdLineValue = 0;
    storeOfRandomNumbers = [];
    //////////////////////////////////////////
    namePrompt = prompt("¿Cuál es tu nombre?");
    console.log(
        "El sistema de puntos funciona de la siguiente manera: Empiezas con 1000 puntos, pero cada turno que pasa sin que hayas hecho BINGO, perderás 5 puntos. Por tanto, cuantos menos turnos tardes en ganar, más puntos tendrás."
    );
    if (namePrompt !== null) {
        // new logic
        if (!(namePrompt in playerList1)) {
            playerList1[namePrompt] = {
                name: namePrompt,
                bestScore: 0,
                currentScore: currentPoints,
            };
            console.log(
                "No hemos encontrado tu nombre, debes ser nuevo entonces, ¡bienvenido al Bingo!"
            );
            console.log(
                "Has sido añadido a la nueva lista de usuarios, la lista de usuarios actual es: "
            );
        } else if (namePrompt in playerList1) {
            playerList1[namePrompt].currentScore = currentPoints;
            console.log(
                "Hemos encontrado tu usuario en la lista de usuarios, juega de nuevo para intentar mejorar tu puntuación en el Ranking"
            );
            console.log(
                "No será necesario explicarte el sistema de puntos porque ya has jugado previamente"
            );
        }
        currentPlayer1 = playerList1[namePrompt];
        console.log(`El usuario en activo actual es: ${currentPlayer1.name}`);

        // Generate random bingo paper

        const confirmPaper = confirm(
            `Se ha generado un nuevo papel de Bingo con los siguientes valores: ${currentBingoPaper}. Presiona aceptar para continuar con este cartón o presiona cancelar para jugar con otro cartón distinto.`
        );

        if (confirmPaper === true) {
            console.log("Confirmaste usar ese cartón");
        }

        if (confirmPaper === false) {
            generateRandomBingoPaper();
            console.log(
                `Se ha generado un cartón distinto del primero, con los siguientes valores: ${currentBingoPaper}`
            );
        }

        {
            newTurn();
        }
    }
}

playBingo();

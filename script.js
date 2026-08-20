const message = document.getElementById("message");

let secretNumber = Math.floor(Math.random() * 100) + 1;
let count = 0;

function checkGuess() {
    const userInput = Number(
        document.getElementById("guess-input").value
    );

    count++;

    if (!userInput) {
        message.textContent = "Enter a valid number!";
    }
    else if (userInput > secretNumber) {
        message.textContent = "Too high! Enter a smaller number";
    }
    else if (userInput < secretNumber) {
        message.textContent = "Too low! Enter a larger number";
    }
    else {
        message.textContent =
            "Congrats! You guessed the number in " +
            count + " attempts!";
    }
}

function resetGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;

    message.textContent = "";

    document.getElementById("guess-input").value = "";

    count = 0;
}

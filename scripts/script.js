window.onload = function() {

    /* GLOBAL SCOPE VARIABLES */
    const menuView = document.getElementById("menu-view");  // main menu screen
    const gameView = document.getElementById("game-view");  // game screen
    const menuBtn = document.getElementById("back");        // back to main menu button
    const startBtn = document.getElementById("start");      // start button
    const displayTime = document.getElementById("time");    // display for time in game view
    const gameBoard = document.getElementById("game");      // game board

    /* EVENT LISTENERS */
    startBtn.addEventListener("click", function() {
        startTimer();
        game();
        toggleView();
    })

    menuBtn.addEventListener("click", function() {
        menu();
        toggleView();
    })

    /* FUNCTION DEFINITIONS */
    /** Chooses which timer to start depending on user input */
    function startTimer() { 
       let userTime = document.getElementById("dropdown").value;

       if (userTime == "none") {
           countUpTimer(userTime, displayTime);
       } else {
           countDownTimer(userTime, displayTime);
       }
    }

    /** Initalizes timer that starts at an inputted time and increments by -1. Stops when it reaches 00:00 */
    function countDownTimer(duration, display) { // timer starts from given time and counts down to 0
        duration = parseInt(duration);
        const timer = setInterval(() => {
            let seconds = duration % 60;
            let minutes = Math.floor(duration / 60);

            seconds = seconds < 10 ? "0"+seconds : seconds; 
            display.textContent = "0"+minutes+":"+seconds; 
            
            if(--duration < 0) { // interval ends once total time falls to 0
                clearInterval(timer);
            }
            if(menuBtn.addEventListener("click", function() { clearInterval(timer) })); // clears timer
        }, 1000);
    }

    /** Initializes timer, starts at 00:00 and increments by one second indefinately */
    function countUpTimer(duration, display) { // timer starts at 0 and increments up indefinitely
        duration = 0;
        let timer = setInterval(() => {
            let seconds = duration % 60;
            let minutes = Math.floor(duration / 60);

            seconds = seconds < 10 ? "0"+seconds : seconds;
            minutes = minutes < 10 ? "0"+minutes : minutes;

            display.textContent = minutes+":"+seconds;
            ++duration; // time increments by 1

            if(menuBtn.addEventListener("click", function() {clearInterval(timer)})); // clears timer
        }, 1000);
    }

    /** Function that generates cards on the board */
    function game() {
        // generating cards
        for(i = 0; i < 12; i++) { // creates 12 divs with class "card" and appends them to game board
            var card = document.createElement("div"); 
            card.classList.add("card"); 
            gameBoard.appendChild(card); 
        }
    }

    /** Removes all cards from the game board */
    function menu() {   
        gameBoard.textContent = ""; // hack that removes all child elements, probably not the best solution but will serve as temp solution
    }

    /** Toggles between game view (the board with cards) and menu view (instructions, setting up time) */
    function toggleView() {
        menuView.classList.toggle("hidden");
        gameView.classList.toggle("hidden");
    }
}
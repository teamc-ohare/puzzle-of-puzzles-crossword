// JAVASCRIPT FOR GAMEPAGE GENERATION BY JOSHUA KIDDER
// IS CURRENTLY LOCATED IN THE GAMEPAGE.HTML FILE 
// THIS FILE IS FOR TESTING PURPOSES
    
    // Create an array of links to choose from 
    var game = new Array();

    game[1] = "./easy/5x5_gameOne.html";
    game[2] = "./easy/5x5_gameTwo.html";
    game[3] = "./easy/6x6_gameThree.html";
    game[4] = "./easy/7x7_gameFour.html";
    game[5] = "./easy/8x8_gameFive.html";

    // Function to call gameboard
    function openLink() {
        // Choose a random link from the array
        var i = Math.floor(Math.random() * game.length);
        // Direct browser to target
        parent.location = game[i];
        return false;
    }



$(document).ready(function () {

    //set all the values
    var goalScore;
    var userScore = 0;
    var wins = 0;
    var losses = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;

    numberGrab();
    start();

    //restart the game but keep points going
    function reset() {
        userScore = 0;
        numberGrab();
        start();
    };

    //sets the values of each of the crystals
    function start() {
        crystal1 = $("#one").attr('value', crystalValue());
        crystal2 = $("#two").attr('value', crystalValue());
        crystal3 = $("#three").attr('value', crystalValue());
        crystal4 = $("#four").attr('value', crystalValue());
    };

    //generate random number 19-120 for goalScore
    function numberGrab() {
        var rando = Math.floor(Math.random() * 100) + 19;
        goalScore = rando;
        $("#goal-score").html("Goal Score: " + rando);
    };

    //generate random number for crystals
    function crystalValue() {
        return Math.floor(Math.random() * 12) + 1;
    };

    //check if the scores are the same and add points
    function checkScore() {
        if (goalScore === userScore) {
            wins++;
            $("#wins").html("Wins: " + wins);
            reset();
        }
        else if (goalScore < userScore) {
            losses++;
            $("#losses").html("Losses: " + losses);
            reset();
        }
    };

    //add the value of each crystal to the userScore
    $(".crystal").on('click', function () {
        userScore += parseInt($(this).attr("value"));
        $("#user-score").html("Your Score: " + userScore);
        checkScore();
    });

});


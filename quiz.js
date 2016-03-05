/**
 * Created by DreamD on 1/13/2016.
 */
window.onload = function start() {

    //array vragen & antwoorden
    var vragen = ["1 x 1 = 2",
        "1 x 1 = 1",
        "2 x 2 = 4",
        "7 x 7 = 49",
        "1 x 8 = 9",
        "8 x 1 = 8",
        "5 x 5 = 25",
        "3 x 5 = 2",
        "6 x 6 = 36",
        "9 x 9 = 90",
        "9 x 6 = 33",
        "7 x 3 = 22",
        "4 x 5 = 25"
    ];
    var antw = [false,
        true,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        false,
        false,
        false
    ];

    // Script voor random vraag stellen
    var a = Math.floor(Math.random() * vragen.length);
    var rand = vragen[a];
    document.getElementById('quizzy').innerHTML = rand + "<br>";

    document.getElementById('G').onclick = check1;
    document.getElementById('F').onclick = check2;
    // Knop check if vraag is gelijk aan antwoord.
    function check1() {
        if (antw[a] === true) {
            alert("Goedzo!!");
            location.reload();
        }
        else {
            alert("Fout! Dat kan beter!");
            location.reload();
        }
    }
    function check2() {
        if (antw[a] === false) {
            alert("Goedzo!!");
            location.reload();
        }
        else {
            alert("Fout! Dat kan beter!");
            location.reload();
        }
    }
};
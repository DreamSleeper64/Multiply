/**
 * Created by DreamD on 1/12/2016.
 */
window.onload = function start(){

    // De volgende .onclick functies hebben geen () er achter anders start het steeds opnieuw.
    document.getElementById('1').onclick = tafel1;
    document.getElementById('2').onclick = tafel2;
    document.getElementById('3').onclick = tafel3;
    document.getElementById('4').onclick = tafel4;
    document.getElementById('5').onclick = tafel5;
    document.getElementById('6').onclick = tafel6;
    document.getElementById('7').onclick = tafel7;
    document.getElementById('8').onclick = tafel8;
    document.getElementById('9').onclick = tafel9;
    document.getElementById('10').onclick = tafel10;

    // array voor de tafels 1-10
    var tafel = [1,2,3,4,5,6,7,8,9,10];

    // Zodra er op een knop gedrukt wordt toont deze functies de tafels.
    function tafel1(){
        document.getElementById('toefen').innerHTML = "";
        document.getElementById('toefen').setAttribute('style','visibility:visible');
        for(var x = 0; x < tafel.length; x++){
            document.getElementById('toefen').innerHTML
                += "1 x " + tafel[x] + " = " + tafel[x]*tafel[0] + "<br>";
        }
    }
    function tafel2(){
        document.getElementById('toefen').innerHTML = "";
        document.getElementById('toefen').setAttribute('style','visibility:visible');
        for(var x = 0; x < tafel.length; x++){
            document.getElementById('toefen').innerHTML
                += "2 x " + tafel[x] + " = " + tafel[x]*tafel[1] + "<br>";
        }
    }
    function tafel3(){
        document.getElementById('toefen').innerHTML = "";
        document.getElementById('toefen').setAttribute('style','visibility:visible');
        for(var x = 0; x < tafel.length; x++){
            document.getElementById('toefen').innerHTML
                += "3 x " + tafel[x] + " = " + tafel[x]*tafel[2] + "<br>";
        }
    }
    function tafel4(){
        document.getElementById('toefen').innerHTML = "";
        document.getElementById('toefen').setAttribute('style','visibility:visible');
        for(var x = 0; x < tafel.length; x++){
            document.getElementById('toefen').innerHTML
                += "4 x " + tafel[x] + " = " + tafel[x]*tafel[3] + "<br>";
        }
    }
    function tafel5(){
        document.getElementById('toefen').innerHTML = "";
        document.getElementById('toefen').setAttribute('style','visibility:visible');
        for(var x = 0; x < tafel.length; x++){
            document.getElementById('toefen').innerHTML
                += "5 x " + tafel[x] + " = " + tafel[x]*tafel[4] + "<br>";
        }
    }
    function tafel6(){
        document.getElementById('toefen').innerHTML = "";
        document.getElementById('toefen').setAttribute('style','visibility:visible');
        for(var x = 0; x < tafel.length; x++){
            document.getElementById('toefen').innerHTML
                += "6 x " + tafel[x] + " = " + tafel[x]*tafel[5] + "<br>";
        }
    }
    function tafel7(){
        document.getElementById('toefen').innerHTML = "";
        document.getElementById('toefen').setAttribute('style','visibility:visible');
        for(var x = 0; x < tafel.length; x++){
            document.getElementById('toefen').innerHTML
                += "7 x " + tafel[x] + " = " + tafel[x]*tafel[6] + "<br>";
        }
    }
    function tafel8(){
        document.getElementById('toefen').innerHTML = "";
        document.getElementById('toefen').setAttribute('style','visibility:visible');
        for(var x = 0; x < tafel.length; x++){
            document.getElementById('toefen').innerHTML
                += "8 x " + tafel[x] + " = " + tafel[x]*tafel[7] + "<br>";
        }
    }
    function tafel9(){
        document.getElementById('toefen').innerHTML = "";
        document.getElementById('toefen').setAttribute('style','visibility:visible');
        for(var x = 0; x < tafel.length; x++){
            document.getElementById('toefen').innerHTML
                += "9 x " + tafel[x] + " = " + tafel[x]*tafel[8] + "<br>";
        }
    }
    function tafel10(){
        document.getElementById('toefen').innerHTML = "";
        document.getElementById('toefen').setAttribute('style','visibility:visible');
        for(var x = 0; x < tafel.length; x++){
            document.getElementById('toefen').innerHTML
                += "10 x " + tafel[x] + " = " + tafel[x]*tafel[9] + "<br>";
        }
    }
};


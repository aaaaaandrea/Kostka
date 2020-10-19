document.body.style.backgroundColor = 'rgb(191, 192, 207)';

let cube = document.querySelectorAll(".cube");
let button1 = document.createElement("button");
let button2 = document.createElement("button");

let imgNumber, roundNumber = 0;
let check1 = 0;
//hodnota jednotlivých kostek
let value = [0, 1, 2, 3, 4, 5];

let numberClick1 = 0;
let numberClick2 = 0;
let numberClick3 = 0;
let numberClick4 = 0;
let numberClick5 = 0;
let numberClick6 = 0;

//zjištuje které kostky jsou vybrané(1) a které ne  (0)
let on = [3, 3, 3, 3, 3, 3];

let points = 0;

let helperP = [];

let helper1 = 0,
    helper2 = 0,
    helper3 = 0;

let selected = document.getElementById('selected') //.innerText = selectedNum;
let round = document.getElementById('round') //.innerText = rounddNum;
let total = document.getElementById('total') //.innerText = totalNum;



document.getElementById('game').addEventListener('click',
    function () {
        game.style.display = 'none';
        randomize();
        document.getElementById("create1").appendChild(button1).textContent = 'Continue round';
        document.getElementById("create2").appendChild(button2).textContent = 'End round';
        aa();
        bb();
    }
);

function aa() {

    cube[0].addEventListener('click', mark1);

    cube[1].addEventListener('click', mark2);

    cube[2].addEventListener('click', mark3);

    cube[3].addEventListener('click', mark4);

    cube[4].addEventListener('click', mark5);

    cube[5].addEventListener('click', mark6);
}

function bb() {
    button1.addEventListener('click', function () {

        console.log("roundNumber" + roundNumber)
        for (i = 0; i < on.length; i++) {
            on[i] = 3;
            cube[i].style.filter = "none";
        }
        numberClick1 = 0;
        numberClick2 = 0;
        numberClick3 = 0;
        numberClick4 = 0;
        numberClick5 = 0;
        numberClick6 = 0;

        randomize();
        points = 0;

        helperP.push(helper1);
        console.log(helperP);

        helper2 += helperP[roundNumber]


        selected.innerText = points;
        round.innerText = helper2;

        roundNumber++;
    })


    button2.addEventListener('click', function () {
        for (i = 0; i < on.length; i++) {
            on[i] = 3;
            cube[i].style.filter = "none";
        }
        numberClick1 = 0;
        numberClick2 = 0;
        numberClick3 = 0;
        numberClick4 = 0;
        numberClick5 = 0;
        numberClick6 = 0;
        points = 0;


        helper3 += helper2 + helper1
        selected.innerText = 0;
        round.innerText = 0;
        total.innerText = helper3;
        helper1 = 0;
        helper2 = 0;
        helperP.length = 0;
        roundNumber = 0;
        document.body.style.backgroundColor = 'rgb(9, 15, 62)';
        aa();

    })
}

function mark1() {
    numberClick1++;
    if (numberClick1 % 2 == 0) {
        cube[0].style.filter = "none";
        on[0] = 0;
        points -= value[0];
        //  score();
    } else {
        cube[0].style.filter = "hue-rotate(90deg)";
        on[0] = 1;
        points += value[0];
        // score();
    }
    score();
}

function mark2() {
    numberClick2++;
    if (numberClick2 % 2 == 0) {
        cube[1].style.filter = "none";
        on[1] = 0;
        points -= value[1];
        //score();
    } else {
        cube[1].style.filter = "hue-rotate(90deg)";
        on[1] = 1;
        points += value[1];
        // score();
    }
    score();
}

function mark3() {
    numberClick3++;
    if (numberClick3 % 2 == 0) {
        cube[2].style.filter = "none";
        on[2] = 0;
        points -= value[2];
        // score();
    } else {
        cube[2].style.filter = "hue-rotate(90deg)";
        on[2] = 1;
        points += value[2];
        // score();
    }
    score();
}

function mark4() {
    numberClick4++;
    if (numberClick4 % 2 == 0) {
        cube[3].style.filter = "none";
        on[3] = 0;
        points -= value[3];
        // score();
    } else {
        cube[3].style.filter = "hue-rotate(90deg)";
        on[3] = 1;
        points += value[3];
        // score();
    }
    score();
}

function mark5() {
    numberClick5++;
    if (numberClick5 % 2 == 0) {
        cube[4].style.filter = "none";
        on[4] = 0;
        points -= value[4];
        // score();
    } else {
        cube[4].style.filter = "hue-rotate(90deg)";
        on[4] = 1;
        points += value[4];
        // score();
    }
    score();
}

function mark6() {
    numberClick6++;
    if (numberClick6 % 2 == 0) {
        cube[5].style.filter = "none";
        on[5] = 0;
        points -= value[5];
        //  score();
    } else {
        cube[5].style.filter = "hue-rotate(90deg)";
        on[5] = 1;
        points += value[5];
        // score();
    }
    score();
}

function score() {
    helper1 = 0;
    helper1 = points;
    selected.innerText = helper1;
}



function randomize() {
    for (i = 0; i < cube.length; i++) {
        imgNumber = Math.ceil(Math.random() * 6);
        value[i] = imgNumber;
        cube[i].src = 'img/kostka' + imgNumber + '.png';
    }
}
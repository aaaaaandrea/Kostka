document.body.style.backgroundColor = 'rgb(191, 192, 207)';

let cube = document.querySelectorAll(".cube");
let button1 = document.createElement("button");
let button2 = document.createElement("button");
let dice1 = document.getElementById('dice1');
let numberClick;
let numberClick1 = 0;
let dice2 = document.getElementById('dice2');
let numberClick2 = 0;
let dice3 = document.getElementById('dice3');
let numberClick3 = 0;
let dice4 = document.getElementById('dice4');
let numberClick4 = 0;
let dice5 = document.getElementById('dice5');
let numberClick5 = 0;
let dice6 = document.getElementById('dice6');
let numberClick6 = 0;

document.getElementById('game').addEventListener('click',
    function () {
        game.style.display = 'none';
        randomize();
        document.getElementById("create1").appendChild(button1).textContent = 'Pokračuj v tahu';
        document.getElementById("create2").appendChild(button2).textContent = 'Ukonči tah';
        aa();

    }
);

function aa() {

    dice1.addEventListener('click', mark1);

    dice2.addEventListener('click', mark2);

    dice3.addEventListener('click', mark3);

    dice4.addEventListener('click', mark4);

    dice5.addEventListener('click', mark5);

    dice6.addEventListener('click', mark6);
}

function mark1() {
    numberClick1++;
    if (numberClick1 % 2 == 0) {
        console.log(numberClick1 + ' a 2');
        dice1.style.filter = "none";
        
    } else {
        console.log(numberClick1 + ' a 1');
        dice1.style.filter = "hue-rotate(90deg)";
    }

}

function mark2() {
    numberClick2++;
    if (numberClick2 % 2 == 0) {
        console.log(numberClick2 + ' a 2');
        dice2.style.filter = "none";
    } else {
        console.log(numberClick2 + ' a 1');
        dice2.style.filter = "hue-rotate(90deg)";
    }
}

function mark3() {
    numberClick3++;
    if (numberClick3 % 2 == 0) {
        console.log(numberClick3 + ' a 2');
        dice3.style.filter = "none";
    } else {
        console.log(numberClick3 + ' a 1');
        dice3.style.filter = "hue-rotate(90deg)";
    }
}

function mark4() {
    numberClick4++;
    if (numberClick4 % 2 == 0) {
        console.log(numberClick4 + ' a 2');
        dice4.style.filter = "none";
    } else {
        console.log(numberClick4 + ' a 1');
        dice4.style.filter = "hue-rotate(90deg)";
    }
}

function mark5() {
    numberClick5++;
    if (numberClick5 % 2 == 0) {
        console.log(numberClick5 + ' a 2');
        dice5.style.filter = "none";
    } else {
        console.log(numberClick5 + ' a 1');
        dice5.style.filter = "hue-rotate(90deg)";
    }
}

function mark6() {
    numberClick6++;
    if (numberClick6 % 2 == 0) {
        console.log(numberClick6 + ' a 2');
        dice6.style.filter = "none";
    } else {
        console.log(numberClick6 + ' a 1');
        dice6.style.filter = "hue-rotate(90deg)";

    }
}

function score(){
    
}

function randomize() {
    for (i = 0; i < cube.length; i++) {
        let x = Math.ceil(Math.random() * 6);
        cube[i].src = 'img/kostka' + x + '.png';
    }
}
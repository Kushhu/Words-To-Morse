const body = document.getElementById("body");
const display = document.getElementById("morse");
const di = "0.1secBeep.mp3";
const da = "0.2secBeep.mp3";
var Time = 2;
var i;
var index = 0;
var char;
var myTimer;
var SoundState;
var conDiv;

var Alphabets = [
    ["a", 2, 0, 1, 5, 5, 5, 5],
    ["b", 4, 1, 0, 0, 0, 5, 5],
    ["c", 4, 1, 0, 1, 0, 5, 5],
    ["d", 3, 1, 0, 0, 5, 5, 5],
    ["e", 1, 0, 5, 5, 5, 5, 5],
    ["f", 4, 0, 0, 1, 0, 5, 5],
    ["g", 3, 1, 1, 0, 5, 5, 5],
    ["h", 4, 0, 0, 0, 0, 5, 5],
    ["i", 2, 0, 0, 5, 5, 5, 5],
    ["j", 4, 0, 1, 1, 1, 5, 5],
    ["k", 3, 1, 0, 1, 5, 5, 5],
    ["l", 4, 0, 1, 0, 0, 5, 5],
    ["m", 2, 1, 1, 5, 5, 5, 5],
    ["n", 2, 1, 0, 5, 5, 5, 5],
    ["o", 3, 1, 1, 1, 5, 5, 5],
    ["p", 4, 0, 1, 1, 0, 5, 5],
    ["q", 4, 1, 1, 0, 1, 5, 5],
    ["r", 3, 0, 1, 0, 5, 5, 5],
    ["s", 3, 0, 0, 0, 5, 5, 5],
    ["t", 1, 1, 5, 5, 5, 5, 5],
    ["u", 3, 0, 0, 1, 5, 5, 5],
    ["v", 4, 0, 0, 0, 1, 5, 5],
    ["w", 3, 0, 1, 1, 5, 5, 5],
    ["x", 4, 1, 0, 0, 1, 5, 5],
    ["y", 4, 1, 0, 1, 1, 5, 5],
    ["z", 4, 1, 1, 0, 0, 5, 5],

    ["A", 2, 0, 1, 5, 5, 5, 5],
    ["B", 4, 1, 0, 0, 0, 5, 5],
    ["C", 4, 1, 0, 1, 0, 5, 5],
    ["D", 3, 1, 0, 0, 5, 5, 5],
    ["E", 1, 0, 5, 5, 5, 5, 5],
    ["F", 4, 0, 0, 1, 0, 5, 5],
    ["G", 3, 1, 1, 0, 5, 5, 5],
    ["H", 4, 0, 0, 0, 0, 5, 5],
    ["I", 2, 0, 0, 5, 5, 5, 5],
    ["J", 4, 0, 1, 1, 1, 5, 5],
    ["K", 3, 1, 0, 1, 5, 5, 5],
    ["L", 4, 0, 1, 0, 0, 5, 5],
    ["M", 2, 1, 1, 5, 5, 5, 5],
    ["N", 2, 1, 0, 5, 5, 5, 5],
    ["O", 3, 1, 1, 1, 5, 5, 5],
    ["P", 4, 0, 1, 1, 0, 5, 5],
    ["Q", 4, 1, 1, 0, 1, 5, 5],
    ["R", 3, 0, 1, 0, 5, 5, 5],
    ["S", 3, 0, 0, 0, 5, 5, 5],
    ["T", 1, 1, 5, 5, 5, 5, 5],
    ["U", 3, 0, 0, 1, 5, 5, 5],
    ["V", 4, 0, 0, 0, 1, 5, 5],
    ["W", 3, 0, 1, 1, 5, 5, 5],
    ["X", 4, 1, 0, 0, 1, 5, 5],
    ["Y", 4, 1, 0, 1, 1, 5, 5],
    ["Z", 4, 1, 1, 0, 0, 5, 5],

    ["0", 5, 1, 1, 1, 1, 1, 5],
    ["1", 5, 0, 1, 1, 1, 1, 5],
    ["2", 5, 0, 0, 1, 1, 1, 5],
    ["3", 5, 0, 0, 0, 1, 1, 5],
    ["4", 5, 0, 0, 0, 0, 1, 5],
    ["5", 5, 0, 0, 0, 0, 0, 5],
    ["6", 5, 1, 0, 0, 0, 0, 5],
    ["7", 5, 1, 1, 0, 0, 0, 5],
    ["8", 5, 1, 1, 1, 0, 0, 5],
    ["9", 5, 1, 1, 1, 1, 0, 5],
    
    [" ", 6, 0, 1, 0, 1, 0, 1],
    [",", 6, 1, 1, 0, 0, 1, 1],
    ["?", 6, 0, 0, 1, 1, 0, 0],
    ["/", 6, 1, 0, 0, 1, 0, 5],
    ["@", 6, 0, 1, 1, 0, 1, 0]
];

function createContainer(){
    conDiv = document.createElement("div");
    conDiv.className = "word-container";
    display.appendChild(conDiv);
}

function CreateDi() {
    var j = document.createElement("audio");
    j.src = di;
    j.play();
    body.appendChild(j);

    var diDiv = document.createElement("div");
    diDiv.className = "di";
    conDiv.appendChild(diDiv);
}

function CreateDa() {
    var j = document.createElement("audio");
    j.src = da;
    j.play();
    body.appendChild(j);

    var daDiv = document.createElement("div");
    daDiv.className = "da";
    conDiv.appendChild(daDiv);

}

function checkRow() {
    
    for (i = 0; i < 67; i++) {
        if (char == Alphabets[i][0]) break;
    }
}

function GenerateSound() {
                
    if (Alphabets[i][Time] == 0) {
        CreateDi()
    }
    else if (Alphabets[i][Time] == 1) {
        CreateDa();
    }
                
    // console.log(Time + "-" + Alphabets[i][Time] + "-" + char + "-" + i + "-" + index);
     
    Time++;
    if (Alphabets[i][Time] == 5 || Time >= 8) {
        clearInterval(myTimer);
        Time = 2;
        SoundState = false;
        play();
    }
}

function play() {
    const txtbox = document.getElementById("txtbox").value;
    
    while((index < txtbox.length) && (!SoundState)) {
        
        SoundState = true;
        char = txtbox.charAt(index);
        createContainer();
        checkRow();
        myTimer = setInterval(GenerateSound, Alphabets[i][Time] == 0 ? 500 : 1000);
        index++;
    }

}

function clr() {
    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }
    document.getElementById('txtbox').value = '';
    index = 0;
    i = 0;
    Time = 2;
}

function clrmorse() {
    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }
    index = 0;
    i = 0;
    Time = 2;
}

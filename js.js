const body = document.getElementById("body");
const p = document.getElementById("morse");
const di = "0.1secBeep.mp3";
const da = "0.2secBeep.mp3";
var Time = 2;
var i;
var index = 0;
var char;
var myTimer;
var SoundState;

var Alphabets = [
    ["a", 2, 0, 1, 5, 5],
    ["b", 4, 1, 0, 0, 0],
    ["c", 4, 1, 0, 1, 0],
    ["d", 3, 1, 0, 0, 5],
    ["e", 1, 0, 5, 5, 5],
    ["f", 4, 0, 0, 1, 0],
    ["g", 3, 1, 1, 0, 5],
    ["h", 4, 0, 0, 0, 0],
    ["i", 2, 0, 0, 5, 5],
    ["j", 4, 0, 1, 1, 1],
    ["k", 3, 1, 0, 1, 5],
    ["l", 4, 0, 1, 0, 0],
    ["m", 2, 1, 1, 5, 5],
    ["n", 2, 1, 0, 5, 5],
    ["o", 3, 1, 1, 1, 5],
    ["p", 4, 0, 1, 1, 0],
    ["q", 4, 1, 1, 0, 1],
    ["r", 3, 0, 1, 0, 5],
    ["s", 3, 0, 0, 0, 5],
    ["t", 1, 1, 5, 5, 5],
    ["u", 3, 0, 0, 1, 5],
    ["v", 4, 0, 0, 0, 1],
    ["w", 3, 0, 1, 1, 5],
    ["x", 4, 1, 0, 0, 1],
    ["y", 4, 1, 0, 1, 1],
    ["z", 4, 1, 1, 0, 0],

    ["A", 2, 0, 1, 5, 5],
    ["B", 4, 1, 0, 0, 0],
    ["C", 4, 1, 0, 1, 0],
    ["D", 3, 1, 0, 0, 5],
    ["E", 1, 0, 5, 5, 5],
    ["F", 4, 0, 0, 1, 0],
    ["G", 3, 1, 1, 0, 5],
    ["H", 4, 0, 0, 0, 0],
    ["I", 2, 0, 0, 5, 5],
    ["J", 4, 0, 1, 1, 1],
    ["K", 3, 1, 0, 1, 5],
    ["L", 4, 0, 1, 0, 0],
    ["M", 2, 1, 1, 5, 5],
    ["N", 2, 1, 0, 5, 5],
    ["O", 3, 1, 1, 1, 5],
    ["P", 4, 0, 1, 1, 0],
    ["Q", 4, 1, 1, 0, 1],
    ["R", 3, 0, 1, 0, 5],
    ["S", 3, 0, 0, 0, 5],
    ["T", 1, 1, 5, 5, 5],
    ["U", 3, 0, 0, 1, 5],
    ["V", 4, 0, 0, 0, 1],
    ["W", 3, 0, 1, 1, 5],
    ["X", 4, 1, 0, 0, 1],
    ["Y", 4, 1, 0, 1, 1],
    ["Z", 4, 1, 1, 0, 0],

    ["0", 5, 1, 1, 1, 1, 1],
    ["1", 5, 0, 1, 1, 1, 1],
    ["2", 5, 0, 0, 1, 1, 1],
    ["3", 5, 0, 0, 0, 1, 1],
    ["4", 5, 0, 0, 0, 0, 1],
    ["5", 5, 0, 0, 0, 0, 0],
    ["6", 5, 1, 0, 0, 0, 0],
    ["7", 5, 1, 1, 0, 0, 0],
    ["8", 5, 1, 1, 1, 0, 0],
    ["9", 5, 1, 1, 1, 1, 0],
    
    [" ",6,0,1,0,1,0,1],
    [",",6,1,1,0,0,1,1],
    ["?",6,0,0,1,1,0,0],
    ["/",6,1,0,0,1,0,5],
    ["@",6,0,1,1,0,1,0]
];

function CreateDi() {
    var j = document.createElement("audio");
    j.src = di;
    j.play();
    body.appendChild(j);
}

function CreateDa() {
    var j = document.createElement("audio");
    j.src = da;
    j.play();
    body.appendChild(j);
}

function checkRow() {
    
    for (i = 0; i < 67; i++) {
        if (char == Alphabets[i][0]) break;
    }
}

function GenerateSound() {
                
    if (Alphabets[i][Time] == 0) {
        CreateDi()
        p.innerHTML += ". ";
    }
    else if (Alphabets[i][Time] == 1) {
        CreateDa();
        p.innerHTML += "- ";
    }
                
    // console.log(Time + "-" + Alphabets[i][Time] + "-" + char + "-" + i + "-" + index);
     
    Time++;
    if (Alphabets[i][Time] == 5 || Time >= 8) {
        clearInterval(myTimer);
        Time = 2;
        p.innerHTML += " || ";
        SoundState = false;
        play();
    }
}

function play() {
    const txtbox = document.getElementById("txtbox").value;
    
    while((index < txtbox.length) && (!SoundState)) {
        
        SoundState = true;
        char = txtbox.charAt(index);
        checkRow();
        myTimer = setInterval(GenerateSound, Alphabets[i][Time] == 0 ? 500 : 1000);
        console.log(index);
        index++;
    }

}
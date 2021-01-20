q_num = "";
input_box = "";
check_btn = "";
row = "";
function send(){
    num1 = document.getElementById("no1").value;
    num2 = document.getElementById("no2").value;
    console.log("Number 1 : " + num1);
    console.log("Number 2 : " + num2);
    input_box = "<br>Answer : <input type='number' id='input_check'>";
    check_btn = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = q_num + input_box + check_btn;
    document.getElementById("output_div").innerHTML = row;
    document.getElementById("no1").value = "";
    document.getElementById("no2").value = "";
}
player1_name = localStorage.getItem("Player1Name");
player2_name = localStorage.getItem("Player2Name");

player1_score = 0;
player2_score = 0;

document.getElementById("p1_name").innerHTML = player1_name + ":";
document.getElementById("p2_name").innerHTML = player2_name + ":";

document.getElementById("p1_score").innerHTML = player1_score;
document.getElementById("p2_score").innerHTML = player2_score;

document.getElementById("question_turn").innerHTML = "Question Turn - " + player1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player2_name;

function add(){
    actual = 0;
    num1 = document.getElementById("no1").value;
    num2 = document.getElementById("no2").value;
    q_num = "<h4>Q. " + num1 + "+" + num2 + "</h4>";
    actual = parseInt(num1) + parseInt(num2);
    console.log(actual);
}

function subtract(){
    actual = 0;
    num1 = document.getElementById("no1").value;
    num2 = document.getElementById("no2").value;
    q_num = "<h4>Q. " + num1 + "-" + num2 + "</h4>";
    actual = parseInt(num1) - parseInt(num2);
    console.log(actual);
}

function multiply(){
    actual = 0;
    num1 = document.getElementById("no1").value;
    num2 = document.getElementById("no2").value;
    q_num = "<h4>Q. " + num1 + "*" + num2 + "</h4>";
    actual = parseInt(num1) * parseInt(num2);
    console.log(actual);
}

function divide(){
    actual = 0;
    num1 = document.getElementById("no1").value;
    num2 = document.getElementById("no2").value;
    q_num = "<h4>Q. " + num1 + "/" + num2 + "</h4>";
    actual = parseInt(num1) / parseInt(num2);
    console.log(actual);
}
q_turn = "player1";
ans_turn = "player2";
actual = 0; 
function check(){
    get_answer = document.getElementById("input_check").value;

    if(get_answer == actual){
        if(ans_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("p1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("p2_score").innerHTML = player2_score;
        }
    }
    else {
        if(ans_turn == "player2"){
            player2_score = player2_score - 1;
            document.getElementById("p2_score").innerHTML = player2_score;
        }
        else {
            player1_score = player1_score - 1;
            document.getElementById("p1_score").innerHTML = player1_score;
        }
    }

    if(q_turn == "player1"){
        q_turn = "player2";
        document.getElementById("question_turn").innerHTML = "Question Turn - " + player2_name;
    }
    else {
        q_turn = "player1";
        document.getElementById("question_turn").innerHTML = "Question Turn - " + player1_name;
    }

    if (ans_turn == "player1"){
        ans_turn = "player2";
        document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player2_name;
    }
    else {
        ans_turn = "player1";
        document.getElementById("answer_turn").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output_div").innerHTML = "";
}
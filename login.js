function adduser(){
    window.location = "game_page.html";

    player1_name = document.getElementById("input1").value;
    player2_name = document.getElementById("input2").value;

    localStorage.setItem("Player1Name",player1_name);
    localStorage.setItem("Player2Name",player2_name);
}
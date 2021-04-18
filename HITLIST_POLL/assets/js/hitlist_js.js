/*----- Open Menu -----*/
function openNav() {
    var screen = window.screen.width;
    if(screen >= 350){
        document.getElementById("sideMenu").style.width = "250px";
    }else{
        document.getElementById("sideMenu").style.width = "125px";
    }
}

/*----- Close Menu -----*/
function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
}

/*----- Enable / Disable vote Button -----*/
function voteButton() {
    var song1Check = document.getElementById("song1Check");
    var song2Check = document.getElementById("song2Check");
    var song3Check = document.getElementById("song3Check");
    var song4Check = document.getElementById("song4Check");
    var song5Check = document.getElementById("song5Check");
    var song6Check = document.getElementById("song6Check");
    var song7Check = document.getElementById("song7Check");
    if (song1Check.checked == true || song2Check.checked == true || song3Check.checked == true){
        document.getElementById("voteSubmit").disabled = false;
    }else if(song4Check.checked == true || song5Check.checked == true || song6Check.checked == true){
        document.getElementById("voteSubmit").disabled = false;
    }else if(song7Check.checked == true){
        document.getElementById("voteSubmit").disabled = false;
    }else{
        document.getElementById("voteSubmit").disabled = true;
    }
}

/*----- Change BG of selected songs -----*/
function changeBackground() {
    var song1Check = document.getElementById("song1Check");
    var song2Check = document.getElementById("song2Check");
    var song3Check = document.getElementById("song3Check");
    var song4Check = document.getElementById("song4Check");
    var song5Check = document.getElementById("song5Check");
    var song6Check = document.getElementById("song6Check");
    var song7Check = document.getElementById("song7Check");

    if(song1Check.checked == true){
        document.getElementById("song1").style.backgroundColor = "#569429cb";
        document.getElementById("songOne").style.color = "#3a3a3a";
        document.getElementById("percentOne").style.color = "#f2f2f2";
        document.getElementById("voteSubmit").disabled = false;
    }else{
        document.getElementById("song1").style.backgroundColor = "#ffffff";
        document.getElementById("songOne").style.color = "#8d8d8d";
        document.getElementById("percentOne").style.color = "#8d8d8d";
        voteButton()
    }

    if (song2Check.checked == true) {
        document.getElementById("song2").style.backgroundColor = "#569429cb";
        document.getElementById("songTwo").style.color = "#3a3a3a";
        document.getElementById("percentTwo").style.color = "#f2f2f2";
        document.getElementById("voteSubmit").disabled = false;
    } else {
        document.getElementById("song2").style.backgroundColor = "#ffffff";
        document.getElementById("songTwo").style.color = "#8d8d8d";
        document.getElementById("percentTwo").style.color = "#8d8d8d";
        voteButton()
    }

    if (song3Check.checked == true) {
        document.getElementById("song3").style.backgroundColor = "#569429cb";
        document.getElementById("songThree").style.color = "#3a3a3a";
        document.getElementById("percentThree").style.color = "#f2f2f2";
        document.getElementById("voteSubmit").disabled = false;
    } else {
        document.getElementById("song3").style.backgroundColor = "#ffffff";
        document.getElementById("songThree").style.color = "#8d8d8d";
        document.getElementById("percentThree").style.color = "#8d8d8d";
        voteButton()
    }

    if (song4Check.checked == true) {
        document.getElementById("song4").style.backgroundColor = "#569429cb";
        document.getElementById("songFour").style.color = "#3a3a3a";
        document.getElementById("percentFour").style.color = "#f2f2f2";
        document.getElementById("voteSubmit").disabled = false;
    } else {
        document.getElementById("song4").style.backgroundColor = "#ffffff";
        document.getElementById("songFour").style.color = "#8d8d8d";
        document.getElementById("percentFour").style.color = "#8d8d8d";
        voteButton()
    }

    if (song5Check.checked == true) {
        document.getElementById("song5").style.backgroundColor = "#569429cb";
        document.getElementById("songFive").style.color = "#3a3a3a";
        document.getElementById("percentFive").style.color = "#f2f2f2";
        document.getElementById("voteSubmit").disabled = false;
    } else {
        document.getElementById("song5").style.backgroundColor = "#ffffff";
        document.getElementById("songFive").style.color = "#8d8d8d";
        document.getElementById("percentFive").style.color = "#8d8d8d";
        voteButton()
    }

    if (song6Check.checked == true) {
        document.getElementById("song6").style.backgroundColor = "#569429cb";
        document.getElementById("songSix").style.color = "#3a3a3a";
        document.getElementById("percentSix").style.color = "#f2f2f2";
        document.getElementById("voteSubmit").disabled = false;
    } else {
        document.getElementById("song6").style.backgroundColor = "#ffffff";
        document.getElementById("songSix").style.color = "#8d8d8d";
        document.getElementById("percentSix").style.color = "#8d8d8d";
        voteButton()
    }

    if (song7Check.checked == true) {
        document.getElementById("song7").style.backgroundColor = "#569429cb";
        document.getElementById("songSeven").style.color = "#3a3a3a";
        document.getElementById("percentSeven").style.color = "#f2f2f2";
        document.getElementById("voteSubmit").disabled = false;
    } else {
        document.getElementById("song7").style.backgroundColor = "#ffffff";
        document.getElementById("songSeven").style.color = "#8d8d8d";
        document.getElementById("percentSeven").style.color = "#8d8d8d";
        voteButton()
    }
}

/*----- Confirm Vote -----*/
function openConfirm() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("voteConfirmed").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
}

/*----- Cancel Vote -----*/
function cancelVote() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("voteConfirmed").style.display = "none";
    document.getElementById("confirmation").style.display = "none";
}

/*----- Vote Submitted -----*/
function submitVote() {
    document.getElementById("song1Check").checked = false;
    document.getElementById("song1").style.backgroundColor = "#ffffff";
    document.getElementById("songOne").style.color = "#8d8d8d";
    document.getElementById("percentOne").style.color = "#8d8d8d";

    document.getElementById("song2Check").checked = false;
    document.getElementById("song2").style.backgroundColor = "#ffffff";
    document.getElementById("songTwo").style.color = "#8d8d8d";
    document.getElementById("percentTwo").style.color = "#8d8d8d";

    document.getElementById("song3Check").checked = false;
    document.getElementById("song3").style.backgroundColor = "#ffffff";
    document.getElementById("songThree").style.color = "#8d8d8d";
    document.getElementById("percentThree").style.color = "#8d8d8d";

    document.getElementById("song4Check").checked = false;
    document.getElementById("song4").style.backgroundColor = "#ffffff";
    document.getElementById("songFour").style.color = "#8d8d8d";
    document.getElementById("percentFour").style.color = "#8d8d8d";

    document.getElementById("song5Check").checked = false;
    document.getElementById("song5").style.backgroundColor = "#ffffff";
    document.getElementById("songFive").style.color = "#8d8d8d";
    document.getElementById("percentFive").style.color = "#8d8d8d";

    document.getElementById("song6Check").checked = false;
    document.getElementById("song6").style.backgroundColor = "#ffffff";
    document.getElementById("songSix").style.color = "#8d8d8d";
    document.getElementById("percentSix").style.color = "#8d8d8d";

    document.getElementById("song7Check").checked = false;
    document.getElementById("song7").style.backgroundColor = "#ffffff";
    document.getElementById("songSeven").style.color = "#8d8d8d";
    document.getElementById("percentSeven").style.color = "#8d8d8d";

    document.getElementById("confirmation").style.display = "none";
    document.getElementById("voteConfirmed").style.display = "block";
}

/*----- Close Overlay -----*/
function closeConfirm() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("voteConfirmed").style.display = "none";
    document.getElementById("confirmation").style.display = "none";
}

/*----- Open selected Tab -----*/
function openTab(evt, tabName) {
    if(tabName == 'Live'){
        inactive_content = document.getElementById("vote");
        inactive_content.style.display = "none";
        inactive_tab = document.getElementById("voteTab");
        inactive_tab.className = "inactive";

        active_content = document.getElementById("live");
        active_content.style.display = "block";
        active_tab = document.getElementById("liveTab");
        active_tab.className = "active";
        evt.currentTarget.className += " active";
    }else if (tabName == 'Vote') {
        inactive_content = document.getElementById("live");
        inactive_content.style.display = "none";
        inactive_tab = document.getElementById("liveTab");
        inactive_tab.className = "inactive";

        active_content = document.getElementById("vote");
        active_content.style.display = "block";
        active_tab = document.getElementById("voteTab");
        active_tab.className = "active";
        evt.currentTarget.className += " active";
    }
}
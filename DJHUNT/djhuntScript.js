/*----- Open Menu -----*/
function openNav() {
    document.getElementById("sideMenu").style.width = "250px";
}

/*----- Close Menu -----*/
function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
}

/*----- Change BG of selected songs -----*/
function changeBackground() {
    var song1Check = document.getElementById("song1Check");
    if(song1Check.checked == true){
        document.getElementById("song1").style.backgroundColor = "#569429cb";
        document.getElementById("songOne").style.color = "#3a3a3a";
    }else{
        document.getElementById("song1").style.backgroundColor = "#ffffff";
        document.getElementById("songOne").style.color = "#8d8d8d";
    }

    var song2Check = document.getElementById("song2Check");
    if (song2Check.checked == true) {
        document.getElementById("song2").style.backgroundColor = "#569429cb";
        document.getElementById("songTwo").style.color = "#3a3a3a";
    } else {
        document.getElementById("song2").style.backgroundColor = "#ffffff";
        document.getElementById("songTwo").style.color = "#8d8d8d";
    }

    var song3Check = document.getElementById("song3Check");
    if (song3Check.checked == true) {
        document.getElementById("song3").style.backgroundColor = "#569429cb";
        document.getElementById("songThree").style.color = "#3a3a3a";
    } else {
        document.getElementById("song3").style.backgroundColor = "#ffffff";
        document.getElementById("songThree").style.color = "#8d8d8d";
    }

    var song4Check = document.getElementById("song4Check");
    if (song4Check.checked == true) {
        document.getElementById("song4").style.backgroundColor = "#569429cb";
        document.getElementById("songFour").style.color = "#3a3a3a";
    } else {
        document.getElementById("song4").style.backgroundColor = "#ffffff";
        document.getElementById("songFour").style.color = "#8d8d8d";
    }

    var song5Check = document.getElementById("song5Check");
    if (song5Check.checked == true) {
        document.getElementById("song5").style.backgroundColor = "#569429cb";
        document.getElementById("songFive").style.color = "#3a3a3a";
    } else {
        document.getElementById("song5").style.backgroundColor = "#ffffff";
        document.getElementById("songFive").style.color = "#8d8d8d";
    }

    var song6Check = document.getElementById("song6Check");
    if (song6Check.checked == true) {
        document.getElementById("song6").style.backgroundColor = "#569429cb";
        document.getElementById("songSix").style.color = "#3a3a3a";
    } else {
        document.getElementById("song6").style.backgroundColor = "#ffffff";
        document.getElementById("songSix").style.color = "#8d8d8d";
    }

    var song7Check = document.getElementById("song7Check");
    if (song7Check.checked == true) {
        document.getElementById("song7").style.backgroundColor = "#569429cb";
        document.getElementById("songSeven").style.color = "#3a3a3a";
    } else {
        document.getElementById("song7").style.backgroundColor = "#ffffff";
        document.getElementById("songSeven").style.color = "#8d8d8d";
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

    document.getElementById("song2Check").checked = false;
    document.getElementById("song2").style.backgroundColor = "#ffffff";
    document.getElementById("songTwo").style.color = "#8d8d8d";

    document.getElementById("song3Check").checked = false;
    document.getElementById("song3").style.backgroundColor = "#ffffff";
    document.getElementById("songThree").style.color = "#8d8d8d";

    document.getElementById("song4Check").checked = false;
    document.getElementById("song4").style.backgroundColor = "#ffffff";
    document.getElementById("songFour").style.color = "#8d8d8d";

    document.getElementById("song5Check").checked = false;
    document.getElementById("song5").style.backgroundColor = "#ffffff";
    document.getElementById("songFive").style.color = "#8d8d8d";

    document.getElementById("song6Check").checked = false;
    document.getElementById("song6").style.backgroundColor = "#ffffff";
    document.getElementById("songSix").style.color = "#8d8d8d";

    document.getElementById("song7Check").checked = false;
    document.getElementById("song7").style.backgroundColor = "#ffffff";
    document.getElementById("songSeven").style.color = "#8d8d8d";

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
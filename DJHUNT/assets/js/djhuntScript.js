/*----- Open Menu -----*/
function openNav() {
    document.getElementById("sideMenu").style.width = "250px";
}

/*----- Close Menu -----*/
function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
}

/*----- Confirm Vote -----*/
function openConfirm() {
    document.getElementById("vote").style.display = "none";
    document.getElementById("djvote").style.display = "block";
    document.getElementById("confirmation").style.display = "block";
    document.getElementById("voteSubmit").type = "hidden";

    var voteDJ1 = document.getElementById("checkbox1");
    var voteDJ2 = document.getElementById("checkbox2");
    var voteDJ3 = document.getElementById("checkbox3");
    var voteDJ4 = document.getElementById("checkbox4");
    var voteDJ5 = document.getElementById("checkbox5");
    var voteDJ6 = document.getElementById("checkbox6");
    var voteDJ7 = document.getElementById("checkbox7");
    var voteDJ8 = document.getElementById("checkbox8");

    if (voteDJ1.checked == true) {
        document.getElementById("dj1").style.display = "block";
    } else {
        document.getElementById("dj1").style.display = "none";
    }

    if (voteDJ2.checked == true) {
        document.getElementById("dj2").style.display = "block";
    } else {
        document.getElementById("dj2").style.display = "none";
    }

    if (voteDJ3.checked == true) {
        document.getElementById("dj3").style.display = "block";
    } else {
        document.getElementById("dj3").style.display = "none";
    }

    if (voteDJ4.checked == true) {
        document.getElementById("dj4").style.display = "block";
    } else {
        document.getElementById("dj4").style.display = "none";
    }

    if (voteDJ5.checked == true) {
        document.getElementById("dj5").style.display = "block";
    } else {
        document.getElementById("dj5").style.display = "none";
    }

    if (voteDJ6.checked == true) {
        document.getElementById("dj6").style.display = "block";
    } else {
        document.getElementById("dj6").style.display = "none";
    }

    if (voteDJ7.checked == true) {
        document.getElementById("dj7").style.display = "block";
    } else {
        document.getElementById("dj7").style.display = "none";
    }

    if (voteDJ8.checked == true) {
        document.getElementById("dj8").style.display = "block";
    } else {
        document.getElementById("dj8").style.display = "none";
    }
}

/*----- Submit Vote -----*/
function submitVote(){
    document.getElementById("vote").style.display = "none";
    document.getElementById("djvote").style.display = "none";
    document.getElementById("confirmation").style.display = "none";
    document.getElementById("voteSubmitted").style.display = "block";
    document.getElementById("voteTab").style.display = "none";
    document.getElementById("liveTab").style.display = "none";
    document.body.style.background = '#aad68a';
    document.body.style.background = "linear-gradient(to bottom, #f1faeb, #569429)";

    document.getElementById("checkbox1").checked = false;
    document.getElementById("checkbox2").checked = false;
    document.getElementById("checkbox3").checked = false;
    document.getElementById("checkbox4").checked = false;
    document.getElementById("checkbox5").checked = false;
    document.getElementById("checkbox6").checked = false;
    document.getElementById("checkbox7").checked = false;
    document.getElementById("checkbox8").checked = false;
}

/*----- Cancel Vote -----*/
function cancelVote() {
    document.getElementById("djvote").style.display = "none";
    document.getElementById("voteSubmitted").style.display = "none";
    document.getElementById("confirmation").style.display = "none";
    document.getElementById("vote").style.display = "grid";
    document.getElementById("voteSubmit").type = "button";
    document.body.style.background = '#ffffff';
}

/*----- Close Overlay -----*/
function closeConfirm() {
    document.getElementById("djvote").style.display = "none";
    document.getElementById("voteSubmitted").style.display = "none";
    document.getElementById("confirmation").style.display = "none";
    document.getElementById("vote").style.display = "grid";
    document.getElementById("voteSubmit").type = "button";
    document.getElementById("voteTab").style.display = "";
    document.getElementById("liveTab").style.display = "";
    document.body.style.background = '#ffffff';
}

/*----- Open selected Tab -----*/
function openTab(evt, tabName) {
    document.body.style.background = '#ffffff';
    if(tabName == 'Live'){
        inactive_content = document.getElementById("votingTab");
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

        active_content = document.getElementById("votingTab");
        active_content.style.display = "block";
        active_tab = document.getElementById("voteTab");
        active_tab.className = "active";
        evt.currentTarget.className += " active";
    }
}
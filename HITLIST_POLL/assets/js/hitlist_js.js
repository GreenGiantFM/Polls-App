/*----- Open selected Tab -----*/
function openTab(evt, tabName) {
    if (tabName == 'Live') {
        inactive_content = document.getElementById("vote");
        inactive_content.style.display = "none";
        inactive_tab = document.getElementById("voteTab");
        inactive_tab.className = "inactive";

        active_content = document.getElementById("live");
        active_content.style.display = "block";
        active_tab = document.getElementById("liveTab");
        active_tab.className = "active";
        evt.currentTarget.className += " active";
    } else if (tabName == 'Vote') {
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
        document.getElementById("voteSubmit").style.cursor = "pointer";
    }else if(song4Check.checked == true || song5Check.checked == true || song6Check.checked == true){
        document.getElementById("voteSubmit").disabled = false;
        document.getElementById("voteSubmit").style.cursor = "pointer";
    }else if(song7Check.checked == true){
        document.getElementById("voteSubmit").disabled = false;
        document.getElementById("voteSubmit").style.cursor = "pointer";
    }else{
        document.getElementById("voteSubmit").disabled = true;
        document.getElementById("voteSubmit").style.cursor = "not-allowed";
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
    document.getElementById("voteSubmit").disabled = true;
    document.getElementById("voteSubmit").style.cursor = "not-allowed";
}

/*----- Close Overlay -----*/
function closeConfirm() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("voteConfirmed").style.display = "none";
    document.getElementById("confirmation").style.display = "none";
}

/*----- Countdown Timer -----*/
/* June 1, 2021 20:30:00 */
/* April 20, 2021 11:11:00 */
var votingPeriod = new Date("June 1, 2021 20:30:00").getTime();
var timer = setInterval(function () {

    var now = new Date().getTime();
    var distance = votingPeriod - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var final_days;
    if (days < 10) {
        final_days = "0" + days;
    } else {
        final_days = days;
    }

    var hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var final_hrs;
    if (hrs < 10) {
        final_hrs = "0" + hrs;
    } else {
        final_hrs = hrs;
    }

    var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var final_mins;
    if (mins < 10) {
        final_mins = "0" + mins;
    } else {
        final_mins = mins;
    }

    var secs = Math.floor((distance % (1000 * 60)) / 1000);
    var final_secs;
    if (secs < 10) {
        final_secs = "0" + secs;
    } else {
        final_secs = secs;
    }

    document.getElementById("hitlist_time").innerHTML = final_days + ":" + final_hrs + ":" + final_mins + ":" + final_secs;

    if ((days == 0 && hrs == 0 && mins == 0 && secs == 0) || distance < 0) {
        clearInterval(timer);
        document.getElementById("hitlist_time").innerHTML = "00:00:00:00";
        document.getElementById("hitlist_time").style.color = "#ff0000";
        document.getElementById("hitlist_end").style.display = "flex";
    } else {
        document.getElementById("hitlist_end").style.display = "none";
    }
}, 1000);

/*----- Vote Ended Message -----*/
$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 25) {
        $('#hitlist_end').stop().animate({ top: "0" }, 25);
    }
    else {
        if (window.innerWidth >= 1024) {
            $('#hitlist_end').stop().animate({ top: "350px" }, 100);
        } else if (window.innerWidth >= 350 && window.innerWidth <= 1023) {
            $('#hitlist_end').stop().animate({ top: "175px" }, 100);
        } else if (window.innerWidth <= 349) {
            $('#hitlist_end').stop().animate({ top: "140px" }, 100);
        }
    }
});
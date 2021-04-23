/*----- Open selected Tab -----*/
function openTab(evt, tabName) {
    document.body.style.background = '#ffffff';
    if (tabName == 'Live') {
        inactive_content = document.getElementById("votingTab");
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

        active_content = document.getElementById("votingTab");
        active_content.style.display = "block";
        active_tab = document.getElementById("voteTab");
        active_tab.className = "active";
        evt.currentTarget.className += " active";
    }
}

/*----- Open DJ Page -----*/
function openDJPage(djNum){
    document.getElementById('djPage-mobile').style.display = "";
    document.getElementById('djPage-desk').style.display = "";

    var mobile = document.getElementById("djPage-mobile");
    mobile.classList.add("chosen-DJPage-mobile");
    var desk = document.getElementById("djPage-desk");
    desk.classList.add("chosen-DJPage-desk");

    if (djNum == 1){
        document.getElementById('dj-image-mobile').src = "assets/img/DJs/d1.jpg";
        document.getElementById('dj-image-desk').src = "assets/img/DJs/d1.jpg";
        document.getElementById('djName-mobile').innerHTML = "DJ Cora";
        document.getElementById('djName-desk').innerHTML = "DJ Cora";
        document.getElementById('fullName-mobile').innerHTML = "Alexa Coronel";
        document.getElementById('fullName').innerHTML = "Alexa Coronel";
        document.getElementById('djVideo-mobile').src = "https://www.youtube.com/embed/wm84dnRjpdk";
        document.getElementById('djVideo-desk').src = "https://www.youtube.com/embed/wm84dnRjpdk";
        document.getElementById('djStinger-mobile').src = "assets/audio/1.mp3";
        document.getElementById('djStinger-desk').src = "assets/audio/1.mp3";
        document.getElementById('djAudio-mobile').load();
        document.getElementById('djAudio-desk').load();
        document.getElementById('djPlaylist-mobile').src = "https://open.spotify.com/embed/playlist/5LAUkCQ56Y8ytI7U9kVtGB";
        document.getElementById('djPlaylist-desk').src = "https://open.spotify.com/embed/playlist/5LAUkCQ56Y8ytI7U9kVtGB";
    } else if (djNum == 2) {
        document.getElementById('dj-image-mobile').src = "assets/img/DJs/d2.jpg";
        document.getElementById('dj-image-desk').src = "assets/img/DJs/d2.jpg";
        document.getElementById('djName-mobile').innerHTML = "DJ Javi";
        document.getElementById('djName-desk').innerHTML = "DJ Javi";
        document.getElementById('fullName-mobile').innerHTML = "Juan Xavier Lazaro Campos";
        document.getElementById('fullName').innerHTML = "Juan Xavier Lazaro Campos";
        document.getElementById('djVideo-mobile').src = "https://www.youtube.com/embed/Fh8lXFfDltY";
        document.getElementById('djVideo-desk').src = "https://www.youtube.com/embed/Fh8lXFfDltY";
        document.getElementById('djStinger-mobile').src = "assets/audio/2.mp3";
        document.getElementById('djStinger-desk').src = "assets/audio/2.mp3";
        document.getElementById('djAudio-mobile').load();
        document.getElementById('djAudio-desk').load();
        document.getElementById('djPlaylist-mobile').src = "https://open.spotify.com/embed/playlist/2Pt1kSsiF9sdJqsfRqPbTO";
        document.getElementById('djPlaylist-desk').src = "https://open.spotify.com/embed/playlist/2Pt1kSsiF9sdJqsfRqPbTO";
    } else if (djNum == 3) {
        document.getElementById('dj-image-mobile').src = "assets/img/DJs/d3.jpg";
        document.getElementById('dj-image-desk').src = "assets/img/DJs/d3.jpg";
        document.getElementById('djName-mobile').innerHTML = "DJ Joaquin";
        document.getElementById('djName-desk').innerHTML = "DJ Joaquin";
        document.getElementById('fullName-mobile').innerHTML = "Joaquin Ng";
        document.getElementById('fullName').innerHTML = "Joaquin Ng";
        document.getElementById('djVideo-mobile').src = "https://www.youtube.com/embed/M8eRggVjh44";
        document.getElementById('djVideo-desk').src = "https://www.youtube.com/embed/M8eRggVjh44";
        document.getElementById('djStinger-mobile').src = "assets/audio/3.mp3";
        document.getElementById('djStinger-desk').src = "assets/audio/3.mp3";
        document.getElementById('djAudio-mobile').load();
        document.getElementById('djAudio-desk').load();
        document.getElementById('djPlaylist-mobile').src = "https://open.spotify.com/embed/playlist/49B8jNu7DtVqbP3LR9aNtK";
        document.getElementById('djPlaylist-desk').src = "https://open.spotify.com/embed/playlist/49B8jNu7DtVqbP3LR9aNtK";
    } else if (djNum == 4) {
        document.getElementById('dj-image-mobile').src = "assets/img/DJs/d4.jpg";
        document.getElementById('dj-image-desk').src = "assets/img/DJs/d4.jpg";
        document.getElementById('djName-mobile').innerHTML = "DJ Macoy";
        document.getElementById('djName-desk').innerHTML = "DJ Macoy";
        document.getElementById('fullName-mobile').innerHTML = "Marco Miguel Galang";
        document.getElementById('fullName').innerHTML = "Marco Miguel Galang";
        document.getElementById('djVideo-mobile').src = "https://www.youtube.com/embed/yuWk8Wni4Ls";
        document.getElementById('djVideo-desk').src = "https://www.youtube.com/embed/yuWk8Wni4Ls";
        document.getElementById('djStinger-mobile').src = "assets/audio/4.mp3";
        document.getElementById('djStinger-desk').src = "assets/audio/4.mp3";
        document.getElementById('djAudio-mobile').load();
        document.getElementById('djAudio-desk').load();
        document.getElementById('djPlaylist-mobile').src = "https://open.spotify.com/embed/playlist/0vppnEIveKTLMQWmxL4521";
        document.getElementById('djPlaylist-desk').src = "https://open.spotify.com/embed/playlist/0vppnEIveKTLMQWmxL4521";
    } else if (djNum == 5) {
        document.getElementById('dj-image-mobile').src = "assets/img/DJs/d5.jpg";
        document.getElementById('dj-image-desk').src = "assets/img/DJs/d5.jpg";
        document.getElementById('djName-mobile').innerHTML = "DJ Michael";
        document.getElementById('djName-desk').innerHTML = "DJ Michael";
        document.getElementById('fullName-mobile').innerHTML = "Michael Laset";
        document.getElementById('fullName').innerHTML = "Michael Laset";
        document.getElementById('djVideo-mobile').src = "https://www.youtube.com/embed/eZVntIuRbKY";
        document.getElementById('djVideo-desk').src = "https://www.youtube.com/embed/eZVntIuRbKY";
        document.getElementById('djStinger-mobile').src = "assets/audio/5.mp3";
        document.getElementById('djStinger-desk').src = "assets/audio/5.mp3";
        document.getElementById('djAudio-mobile').load();
        document.getElementById('djAudio-desk').load();
        document.getElementById('djPlaylist-mobile').src = "https://open.spotify.com/embed/playlist/31QPGd67LfJ3xuicInywrN";
        document.getElementById('djPlaylist-desk').src = "https://open.spotify.com/embed/playlist/31QPGd67LfJ3xuicInywrN";
    } else if (djNum == 6) {
        document.getElementById('dj-image-mobile').src = "assets/img/DJs/d6.jpg";
        document.getElementById('dj-image-desk').src = "assets/img/DJs/d6.jpg";
        document.getElementById('djName-mobile').innerHTML = "DJ Fonz";
        document.getElementById('djName-desk').innerHTML = "DJ Fonz";
        document.getElementById('fullName-mobile').innerHTML = "Hans Sanciano Macatangay";
        document.getElementById('fullName').innerHTML = "Hans Sanciano Macatangay";
        document.getElementById('djVideo-mobile').src = "https://www.youtube.com/embed/C3IyJMbuj5Y";
        document.getElementById('djVideo-desk').src = "https://www.youtube.com/embed/C3IyJMbuj5Y";
        document.getElementById('djStinger-mobile').src = "assets/audio/6.mp3";
        document.getElementById('djStinger-desk').src = "assets/audio/6.mp3";
        document.getElementById('djAudio-mobile').load();
        document.getElementById('djAudio-desk').load();
        document.getElementById('djPlaylist-mobile').src = "https://open.spotify.com/embed/playlist/1GQQh6nwvFxmlZTh25tGtr";
        document.getElementById('djPlaylist-desk').src = "https://open.spotify.com/embed/playlist/1GQQh6nwvFxmlZTh25tGtr";
    } else if (djNum == 7) {
        document.getElementById('dj-image-mobile').src = "assets/img/DJs/d7.jpg";
        document.getElementById('dj-image-desk').src = "assets/img/DJs/d7.jpg";
        document.getElementById('djName-mobile').innerHTML = "DJ Robby";
        document.getElementById('djName-desk').innerHTML = "DJ Robby";
        document.getElementById('fullName-mobile').innerHTML = "Rob Dolina";
        document.getElementById('fullName').innerHTML = "Rob Dolina";
        document.getElementById('djVideo-mobile').src = "https://www.youtube.com/embed/AWoOmF_EM9c";
        document.getElementById('djVideo-desk').src = "https://www.youtube.com/embed/AWoOmF_EM9c";
        document.getElementById('djStinger-mobile').src = "assets/audio/7.mp3";
        document.getElementById('djStinger-desk').src = "assets/audio/7.mp3";
        document.getElementById('djAudio-mobile').load();
        document.getElementById('djAudio-desk').load();
        document.getElementById('djPlaylist-mobile').src = "https://open.spotify.com/embed/playlist/3sysWImTc0zKri7dxpNzlH";
        document.getElementById('djPlaylist-desk').src = "https://open.spotify.com/embed/playlist/3sysWImTc0zKri7dxpNzlH";
    } else if (djNum == 8) {
        document.getElementById('dj-image-mobile').src = "assets/img/DJs/d8.jpg";
        document.getElementById('dj-image-desk').src = "assets/img/DJs/d8.jpg";
        document.getElementById('djName-mobile').innerHTML = "DJ Tony";
        document.getElementById('djName-desk').innerHTML = "DJ Tony";
        document.getElementById('fullName-mobile').innerHTML = "Miguel Antonio Lindog";
        document.getElementById('fullName').innerHTML = "Miguel Antonio Lindog";
        document.getElementById('djVideo-mobile').src = "https://www.youtube.com/embed/bPT_chlLmwU";
        document.getElementById('djVideo-desk').src = "https://www.youtube.com/embed/bPT_chlLmwU";
        document.getElementById('djStinger-mobile').src = "assets/audio/8.mp3";
        document.getElementById('djStinger-desk').src = "assets/audio/8.mp3";
        document.getElementById('djAudio-mobile').load();
        document.getElementById('djAudio-desk').load();
        document.getElementById('djPlaylist-mobile').src = "https://open.spotify.com/embed/playlist/6cjleuN86KNkvwG18k1fMU";
        document.getElementById('djPlaylist-desk').src = "https://open.spotify.com/embed/playlist/6cjleuN86KNkvwG18k1fMU";
    }
}

/*----- Close DJ Page -----*/
function closeDJPage() {
    document.getElementById('djPage-mobile').style.display = "none";
    document.getElementById("djPage-desk").style.display = "none";

    var mobile = document.getElementById("djPage-mobile");
    if (mobile.classList.contains("chosen-DJPage-mobile")) {
        mobile.classList.remove("chosen-DJPage-mobile");
    }
    var desk = document.getElementById("djPage-desk");
    if (desk.classList.contains("chosen-DJPage-desk")) {
        desk.classList.remove("chosen-DJPage-desk");
    }
}

/*----- Confirm Vote -----*/
function openConfirm() {
    document.getElementById("vote").style.display = "none";
    document.getElementById("djvote").style.display = "block";
    document.getElementById("confirmation").style.display = "block";
    document.getElementById("huntSubmit").type = "hidden";

    var voteDJ1 = document.getElementById("dj1");
    var voteDJ2 = document.getElementById("dj2");
    var voteDJ3 = document.getElementById("dj3");
    var voteDJ4 = document.getElementById("dj4");
    var voteDJ5 = document.getElementById("dj5");
    var voteDJ6 = document.getElementById("dj6");
    var voteDJ7 = document.getElementById("dj7");
    var voteDJ8 = document.getElementById("dj8");

    if (voteDJ1.checked == true) {
        document.getElementById("votedDJ1_desk").style.display = "";
        document.getElementById("votedDJ1").style.display = "";

        var desk = document.getElementById("votedDJ1_desk");
        desk.classList.add("chosen_desk");
        var mobile = document.getElementById("votedDJ1");
        mobile.classList.add("chosen_mobile");
    } else {
        document.getElementById("votedDJ1_desk").style.display = "none";
        document.getElementById("votedDJ1").style.display = "none";

        var desk = document.getElementById("votedDJ1_desk");
        if (desk.classList.contains("chosen_desk")){
            desk.classList.remove("chosen_desk");
        }
        var mobile = document.getElementById("votedDJ1");
        if (mobile.classList.contains("chosen_mobile")) {
            mobile.classList.remove("chosen_mobile");
        }
    }

    if (voteDJ2.checked == true) {
        document.getElementById("votedDJ2_desk").style.display = "";
        document.getElementById("votedDJ2").style.display = "";

        var desk = document.getElementById("votedDJ2_desk");
        desk.classList.add("chosen_desk");
        var mobile = document.getElementById("votedDJ2");
        mobile.classList.add("chosen_mobile");
    } else {
        document.getElementById("votedDJ2_desk").style.display = "none";
        document.getElementById("votedDJ2").style.display = "none";

        var desk = document.getElementById("votedDJ2_desk");
        if (desk.classList.contains("chosen_desk")) {
            desk.classList.remove("chosen_desk");
        }
        var mobile = document.getElementById("votedDJ2");
        if (mobile.classList.contains("chosen_mobile")) {
            mobile.classList.remove("chosen_mobile");
        }
    }

    if (voteDJ3.checked == true) {
        document.getElementById("votedDJ3_desk").style.display = "";
        document.getElementById("votedDJ3").style.display = "";

        var desk = document.getElementById("votedDJ3_desk");
        desk.classList.add("chosen_desk");
        var mobile = document.getElementById("votedDJ3");
        mobile.classList.add("chosen_mobile");
    } else {
        document.getElementById("votedDJ3_desk").style.display = "none";
        document.getElementById("votedDJ3").style.display = "none";

        var desk = document.getElementById("votedDJ3_desk");
        if (desk.classList.contains("chosen_desk")) {
            desk.classList.remove("chosen_desk");
        }
        var mobile = document.getElementById("votedDJ3");
        if (mobile.classList.contains("chosen_mobile")) {
            mobile.classList.remove("chosen_mobile");
        }
    }

    if (voteDJ4.checked == true) {
        document.getElementById("votedDJ4_desk").style.display = "";
        document.getElementById("votedDJ4").style.display = "";

        var desk = document.getElementById("votedDJ4_desk");
        desk.classList.add("chosen_desk");
        var mobile = document.getElementById("votedDJ4");
        mobile.classList.add("chosen_mobile");
    } else {
        document.getElementById("votedDJ4_desk").style.display = "none";
        document.getElementById("votedDJ4").style.display = "none";

        var desk = document.getElementById("votedDJ4_desk");
        if (desk.classList.contains("chosen_desk")) {
            desk.classList.remove("chosen_desk");
        }
        var mobile = document.getElementById("votedDJ4");
        if (mobile.classList.contains("chosen_mobile")) {
            mobile.classList.remove("chosen_mobile");
        }
    }

    if (voteDJ5.checked == true) {
        document.getElementById("votedDJ5_desk").style.display = "";
        document.getElementById("votedDJ5").style.display = "";

        var desk = document.getElementById("votedDJ5_desk");
        desk.classList.add("chosen_desk");
        var mobile = document.getElementById("votedDJ5");
        mobile.classList.add("chosen_mobile");
    } else {
        document.getElementById("votedDJ5_desk").style.display = "none";
        document.getElementById("votedDJ5").style.display = "none";

        var desk = document.getElementById("votedDJ5_desk");
        if (desk.classList.contains("chosen_desk")) {
            desk.classList.remove("chosen_desk");
        }
        var mobile = document.getElementById("votedDJ5");
        if (mobile.classList.contains("chosen_mobile")) {
            mobile.classList.remove("chosen_mobile");
        }
    }

    if (voteDJ6.checked == true) {
        document.getElementById("votedDJ6_desk").style.display = "";
        document.getElementById("votedDJ6").style.display = "";

        var desk = document.getElementById("votedDJ6_desk");
        desk.classList.add("chosen_desk");
        var mobile = document.getElementById("votedDJ6");
        mobile.classList.add("chosen_mobile");
    } else {
        document.getElementById("votedDJ6_desk").style.display = "none";
        document.getElementById("votedDJ6").style.display = "none";

        var desk = document.getElementById("votedDJ6_desk");
        if (desk.classList.contains("chosen_desk")) {
            desk.classList.remove("chosen_desk");
        }
        var mobile = document.getElementById("votedDJ6");
        if (mobile.classList.contains("chosen_mobile")) {
            mobile.classList.remove("chosen_mobile");
        }
    }

    if (voteDJ7.checked == true) {
        document.getElementById("votedDJ7_desk").style.display = "";
        document.getElementById("votedDJ7").style.display = "";

        var desk = document.getElementById("votedDJ7_desk");
        desk.classList.add("chosen_desk");
        var mobile = document.getElementById("votedDJ7");
        mobile.classList.add("chosen_mobile");
    } else {
        document.getElementById("votedDJ7_desk").style.display = "none";
        document.getElementById("votedDJ7").style.display = "none";

        var desk = document.getElementById("votedDJ7_desk");
        if (desk.classList.contains("chosen_desk")) {
            desk.classList.remove("chosen_desk");
        }
        var mobile = document.getElementById("votedDJ7");
        if (mobile.classList.contains("chosen_mobile")) {
            mobile.classList.remove("chosen_mobile");
        }
    }

    if (voteDJ8.checked == true) {
        document.getElementById("votedDJ8_desk").style.display = "";
        document.getElementById("votedDJ8").style.display = "";

        var desk = document.getElementById("votedDJ8_desk");
        desk.classList.add("chosen_desk");
        var mobile = document.getElementById("votedDJ8");
        mobile.classList.add("chosen_mobile");
    } else {
        document.getElementById("votedDJ8_desk").style.display = "none";
        document.getElementById("votedDJ8").style.display = "none";

        var desk = document.getElementById("votedDJ8_desk");
        if (desk.classList.contains("chosen_desk")) {
            desk.classList.remove("chosen_desk");
        }
        var mobile = document.getElementById("votedDJ8");
        if (mobile.classList.contains("chosen_mobile")) {
            mobile.classList.remove("chosen_mobile");
        }
    }
}

/*----- Enable / Disable vote Button -----*/
function huntButton() {
    var dj1 = document.getElementById("dj1");
    var dj2 = document.getElementById("dj2");
    var dj3 = document.getElementById("dj3");
    var dj4 = document.getElementById("dj4");
    var dj5 = document.getElementById("dj5");
    var dj6 = document.getElementById("dj6");
    var dj7 = document.getElementById("dj7");
    var dj8 = document.getElementById("dj8");
    if (dj1.checked == true || dj2.checked == true || dj3.checked == true || dj4.checked == true) {
        document.getElementById("huntSubmit").disabled = false;
        document.getElementById("huntSubmit").style.cursor = "pointer";
    } else if (dj5.checked == true || dj6.checked == true || dj7.checked == true || dj8.checked == true) {
        document.getElementById("huntSubmit").disabled = false;
        document.getElementById("huntSubmit").style.cursor = "pointer";
    } else {
        document.getElementById("huntSubmit").disabled = true;
        document.getElementById("huntSubmit").style.cursor = "not-allowed";
    }
}

/*----- Submit Vote -----*/
function submitVote(){
    document.getElementById("vote").style.display = "none";
    document.getElementById("djvote").style.display = "none";
    document.getElementById("confirmation").style.display = "none";
    document.getElementById("voteSubmitted").style.display = "grid";
    document.getElementById("voteTab").style.display = "none";
    document.getElementById("liveTab").style.display = "none";
    document.body.style.background = '#aad68a';
    document.body.style.background = "linear-gradient(to bottom, #f1faeb, #569429)";

    document.getElementById("dj1").checked = false;
    document.getElementById("dj2").checked = false;
    document.getElementById("dj3").checked = false;
    document.getElementById("dj4").checked = false;
    document.getElementById("dj5").checked = false;
    document.getElementById("dj6").checked = false;
    document.getElementById("dj7").checked = false;
    document.getElementById("dj8").checked = false;
}

/*----- Cancel Vote -----*/
function cancelVote() {
    document.getElementById("djvote").style.display = "none";
    document.getElementById("voteSubmitted").style.display = "none";
    document.getElementById("confirmation").style.display = "none";
    document.getElementById("vote").style.display = "grid";
    document.getElementById("huntSubmit").type = "button";
    document.body.style.background = '#ffffff';
}

/*----- Close Overlay -----*/
function closeConfirm() {
    document.getElementById("djvote").style.display = "none";
    document.getElementById("voteSubmitted").style.display = "none";
    document.getElementById("confirmation").style.display = "none";
    document.getElementById("vote").style.display = "grid";
    document.getElementById("voteTab").style.display = "";
    document.getElementById("liveTab").style.display = "";
    document.getElementById("huntSubmit").type = "button";
    document.getElementById("huntSubmit").disabled = true;
    document.getElementById("huntSubmit").style.cursor = "not-allowed";
    document.body.style.background = '#ffffff';
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

    document.getElementById("hunt_time").innerHTML = final_days + ":" + final_hrs + ":" + final_mins + ":" + final_secs;

    if ((days == 0 && hrs == 0 && mins == 0 && secs == 0) || distance < 0) {
        clearInterval(timer);
        document.getElementById("hunt_time").innerHTML = "00:00:00:00";
        document.getElementById("hunt_time").style.color = "#ff0000";
        document.getElementById("hunt_end").style.display = "flex";
    } else {
        document.getElementById("hunt_end").style.display = "none";
    }
}, 1000);

/*----- Vote Ended Message -----*/
$(window).on('scroll', function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 25) {
        $('#hunt_end').stop().animate({ top: "0" }, 25);
    }
    else {
        if (window.innerWidth >= 1024){
            $('#hunt_end').stop().animate({ top: "350px" }, 100);
        } else if (window.innerWidth >= 350 && window.innerWidth <= 1023) {
            $('#hunt_end').stop().animate({ top: "175px" }, 100);
        } else if (window.innerWidth <= 349) {
            $('#hunt_end').stop().animate({ top: "140px" }, 100);
        }
    }
});
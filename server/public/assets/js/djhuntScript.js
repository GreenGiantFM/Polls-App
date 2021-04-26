/*----- Global Variables -----*/
const djs = []
let djhunt

/*----- Retrieve Data from Database -----*/
$(document).ready(() => {
    $.ajax({
        method: 'get',
        url: '/api/All-DJHunt',
        success: data => {
            djhunt = data.data[0];

            console.log(djhunt)
            const closing = document.getElementById('vote_details')
            closing.prepend(document.createTextNode(`Voting Lines Close by: ${new Date(djhunt.end_date).toDateString()} | `))
            setTimer()

            djhunt.radio_talents.map((rt, index) => {
                const grid_container_djs = document.getElementById("vote")
                // <a class="grid-item-dj grid-item-dj-vote"  href="djpage.html">
                //     <img class="dj-background" src="assets/img/d1.jpg">
                //     <p class="dj-name">Cora</p>
                //     <div class="round">
                //         <input type="checkbox" id="checkbox1">
                //             <label for="checkbox1"></label>
                //     </div>
                // </a>

                // <div class="grid-item-dj">
                //     <div class="grid-container-DJ-desk">
                //         <div class="grid-item-DJ-desk-photo">
                //             <img class="dj-background" src="assets/img/DJs/d1.jpg" onclick="openDJPage(1)">
                //             <p class="dj-name">Cora</p>
                //             <div class="round">
                //                 <input type="checkbox" id="dj1" onclick="huntButton()">
                //                 <label for="dj1"></label>
                //             </div>
                //         </div>
                //         <p class="grid-item-DJ-desk-name">Cora</p>
                //     </div>
                // </div>
                const itemdj = document.createElement('div')
                itemdj.setAttribute('class', 'grid-item-dj')
                const djdesk = document.createElement('div')
                djdesk.setAttribute('class', 'grid-container-DJ-desk')
                const deskphoto = document.createElement('div')
                deskphoto.setAttribute('class', "grid-item-DJ-desk-photo")
                const djbackground = document.createElement('img')
                djbackground.setAttribute('class', "dj-background")
                if (rt.picture_path) 
                    djbackground.setAttribute('src', rt.picture_path)
                else
                    djbackground.setAttribute('src', '../img/GGFM_Favicon.png')

                djbackground.setAttribute('alt', rt.dj_name)
                djbackground.setAttribute('onclick', `openDJPage(${index+1})`)
                const djname = document.createElement('p')
                djname.setAttribute('class', 'dj-name')
                djname.innerText = rt.dj_name
                const round = document.createElement('div')
                round.setAttribute('class', 'round')
                const checkbox = document.createElement('input')
                checkbox.setAttribute('type', 'checkbox')
                checkbox.setAttribute('id', `checkbox${index+1}`)
                checkbox.setAttribute('onclick', `huntButton()`)
                const label = document.createElement('label')
                label.setAttribute('for', `checkbox${index+1}`)
                round.appendChild(checkbox)
                round.appendChild(label)
                deskphoto.appendChild(djbackground)
                deskphoto.appendChild(djname)
                deskphoto.appendChild(round)
                const deskname = document.createElement('p')
                deskname.setAttribute('class', 'grid-item-DJ-desk-name')
                deskname.innerText = rt.dj_name
                djdesk.appendChild(deskphoto)
                djdesk.appendChild(deskname)
                itemdj.appendChild(djdesk)
                grid_container_djs.appendChild(itemdj)
                // <a class="grid-item-dj grid-item-dj-vote"  href="djpage.html">
                //     <img class="dj-background" src="assets/img/d1.jpg">
                //     <p class="dj-name">Cora</p>
                //     <div class="round">
                //         <input type="checkbox" id="checkbox1">
                //             <label for="checkbox1"></label>
                //     </div>
                // </a>

                // <div class="grid-item-dj">
                //     <div class="grid-container-DJ-desk">
                //         <div class="grid-item-DJ-desk-photo">
                //             <img class="dj-background" src="assets/img/DJs/d1.jpg" onclick="openDJPage(1)">
                //             <p class="dj-name">Cora</p>
                //             <div class="round">
                //                 <input type="checkbox" id="dj1" onclick="huntButton()">
                //                 <label for="dj1"></label>
                //             </div>
                //         </div>
                //         <p class="grid-item-DJ-desk-name">Cora</p>
                //     </div>
                // </div>

                // <div class="grid-item-djVoted" id="votedDJ8">
                //     <div class="grid-container-confirmDJs">
                //         <div class="votedBackground">
                //             <img class="votedImage" src="assets/img/DJs/d8.jpg">
                //         </div>
                //         <p class="votedTagline"><em class="votedName">Tony</em><br>Tagline</p>
                //     </div>
                // </div>

                // <div class="grid-item-dj" id="votedDJ1_desk">
                //     <div class="grid-container-DJ-desk">
                //         <a class="grid-item-DJ-desk-photo" href="djpage.html">
                //             <img class="dj-background" src="assets/img/DJs/d1.jpg">
                //             <p class="dj-name">Cora</p>
                //         </a>
                //         <p class="grid-item-DJ-desk-name">Cora</p>
                //     </div>
                // </div>

                const voteddjdesk = document.createElement('div')
                voteddjdesk.className = "grid-item-dj"
                voteddjdesk.id = `votedDJ${index+1}_desk`
                const clone = djdesk.cloneNode(true)
                clone.firstChild.removeChild(clone.firstChild.childNodes[2])
                voteddjdesk.appendChild(clone)

                const grid_container_confirm = document.getElementById('grid-container-confirm')
                const djvoted = document.createElement('div')
                djvoted.setAttribute('class', 'grid-item-djVoted')
                djvoted.setAttribute('id', `votedDJ${index+1}`)
                const confirmdjs = document.createElement('div')
                confirmdjs.setAttribute('class', "grid-container-confirmDJs")
                const votedBackground = document.createElement('div')
                votedBackground.setAttribute('class', "votedBackground")
                const votedImage = document.createElement('img')
                votedImage.setAttribute('class', "votedImage")
                if (rt.picture_path)
                    votedImage.setAttribute('src', rt.picture_path)
                else
                    votedImage.setAttribute('src', '../img/GGFM_Favicon.png')
                votedBackground.appendChild(votedImage)
                const votedTagline = document.createElement('p')
                votedTagline.setAttribute('class', "votedTagline")
                const votedName = document.createElement('em')
                votedName.setAttribute('class', "votedName")
                votedName.innerText = rt.dj_name
                votedTagline.appendChild(votedName)
                votedTagline.appendChild(document.createElement('br'))
                votedTagline.appendChild(document.createTextNode(rt.tagline))
                confirmdjs.appendChild(votedBackground)
                confirmdjs.appendChild(votedTagline)
                djvoted.appendChild(confirmdjs)
                grid_container_confirm.prepend(voteddjdesk)
                grid_container_confirm.prepend(djvoted)

                // console.log(checkbox)
                djs.push(checkbox)
            })
            document.getElementById("vote").appendChild(document.createElement('br'))
            document.getElementById("vote").appendChild(document.createElement('br'))
            // console.log(djs)
        }
    })
})

/*----- Open selected Tab -----*/
function openTab(evt, tabName) {
    document.body.style.background = '#ffffff';
    if (tabName == 'Live') {
        let inactive_content = document.getElementById("votingTab");
        inactive_content.style.display = "none";
        let inactive_tab = document.getElementById("voteTab");
        inactive_tab.className = "inactive";

        let active_content = document.getElementById("live");
        active_content.style.display = "block";
        let active_tab = document.getElementById("liveTab");
        active_tab.className = "active";
        evt.currentTarget.className += " active";
    } else if (tabName == 'Vote') {
        let inactive_content = document.getElementById("live");
        inactive_content.style.display = "none";
        let inactive_tab = document.getElementById("liveTab");
        inactive_tab.className = "inactive";

        let active_content = document.getElementById("votingTab");
        active_content.style.display = "block";
        let active_tab = document.getElementById("voteTab");
        active_tab.className = "active";
        evt.currentTarget.className += " active";
    }
}

/*----- Open DJ Page -----*/
function openDJPage(djNum){

    const dj = djhunt.radio_talents[djNum-1]

    document.getElementById('dj-image-mobile').src = dj.picture_path;
    document.getElementById('dj-image-desk').src = dj.picture_path;
    document.getElementById('djName-mobile').innerHTML = `DJ ${dj.dj_name}`;
    document.getElementById('djName-desk').innerHTML = `DJ ${dj.dj_name}`;
    document.getElementById('fullName-mobile').innerHTML = dj.actual_name;
    document.getElementById('fullName').innerHTML = dj.actual_name;
    document.getElementById('djVideo-mobile').src = dj.youtube_promotional;
    document.getElementById('djVideo-desk').src = dj.youtube_promotional;
    document.getElementById('djStinger-mobile').src = dj.stinger_path;
    document.getElementById('djStinger-desk').src = dj.stinger_path;
    document.getElementById('djAudio-mobile').load();
    document.getElementById('djAudio-desk').load();
    document.getElementById('djPlaylist-mobile').src = dj.spotify_playlist;
    document.getElementById('djPlaylist-desk').src = dj.spotify_playlist;
    document.getElementById("details-tagline-desk").innerText = dj.tagline;
    document.getElementById("details-tagline-mobile").innerText = dj.tagline;
    console.log(dj.facebook, dj.twitter, dj.instagram)
    console.log(dj)
    document.getElementById("desk-facebook").href = dj.facebook;
    document.getElementById("mobile-facebook").href = dj.facebook;
    document.getElementById("desk-twitter").href = dj.twitter;
    document.getElementById("mobile-twitter").href = dj.twitter;
    document.getElementById("desk-instagram").href = dj.instagram;
    document.getElementById("mobile-instagram").href = dj.instagram;

    document.getElementById('djPage-mobile').style.display = "";
    document.getElementById('djPage-desk').style.display = "";

    var mobile = document.getElementById("djPage-mobile");
    mobile.classList.add("chosen-DJPage-mobile");
    var desk = document.getElementById("djPage-desk");
    desk.classList.add("chosen-DJPage-desk");
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

    for (let [index, dj] of djs.entries()) {
        if (dj.checked) {
            document.getElementById(`votedDJ${index+1}_desk`).style.display = "";
            document.getElementById(`votedDJ${index+1}`).style.display = "";

            var desk = document.getElementById(`votedDJ${index+1}_desk`);
            desk.classList.add("chosen_desk");
            var mobile = document.getElementById(`votedDJ${index+1}`);
            mobile.classList.add("chosen_mobile");
        } else {
            document.getElementById(`votedDJ${index+1}_desk`).style.display = "none";
            document.getElementById(`votedDJ${index+1}`).style.display = "none";

            var desk = document.getElementById(`votedDJ${index+1}_desk`);
            if (desk.classList.contains("chosen_desk")){
                desk.classList.remove("chosen_desk");
            }
            var mobile = document.getElementById(`votedDJ${index+1}`);
            if (mobile.classList.contains("chosen_mobile")) {
                mobile.classList.remove("chosen_mobile");
            }
        }
    }

}

/*----- Enable / Disable vote Button -----*/
function huntButton() {
    
    let value = true;

    for (let dj of djs)
        if (dj.checked)
            value = false;

    document.getElementById("huntSubmit").disabled = value
    if (value)
        document.getElementById("huntSubmit").style.cursor = "not-allowed";
    else
        document.getElementById("huntSubmit").style.cursor = "pointer";

    // if (dj1.checked == true || dj2.checked == true || dj3.checked == true || dj4.checked == true) {
    //     document.getElementById("huntSubmit").disabled = false;
    //     document.getElementById("huntSubmit").style.cursor = "pointer";
    // } else if (dj5.checked == true || dj6.checked == true || dj7.checked == true || dj8.checked == true) {
    //     document.getElementById("huntSubmit").disabled = false;
    //     document.getElementById("huntSubmit").style.cursor = "pointer";
    // } else {
    //     document.getElementById("huntSubmit").disabled = true;
    //     document.getElementById("huntSubmit").style.cursor = "not-allowed";
    // }
}

/*----- Submit Vote -----*/
function submitVote(){
    for (let [index, dj] of djs.entries()) {
        if (dj.checked)
            djhunt.radio_talents[index].vote_count++
    }

    try {
        $.ajax({
            method: 'put',
            url: `/api/DjHunt/${djhunt._id}`,
            data: djhunt,
            success: data => {
                console.log(data)

                document.getElementById("vote").style.display = "none";
                document.getElementById("djvote").style.display = "none";
                document.getElementById("confirmation").style.display = "none";
                document.getElementById("voteSubmitted").style.display = "grid";
                document.getElementById("voteTab").style.display = "none";
                document.getElementById("liveTab").style.display = "none";
                document.body.style.background = '#aad68a';
                document.body.style.background = "linear-gradient(to bottom, #f1faeb, #569429)";
            
                for (let dj of djs)
                    dj.checked = false
            }
        })
    } catch (error) {
        console.log(error)
    }
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
function setTimer() {

    var votingPeriod = new Date(djhunt.end_date).getTime();
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
}

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




















// /*----- Open Menu -----*/
// function openNav() {
//     document.getElementById("sideMenu").style.width = "250px";
// }

// /*----- Close Menu -----*/
// function closeNav() {
//     document.getElementById("sideMenu").style.width = "0";
// }

// /*----- Open selected Tab -----*/
// function openTab(evt, tabName) {
//     document.body.style.background = '#ffffff';
//     if(tabName == 'Live'){
//         let inactive_content = document.getElementById("votingTab");
//         inactive_content.style.display = "none";
//         let inactive_tab = document.getElementById("voteTab");
//         inactive_tab.className = "inactive";

//         let active_content = document.getElementById("live");
//         active_content.style.display = "block";
//         let active_tab = document.getElementById("liveTab");
//         active_tab.className = "active";
//         evt.currentTarget.className += " active";
//     }else if (tabName == 'Vote') {
//         let inactive_content = document.getElementById("live");
//         inactive_content.style.display = "none";
//         let inactive_tab = document.getElementById("liveTab");
//         inactive_tab.className = "inactive";

//         let active_content = document.getElementById("votingTab");
//         active_content.style.display = "block";
//         let active_tab = document.getElementById("voteTab");
//         active_tab.className = "active";
//         evt.currentTarget.className += " active";
//     }
// }

// /*----- Open DJ Page -----*/
// function openDJPage(djNum){
//     document.getElementById('djPage-mobile').style.display = "";
//     document.getElementById('djPage-desk').style.display = "";

//     var mobile = document.getElementById("djPage-mobile");
//     mobile.classList.add("chosen-DJPage-mobile");
//     var desk = document.getElementById("djPage-desk");
//     desk.classList.add("chosen-DJPage-desk");

//     if (djNum == 1){
//         document.getElementById('dj-image-mobile').src = "assets/img/DJs/d1.jpg";
//         document.getElementById('dj-image-desk').src = "assets/img/DJs/d1.jpg";
//         document.getElementById('djName-mobile').innerHTML = "DJ Cora";
//         document.getElementById('djName-desk').innerHTML = "DJ Cora";
//         document.getElementById('fullName-mobile').innerHTML = "Alexa Coronel";
//         document.getElementById('fullName').innerHTML = "Alexa Coronel";
//         document.getElementById('djVideo-mobile').src = "https://www.youtube.com/embed/wm84dnRjpdk";
//         document.getElementById('djVideo-desk').src = "https://www.youtube.com/embed/wm84dnRjpdk";
//         document.getElementById('djStinger-mobile').src = "assets/audio/1.mp3";
//         document.getElementById('djStinger-desk').src = "assets/audio/1.mp3";
//         document.getElementById('djAudio-mobile').load();
//         document.getElementById('djAudio-desk').load();
//         document.getElementById('djPlaylist-mobile').src = "https://open.spotify.com/embed/playlist/5LAUkCQ56Y8ytI7U9kVtGB";
//         document.getElementById('djPlaylist-desk').src = "https://open.spotify.com/embed/playlist/5LAUkCQ56Y8ytI7U9kVtGB";
//     } else if (djNum == 2) {
//         document.getElementById('dj-image-mobile').src = "assets/img/DJs/d2.jpg";
//         document.getElementById('dj-image-desk').src = "assets/img/DJs/d2.jpg";
//         document.getElementById('djName-mobile').innerHTML = "DJ Javi";
//         document.getElementById('djName-desk').innerHTML = "DJ Javi";
//         document.getElementById('fullName-mobile').innerHTML = "Juan Xavier Lazaro Campos";
//         document.getElementById('fullName').innerHTML = "Juan Xavier Lazaro Campos";
//         document.getElementById('djVideo-mobile').src = "https://www.youtube.com/embed/Fh8lXFfDltY";
//         document.getElementById('djVideo-desk').src = "https://www.youtube.com/embed/Fh8lXFfDltY";
//         document.getElementById('djStinger-mobile').src = "assets/audio/2.mp3";
//         document.getElementById('djStinger-desk').src = "assets/audio/2.mp3";
//         document.getElementById('djAudio-mobile').load();
//         document.getElementById('djAudio-desk').load();
//         document.getElementById('djPlaylist-mobile').src = "https://open.spotify.com/embed/playlist/2Pt1kSsiF9sdJqsfRqPbTO";
//         document.getElementById('djPlaylist-desk').src = "https://open.spotify.com/embed/playlist/2Pt1kSsiF9sdJqsfRqPbTO";
//     } else if (djNum == 3) {
//         document.getElementById('dj-image-mobile').src = "assets/img/DJs/d3.jpg";
//         document.getElementById('dj-image-desk').src = "assets/img/DJs/d3.jpg";
//         document.getElementById('djName-mobile').innerHTML = "DJ Joaquin";
//         document.getElementById('djName-desk').innerHTML = "DJ Joaquin";
//         document.getElementById('fullName-mobile').innerHTML = "Joaquin Ng";
//         document.getElementById('fullName').innerHTML = "Joaquin Ng";
//         document.getElementById('djVideo-mobile').src = "https://www.youtube.com/embed/M8eRggVjh44";
//         document.getElementById('djVideo-desk').src = "https://www.youtube.com/embed/M8eRggVjh44";
//         document.getElementById('djStinger-mobile').src = "assets/audio/3.mp3";
//         document.getElementById('djStinger-desk').src = "assets/audio/3.mp3";
//         document.getElementById('djAudio-mobile').load();
//         document.getElementById('djAudio-desk').load();
//         document.getElementById('djPlaylist-mobile').src = "https://open.spotify.com/embed/playlist/49B8jNu7DtVqbP3LR9aNtK";
//         document.getElementById('djPlaylist-desk').src = "https://open.spotify.com/embed/playlist/49B8jNu7DtVqbP3LR9aNtK";
//     } else if (djNum == 4) {
//         document.getElementById('dj-image-mobile').src = "assets/img/DJs/d4.jpg";
//         document.getElementById('dj-image-desk').src = "assets/img/DJs/d4.jpg";
//         document.getElementById('djName-mobile').innerHTML = "DJ Macoy";
//         document.getElementById('djName-desk').innerHTML = "DJ Macoy";
//         document.getElementById('fullName-mobile').innerHTML = "Marco Miguel Galang";
//         document.getElementById('fullName').innerHTML = "Marco Miguel Galang";
//         document.getElementById('djVideo-mobile').src = "https://www.youtube.com/embed/yuWk8Wni4Ls";
//         document.getElementById('djVideo-desk').src = "https://www.youtube.com/embed/yuWk8Wni4Ls";
//         document.getElementById('djStinger-mobile').src = "assets/audio/4.mp3";
//         document.getElementById('djStinger-desk').src = "assets/audio/4.mp3";
//         document.getElementById('djAudio-mobile').load();
//         document.getElementById('djAudio-desk').load();
//         document.getElementById('djPlaylist-mobile').src = "https://open.spotify.com/embed/playlist/0vppnEIveKTLMQWmxL4521";
//         document.getElementById('djPlaylist-desk').src = "https://open.spotify.com/embed/playlist/0vppnEIveKTLMQWmxL4521";
//     } else if (djNum == 5) {
//         document.getElementById('dj-image-mobile').src = "assets/img/DJs/d5.jpg";
//         document.getElementById('dj-image-desk').src = "assets/img/DJs/d5.jpg";
//         document.getElementById('djName-mobile').innerHTML = "DJ Michael";
//         document.getElementById('djName-desk').innerHTML = "DJ Michael";
//         document.getElementById('fullName-mobile').innerHTML = "Michael Laset";
//         document.getElementById('fullName').innerHTML = "Michael Laset";
//         document.getElementById('djVideo-mobile').src = "https://www.youtube.com/embed/eZVntIuRbKY";
//         document.getElementById('djVideo-desk').src = "https://www.youtube.com/embed/eZVntIuRbKY";
//         document.getElementById('djStinger-mobile').src = "assets/audio/5.mp3";
//         document.getElementById('djStinger-desk').src = "assets/audio/5.mp3";
//         document.getElementById('djAudio-mobile').load();
//         document.getElementById('djAudio-desk').load();
//         document.getElementById('djPlaylist-mobile').src = "https://open.spotify.com/embed/playlist/31QPGd67LfJ3xuicInywrN";
//         document.getElementById('djPlaylist-desk').src = "https://open.spotify.com/embed/playlist/31QPGd67LfJ3xuicInywrN";
//     } else if (djNum == 6) {
//         document.getElementById('dj-image-mobile').src = "assets/img/DJs/d6.jpg";
//         document.getElementById('dj-image-desk').src = "assets/img/DJs/d6.jpg";
//         document.getElementById('djName-mobile').innerHTML = "DJ Fonz";
//         document.getElementById('djName-desk').innerHTML = "DJ Fonz";
//         document.getElementById('fullName-mobile').innerHTML = "Hans Sanciano Macatangay";
//         document.getElementById('fullName').innerHTML = "Hans Sanciano Macatangay";
//         document.getElementById('djVideo-mobile').src = "https://www.youtube.com/embed/C3IyJMbuj5Y";
//         document.getElementById('djVideo-desk').src = "https://www.youtube.com/embed/C3IyJMbuj5Y";
//         document.getElementById('djStinger-mobile').src = "assets/audio/6.mp3";
//         document.getElementById('djStinger-desk').src = "assets/audio/6.mp3";
//         document.getElementById('djAudio-mobile').load();
//         document.getElementById('djAudio-desk').load();
//         document.getElementById('djPlaylist-mobile').src = "https://open.spotify.com/embed/playlist/1GQQh6nwvFxmlZTh25tGtr";
//         document.getElementById('djPlaylist-desk').src = "https://open.spotify.com/embed/playlist/1GQQh6nwvFxmlZTh25tGtr";
//     } else if (djNum == 7) {
//         document.getElementById('dj-image-mobile').src = "assets/img/DJs/d7.jpg";
//         document.getElementById('dj-image-desk').src = "assets/img/DJs/d7.jpg";
//         document.getElementById('djName-mobile').innerHTML = "DJ Robby";
//         document.getElementById('djName-desk').innerHTML = "DJ Robby";
//         document.getElementById('fullName-mobile').innerHTML = "Rob Dolina";
//         document.getElementById('fullName').innerHTML = "Rob Dolina";
//         document.getElementById('djVideo-mobile').src = "https://www.youtube.com/embed/AWoOmF_EM9c";
//         document.getElementById('djVideo-desk').src = "https://www.youtube.com/embed/AWoOmF_EM9c";
//         document.getElementById('djStinger-mobile').src = "assets/audio/7.mp3";
//         document.getElementById('djStinger-desk').src = "assets/audio/7.mp3";
//         document.getElementById('djAudio-mobile').load();
//         document.getElementById('djAudio-desk').load();
//         document.getElementById('djPlaylist-mobile').src = "https://open.spotify.com/embed/playlist/3sysWImTc0zKri7dxpNzlH";
//         document.getElementById('djPlaylist-desk').src = "https://open.spotify.com/embed/playlist/3sysWImTc0zKri7dxpNzlH";
//     } else if (djNum == 8) {
//         document.getElementById('dj-image-mobile').src = "assets/img/DJs/d8.jpg";
//         document.getElementById('dj-image-desk').src = "assets/img/DJs/d8.jpg";
//         document.getElementById('djName-mobile').innerHTML = "DJ Tony";
//         document.getElementById('djName-desk').innerHTML = "DJ Tony";
//         document.getElementById('fullName-mobile').innerHTML = "Miguel Antonio Lindog";
//         document.getElementById('fullName').innerHTML = "Miguel Antonio Lindog";
//         document.getElementById('djVideo-mobile').src = "https://www.youtube.com/embed/bPT_chlLmwU";
//         document.getElementById('djVideo-desk').src = "https://www.youtube.com/embed/bPT_chlLmwU";
//         document.getElementById('djStinger-mobile').src = "assets/audio/8.mp3";
//         document.getElementById('djStinger-desk').src = "assets/audio/8.mp3";
//         document.getElementById('djAudio-mobile').load();
//         document.getElementById('djAudio-desk').load();
//         document.getElementById('djPlaylist-mobile').src = "https://open.spotify.com/embed/playlist/6cjleuN86KNkvwG18k1fMU";
//         document.getElementById('djPlaylist-desk').src = "https://open.spotify.com/embed/playlist/6cjleuN86KNkvwG18k1fMU";
//     }
// }

// /*----- Close DJ Page -----*/
// function closeDJPage() {
//     document.getElementById('djPage-mobile').style.display = "none";
//     document.getElementById("djPage-desk").style.display = "none";

//     var mobile = document.getElementById("djPage-mobile");
//     if (mobile.classList.contains("chosen-DJPage-mobile")) {
//         mobile.classList.remove("chosen-DJPage-mobile");
//     }
//     var desk = document.getElementById("djPage-desk");
//     if (desk.classList.contains("chosen-DJPage-desk")) {
//         desk.classList.remove("chosen-DJPage-desk");
//     }
// }

// /*----- Confirm Vote -----*/
// function openConfirm() {
//     document.getElementById("vote").style.display = "none";
//     document.getElementById("djvote").style.display = "block";
//     document.getElementById("confirmation").style.display = "block";
//     document.getElementById("huntSubmit").type = "hidden";

//     // MAY CHANGES PA HERE
//     for (let [index, dj] of djs.entries()) {
//         if (dj.checked)
//             document.getElementById(`dj${index+1}`).style.display = "block"
//         else
//             document.getElementById(`dj${index+1}`).style.display = "none"
//     }
// }

// /*----- Enable / Disable vote Button -----*/
// function huntButton() {
//     var dj1 = document.getElementById("dj1");
//     var dj2 = document.getElementById("dj2");
//     var dj3 = document.getElementById("dj3");
//     var dj4 = document.getElementById("dj4");
//     var dj5 = document.getElementById("dj5");
//     var dj6 = document.getElementById("dj6");
//     var dj7 = document.getElementById("dj7");
//     var dj8 = document.getElementById("dj8");
//     if (dj1.checked == true || dj2.checked == true || dj3.checked == true || dj4.checked == true) {
//         document.getElementById("huntSubmit").disabled = false;
//         document.getElementById("huntSubmit").style.cursor = "pointer";
//     } else if (dj5.checked == true || dj6.checked == true || dj7.checked == true || dj8.checked == true) {
//         document.getElementById("huntSubmit").disabled = false;
//         document.getElementById("huntSubmit").style.cursor = "pointer";
//     } else {
//         document.getElementById("huntSubmit").disabled = true;
//         document.getElementById("huntSubmit").style.cursor = "not-allowed";
//     }
// }

// /*----- Submit Vote -----*/
// function submitVote(){
//     for (let [index, dj] of djs.entries()) {
//         if (dj.checked)
//             djhunt.radio_talents[index].vote_count++
//     }

//     try {
//         $.ajax({
//             method: 'put',
//             url: `/api/DjHunt/${djhunt._id}`,
//             data: djhunt,
//             success: data => {
//                 console.log(data)

//                 document.getElementById("vote").style.display = "none";
//                 document.getElementById("djvote").style.display = "none";
//                 document.getElementById("confirmation").style.display = "none";
//                 document.getElementById("voteSubmitted").style.display = "grid";
//                 document.getElementById("voteTab").style.display = "none";
//                 document.getElementById("liveTab").style.display = "none";
//                 document.body.style.background = '#aad68a';
//                 document.body.style.background = "linear-gradient(to bottom, #f1faeb, #569429)";
            
//                 for (let dj of djs)
//                     dj.checked = false
//             }
//         })
//     } catch (error) {
//         console.log(error)
//     }
//     // document.getElementById("checkbox1").checked = false;
//     // document.getElementById("checkbox2").checked = false;
//     // document.getElementById("checkbox3").checked = false;
//     // document.getElementById("checkbox4").checked = false;
//     // document.getElementById("checkbox5").checked = false;
//     // document.getElementById("checkbox6").checked = false;
//     // document.getElementById("checkbox7").checked = false;
//     // document.getElementById("checkbox8").checked = false;
// }

// /*----- Cancel Vote -----*/
// function cancelVote() {
//     document.getElementById("djvote").style.display = "none";
//     document.getElementById("voteSubmitted").style.display = "none";
//     document.getElementById("confirmation").style.display = "none";
//     document.getElementById("vote").style.display = "grid";
//     document.getElementById("huntSubmit").type = "button";
//     document.body.style.background = '#ffffff';
// }

// /*----- Close Overlay -----*/
// function closeConfirm() {
//     document.getElementById("djvote").style.display = "none";
//     document.getElementById("voteSubmitted").style.display = "none";
//     document.getElementById("confirmation").style.display = "none";
//     document.getElementById("vote").style.display = "grid";
//     document.getElementById("voteTab").style.display = "";
//     document.getElementById("liveTab").style.display = "";
//     document.getElementById("huntSubmit").type = "button";
//     document.getElementById("huntSubmit").disabled = true;
//     document.getElementById("huntSubmit").style.cursor = "not-allowed";
//     document.body.style.background = '#ffffff';
// }

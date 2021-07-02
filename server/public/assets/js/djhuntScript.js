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

            const closing = document.getElementById('hunt-date')
            const formattedDate = new Date(djhunt.end_date)
            .toLocaleDateString({},
            {timeZone:"UTC",month:"long", day:"2-digit", year:"numeric"}
            )
            const sp = formattedDate.split(' ')
            closing.innerText = `${sp[0]} ${sp[1]} ${sp[2]}`
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

                /*
                <div class="grid-item-dj">
                    <div class="grid-container-DJ-desk">
                        <div class="grid-item-DJ-desk-photo" onclick="openDJPage(1)">
                            <img class="dj-background" src="assets/img/DJs/d1.jpg">
                            <div class="overlay-dj-photo">
                                <div class="view-more">View More</div>
                            </div>
                        </div>
                        <div class="bottom-vote">
                            <div class="round-check">
                                <input type="checkbox" id="dj1" onclick="huntButton()">
                                <label for="dj1"></label>
                            </div>
                            <p class="grid-item-DJ-desk-name">Cora</p>
                        </div>
                    </div>
                </div>
                */
                // <div class="grid-item-dj">
                const itemdj = document.createElement('div')
                itemdj.setAttribute('class', 'grid-item-dj')

                //      <div class="grid-container-DJ-desk">
                const djdesk = document.createElement('div')
                djdesk.setAttribute('class', 'grid-container-DJ-desk')

                //          <div class="grid-item-DJ-desk-photo" onclick="openDJPage(1)">
                const deskphoto = document.createElement('div')
                deskphoto.setAttribute('class', "grid-item-DJ-desk-photo")
                deskphoto.setAttribute('onclick', `openDJPage(${index + 1})`)

                //              <img class="dj-background" src="assets/img/DJs/d1.jpg">
                const djbackground = document.createElement('img')
                djbackground.setAttribute('class', "dj-background")
                if (rt.picture_path) 
                    djbackground.setAttribute('src', rt.picture_path)
                else
                    djbackground.setAttribute('src', '../img/GGFM_Favicon.png')

                djbackground.setAttribute('alt', rt.dj_name)

                //              <div class="overlay-dj-photo">
                const overlaydjphoto = document.createElement('div')
                overlaydjphoto.setAttribute('class', 'overlay-dj-photo')

                //                  <div class="view-more">View More</div>
                const viewmore = document.createElement('div')
                viewmore.setAttribute('class', 'view-more')
                viewmore.innerText = 'View More'

                // closing the divs (grid-item-DJ-desk-photo and div/s inside)
                overlaydjphoto.appendChild(viewmore)
                deskphoto.appendChild(djbackground)
                deskphoto.appendChild(overlaydjphoto)

                //          <div class="bottom-vote">
                const bottomvote = document.createElement('div')
                bottomvote.setAttribute('class', 'bottom-vote')

                //              <div class="round-check">
                const round = document.createElement('div')
                round.setAttribute('class', 'round-check')

                //                  <input type="checkbox" id="dj1" onclick="huntButton()">
                const checkbox = document.createElement('input')
                checkbox.setAttribute('type', 'checkbox')
                checkbox.setAttribute('id', `checkbox${index+1}`)
                checkbox.setAttribute('onclick', `huntButton()`)

                //                  <label for="dj1"></label>
                const label = document.createElement('label')
                label.setAttribute('for', `checkbox${index+1}`)

                //              <p class="grid-item-DJ-desk-name">Cora</p>
                const djname = document.createElement('p')
                djname.setAttribute('class', 'dj-name')
                djname.innerText = rt.dj_name

                // closing the divs (bottom-vote and div/s inside)
                round.appendChild(checkbox)
                round.appendChild(label)
                bottomvote.appendChild(round)
                bottomvote.appendChild(djname)
                djdesk.appendChild(deskphoto)
                djdesk.appendChild(bottomvote)
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
                grid_container_confirm.appendChild(voteddjdesk)
                grid_container_confirm.appendChild(djvoted)

                djs.push(checkbox)
            })
            const confirmation = document.getElementById('confirmation')
            const grid_container_confirm = document.getElementById('grid-container-confirm')
            const clone = confirmation.cloneNode(true);
            grid_container_confirm.removeChild(confirmation)
            grid_container_confirm.appendChild(clone)

            document.getElementById("vote").appendChild(document.createElement('br'))
            document.getElementById("vote").appendChild(document.createElement('br'))

            const live_rank = [...djhunt.radio_talents]
            live_rank.sort((a, b) => b.vote_count - a.vote_count)

            // get total overall for the percentage
            let totalVotes = 0
            live_rank.map(s => {
                totalVotes += s.vote_count
            })

            live_rank.map((rt, index) => {
                const percent = Math.round((rt.vote_count/totalVotes)*100)
                /*** grey ***/
                document.getElementById(`bar-${index+1}-top`).style.gridRow = `1 / ${100-percent}`
                /*** green ***/
                document.getElementById(`bar-${index+1}-bottom`).style.gridRow = `${100-percent} / 101`
                /*** num ***/
                document.getElementById(`top-${index+1}-num`).innerText = `${percent}%`
                /*** green ***/
                document.getElementById(`bar-${index+1}-mid`).style.gridColumn = `30 / ${30+10+percent}`
                /*** grey ***/
                document.getElementById(`bar-${index+1}-right`).style.gridColumn = `${30+10+percent} / 140`
                /*** num ***/
                document.getElementById(`mid-${index+1}-num`).innerText = `${percent}%`
            })
        }
    })

    if (window.innerWidth >= 350) {
        $('#deskSignIn').css("display", "block");
        $('#mobileSignIn').css("display", "none");
    } else if (window.innerWidth <= 349) {
        $('#deskSignIn').css("display", "none");
        $('#mobileSignIn').css("display", "block");
    }
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
    /*----- Reset youtube video -----*/
    document.getElementById('djVideo-mobile').src = document.getElementById('djVideo-mobile').src;
    document.getElementById("djVideo-desk").src = document.getElementById("djVideo-desk").src ;
    
    /*----- Reset audio player -----*/
    document.getElementById('djAudio-mobile').pause()
    document.getElementById('djAudio-desk').pause()
    
    /*----- Reset spotify player -----*/
    document.getElementById('djPlaylist-mobile').src = document.getElementById('djPlaylist-mobile').src
    document.getElementById('djPlaylist-desk').src = document.getElementById('djPlaylist-desk').src
    
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

/*----- Check number of DJs voted -----*/
function checkBefore(num) {
    let count = 0;

    for (let i = djs.length-1; i>=0; i--) {
        if (i < num-1)
            if (djs[i].checked)
                count++;
    }

    return count;
}

/*----- Check number of DJs voted -----*/
function checkAfter(num) {
    let count = 0;

    for (let [index, dj] of djs.entries()) {
        if (index >= num)
            if (dj.checked)
                count++;
    }

    return count;
}

/*----- Sign In To Google -----*/
function signIn() {
    document.getElementById("vote").style.display = "none";
    document.getElementById("djvote").style.display = "none";
    document.getElementById("confirmation").style.display = "none";
    document.getElementById("huntSubmit").type = "hidden";
    document.getElementById("djSignIn").style.display = "block";
}

/*----- Confirm Vote -----*/
function openConfirm() {
    document.getElementById("vote").style.display = "none";
    document.getElementById("djvote").style.display = "block";
    document.getElementById("confirmation").style.display = "block";
    document.getElementById("huntSubmit").type = "hidden";
    document.getElementById("djSignIn").style.display = "none";

    var voteDJ1 = djs[0]
    var voteDJ2 = djs[1]
    var voteDJ3 = djs[2]
    var voteDJ4 = djs[3]
    var voteDJ5 = djs[4]
    var voteDJ6 = djs[5]
    var voteDJ7 = djs[6]
    var voteDJ8 = djs[7]

    if (voteDJ1.checked == true) {
        document.getElementById("votedDJ1_desk").style.display = "";
        document.getElementById("votedDJ1").style.display = "";

        if (checkAfter(1) == 0) {
            document.getElementById("votedDJ1_desk").style.gridColumn = "1 / span 4";
        } else if (checkAfter(1) == 1) {
            document.getElementById("votedDJ1_desk").style.gridColumn = "1 / span 2";
        } else {
            document.getElementById("votedDJ1_desk").style.gridColumn = "";
        }

        var desk = document.getElementById("votedDJ1_desk");
        desk.classList.add("chosen_desk");
        var mobile = document.getElementById("votedDJ1");
        mobile.classList.add("chosen_mobile");
    } else {
        document.getElementById("votedDJ1_desk").style.display = "none";
        document.getElementById("votedDJ1").style.display = "none";

        var desk = document.getElementById("votedDJ1_desk");
        if (desk.classList.contains("chosen_desk")) {
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

        if (checkBefore(2) == 0 && checkAfter(2) == 0) {
            document.getElementById("votedDJ2_desk").style.gridColumn = "1 / span 4";
        } else if (checkBefore(2) == 0 && checkAfter(2) == 1) {
            document.getElementById("votedDJ2_desk").style.gridColumn = "1 / span 2";
        } else if (checkBefore(2) == 1 && checkAfter(2) == 0) {
            document.getElementById("votedDJ2_desk").style.gridColumn = "3 / span 2";
        } else if (checkBefore(2) == 1 && checkAfter(2) == 1) {
            document.getElementById("votedDJ2_desk").style.gridColumn = "2 / span 2";
        } else {
            document.getElementById("votedDJ2_desk").style.gridColumn = "";
        }

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

        if (checkBefore(3) == 0 && checkAfter(3) == 0) {
            document.getElementById("votedDJ3_desk").style.gridColumn = "1 / span 4";
        } else if (checkBefore(3) == 0 && checkAfter(3) == 1) {
            document.getElementById("votedDJ3_desk").style.gridColumn = "1 / span 2";
        } else if (checkBefore(3) == 1 && checkAfter(3) == 0) {
            document.getElementById("votedDJ3_desk").style.gridColumn = "3 / span 2";
        } else if (checkBefore(3) == 1 && checkAfter(3) == 1) {
            document.getElementById("votedDJ3_desk").style.gridColumn = "2 / span 2";
        } else {
            document.getElementById("votedDJ3_desk").style.gridColumn = "";
        }

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

        if (checkBefore(4) == 0 && checkAfter(4) == 0) {
            document.getElementById("votedDJ4_desk").style.gridColumn = "1 / span 4";
        } else if (checkBefore(4) == 0 && checkAfter(4) == 1) {
            document.getElementById("votedDJ4_desk").style.gridColumn = "1 / span 2";
        } else if (checkBefore(4) == 1 && checkAfter(4) == 0) {
            document.getElementById("votedDJ4_desk").style.gridColumn = "3 / span 2";
        } else if (checkBefore(4) == 1 && checkAfter(4) == 1) {
            document.getElementById("votedDJ4_desk").style.gridColumn = "2 / span 2";
        } else {
            document.getElementById("votedDJ4_desk").style.gridColumn = "";
        }

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

        if ((checkBefore(5) == 0 || checkBefore(5) == 4) && checkAfter(5) == 0) {
            document.getElementById("votedDJ5_desk").style.gridColumn = "1 / span 4";
        } else if ((checkBefore(5) == 0 || checkBefore(5) == 4) && checkAfter(5) == 1) {
            document.getElementById("votedDJ5_desk").style.gridColumn = "1 / span 2";
        } else if (checkBefore(5) == 1 && checkAfter(5) == 0) {
            document.getElementById("votedDJ5_desk").style.gridColumn = "3 / span 2";
        } else if (checkBefore(5) == 1 && checkAfter(5) == 1) {
            document.getElementById("votedDJ5_desk").style.gridColumn = "2 / span 2";
        } else {
            document.getElementById("votedDJ5_desk").style.gridColumn = "";
        }

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

        if ((checkBefore(6) == 0 || checkBefore(6) == 4) && checkAfter(6) == 0) {
            document.getElementById("votedDJ6_desk").style.gridColumn = "2 / span 2";
        } else if ((checkBefore(6) == 0 || checkBefore(6) == 4) && checkAfter(6) == 1) {
            document.getElementById("votedDJ6_desk").style.gridColumn = "1 / span 2";
        } else if ((checkBefore(6) == 1 || checkBefore(6) == 5) && checkAfter(6) == 0) {
            document.getElementById("votedDJ6_desk").style.gridColumn = "3 / span 2";
        } else if ((checkBefore(6) == 1 || checkBefore(6) == 5) && checkAfter(6) == 1) {
            document.getElementById("votedDJ6_desk").style.gridColumn = "2 / span 2";
        } else {
            document.getElementById("votedDJ6_desk").style.gridColumn = "";
        }

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

        if ((checkBefore(7) == 0 || checkBefore(7) == 4) && checkAfter(7) == 0) {
            document.getElementById("votedDJ7_desk").style.gridColumn = "2 / span 2";
        } else if ((checkBefore(7) == 0 || checkBefore(7) == 4) && checkAfter(7) == 1) {
            document.getElementById("votedDJ7_desk").style.gridColumn = "1 / span 2";
        } else if ((checkBefore(7) == 1 || checkBefore(7) == 5) && checkAfter(7) == 0) {
            document.getElementById("votedDJ7_desk").style.gridColumn = "3 / span 2";
        } else if ((checkBefore(7) == 1 || checkBefore(7) == 5) && checkAfter(7) == 1) {
            document.getElementById("votedDJ7_desk").style.gridColumn = "2 / span 2";
        } else {
            document.getElementById("votedDJ7_desk").style.gridColumn = "";
        }

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

        if ((checkBefore(8) == 0 || checkBefore(8) == 4)) {
            document.getElementById("votedDJ8_desk").style.gridColumn = "1 / span 4";
        } else if ((checkBefore(8) == 1 || checkBefore(8) == 5)) {
            document.getElementById("votedDJ8_desk").style.gridColumn = "3 / span 2";
        } else {
            document.getElementById("votedDJ8_desk").style.gridColumn = "";
        }

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

    var elementsA = document.querySelectorAll(".grid-item-dj");
    for (let i = 0; i < elementsA.length; i++) {
        elementsA[i].style.cursor = "default";
    }

    var elementsB = document.querySelectorAll(".grid-item-DJ-desk-photo");
    for (let i = 0; i < elementsB.length; i++) {
        elementsB[i].style.cursor = "default";
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

    $.ajax({
        method: 'get',
        url: `/api/All-DJHunt`,
        success: data => {
            djhunt = data.data[0];

            for (let [index, dj] of djs.entries()) {
                if (dj.checked)
                    djhunt.radio_talents[index].vote_count++
            }
        
            $.ajax({
                method: 'put',
                url: `/api/DjHunt/${djhunt._id}`,
                data: djhunt,
                success: data => {
        
                    document.getElementById("vote").style.display = "none";
                    document.getElementById("djvote").style.display = "none";
                    document.getElementById("confirmation").style.display = "none";
                    document.getElementById("voteSubmitted").style.display = "grid";
                    document.getElementById("voteTab").style.display = "none";
                    document.getElementById("liveTab").style.display = "none";
                    document.getElementById("djSignIn").style.display = "none";
                    document.body.style.background = '#aad68a';
                    document.body.style.background = "linear-gradient(to bottom, #f1faeb, #569429)";
                
                    for (let dj of djs)
                        dj.checked = false
                }
            })
        }
    })
}

/*----- Cancel Vote -----*/
function cancelVote() {
    document.getElementById("djvote").style.display = "none";
    document.getElementById("voteSubmitted").style.display = "none";
    document.getElementById("confirmation").style.display = "none";
    document.getElementById("djSignIn").style.display = "none";
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
// $(window).on('scroll', function () {
//     var scrollTop = $(window).scrollTop();
//     if (scrollTop > 25) {
//         $('#hunt_end').stop().animate({ top: "0" }, 25);
//     }
//     else {
//         if (window.innerWidth >= 1024){
//             $('#hunt_end').stop().animate({ top: "300px" }, 100);
//         } else if (window.innerWidth >= 350 && window.innerWidth <= 1023) {
//             $('#hunt_end').stop().animate({ top: "175px" }, 100);
//         } else if (window.innerWidth <= 349) {
//             $('#hunt_end').stop().animate({ top: "140px" }, 100);
//         }
//     }
// });

/*----- Open Menu -----*/
function openNav() {
    document.getElementById("sideMenu").style.width = "250px";
}

/*----- Close Menu -----*/
function closeNav() {
    document.getElementById("sideMenu").style.width = "0";
}

/*----- Open Dropdown Menu -----*/
function openDrop() {
    document.getElementById('drop-inner-div').style.display = 'flex';
    document.getElementById('drop-polls').style.display = 'none';
}

/*----- Close Dropdown Menu -----*/
function closeDrop() {
    document.getElementById('drop-inner-div').style.display = 'none';
    document.getElementById('drop-polls').style.color = "#ffffff";
    document.getElementById('drop-polls').style.display = "block";
}

/*----- Dropdown Menu -----*/
function clickDrop() {
    var menu = document.getElementById('drop-inner-div');
    if (menu.style.display == 'block') {
        document.getElementById('drop-inner-div').style.display = 'none';
        document.getElementById('drop-polls').style.color = "#ffffff";
    } else {
        document.getElementById('drop-inner-div').style.display = 'block';
        document.getElementById('drop-polls').style.color = "#569429";
    }
}

function gotoPolls() {
    document.getElementById("liveTab").click();
}
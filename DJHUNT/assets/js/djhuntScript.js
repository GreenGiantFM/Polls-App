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
                const djvote = document.createElement('a')
                djvote.setAttribute('class', "grid-item-dj grid-item-dj-vote")
                djvote.setAttribute('href', "djpage.html")
                const djbackground = document.createElement('img')
                djbackground.setAttribute('class', "dj-background")
                if (rt.picture_path) 
                    djbackground.setAttribute('src', rt.picture_path)
                else
                    djbackground.setAttribute('src', '../img/GGFM_Favicon.png')

                djbackground.setAttribute('alt', rt.dj_name)
                const djname = document.createElement('p')
                djname.setAttribute('class', 'dj-name')
                djname.innerText = rt.dj_name
                const round = document.createElement('div')
                round.setAttribute('class', 'round')
                const checkbox = document.createElement('input')
                checkbox.setAttribute('type', 'checkbox')
                checkbox.setAttribute('id', `checkbox${index+1}`)
                const label = document.createElement('label')
                label.setAttribute('for', `checkbox${index+1}`)
                round.appendChild(checkbox)
                round.appendChild(label)
                djvote.appendChild(djbackground)
                djvote.appendChild(djname)
                djvote.appendChild(round)
                grid_container_djs.appendChild(djvote)

                // <div class="grid-item-djVoted" id="dj1">
                //     <div class="grid-container-confirmDJs">
                //         <div class="votedBackground">
                //             <img class="votedImage" src="assets/img/d1.jpg">
                //         </div>
                //         <p class="votedTagline"><em class="votedName">Cora</em><br>Tagline</p>
                //     </div>
                // </div>
                const grid_container_confirm = document.getElementById('confirm')
                const djvoted = document.createElement('div')
                djvoted.setAttribute('class', 'grid-item-djVoted')
                djvoted.setAttribute('id', `dj${index+1}`)
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

    // var voteDJ1 = document.getElementById("checkbox1");
    // var voteDJ2 = document.getElementById("checkbox2");
    // var voteDJ3 = document.getElementById("checkbox3");
    // var voteDJ4 = document.getElementById("checkbox4");
    // var voteDJ5 = document.getElementById("checkbox5");
    // var voteDJ6 = document.getElementById("checkbox6");
    // var voteDJ7 = document.getElementById("checkbox7");
    // var voteDJ8 = document.getElementById("checkbox8");

    for (let [index, dj] of djs.entries()) {
        if (dj.checked)
            document.getElementById(`dj${index+1}`).style.display = "block"
        else
            document.getElementById(`dj${index+1}`).style.display = "none"
    }

    // if (voteDJ1.checked == true) {
    //     document.getElementById("dj1").style.display = "block";
    // } else {
    //     document.getElementById("dj1").style.display = "none";
    // }

    // if (voteDJ2.checked == true) {
    //     document.getElementById("dj2").style.display = "block";
    // } else {
    //     document.getElementById("dj2").style.display = "none";
    // }

    // if (voteDJ3.checked == true) {
    //     document.getElementById("dj3").style.display = "block";
    // } else {
    //     document.getElementById("dj3").style.display = "none";
    // }

    // if (voteDJ4.checked == true) {
    //     document.getElementById("dj4").style.display = "block";
    // } else {
    //     document.getElementById("dj4").style.display = "none";
    // }

    // if (voteDJ5.checked == true) {
    //     document.getElementById("dj5").style.display = "block";
    // } else {
    //     document.getElementById("dj5").style.display = "none";
    // }

    // if (voteDJ6.checked == true) {
    //     document.getElementById("dj6").style.display = "block";
    // } else {
    //     document.getElementById("dj6").style.display = "none";
    // }

    // if (voteDJ7.checked == true) {
    //     document.getElementById("dj7").style.display = "block";
    // } else {
    //     document.getElementById("dj7").style.display = "none";
    // }

    // if (voteDJ8.checked == true) {
    //     document.getElementById("dj8").style.display = "block";
    // } else {
    //     document.getElementById("dj8").style.display = "none";
    // }
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

    for (let dj of djs)
        dj.checked = false
    // document.getElementById("checkbox1").checked = false;
    // document.getElementById("checkbox2").checked = false;
    // document.getElementById("checkbox3").checked = false;
    // document.getElementById("checkbox4").checked = false;
    // document.getElementById("checkbox5").checked = false;
    // document.getElementById("checkbox6").checked = false;
    // document.getElementById("checkbox7").checked = false;
    // document.getElementById("checkbox8").checked = false;
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
        let inactive_content = document.getElementById("votingTab");
        inactive_content.style.display = "none";
        let inactive_tab = document.getElementById("voteTab");
        inactive_tab.className = "inactive";

        let active_content = document.getElementById("live");
        active_content.style.display = "block";
        let active_tab = document.getElementById("liveTab");
        active_tab.className = "active";
        evt.currentTarget.className += " active";
    }else if (tabName == 'Vote') {
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
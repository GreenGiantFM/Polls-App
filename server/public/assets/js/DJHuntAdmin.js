/*----- Global Variables -----*/
const djs = []
let selectedDjs = []
let djhunt
let selectedDjID

/*----- Retrieve Data from Database -----*/
$(document).ready(() => {
    $.ajax({
        method: 'get',
        url: '/api/All-DJHunt',
        success: data => {
            djhunt = data.data[0];

            document.getElementById('start-date').value = djhunt.start_date.substr(0, 10);
            document.getElementById('end-date').value = djhunt.end_date.substr(0, 10);

            console.log(djhunt.radio_talents);

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
                const itemdj = document.createElement('div')
                itemdj.setAttribute('class', 'grid-item-dj')
                const djdesk = document.createElement('div')
                djdesk.setAttribute('class', 'grid-container-DJ-desk')
                const deskphoto = document.createElement('div')
                deskphoto.setAttribute('class', "grid-item-DJ-desk-photo")
                const djbackground = document.createElement('img')
                djbackground.setAttribute('class', "dj-background")
                if (rt.picture_path) 
                    djbackground.setAttribute('src', `../../uploads/djhunt/images/${rt.picture_path}`)
                else
                    djbackground.setAttribute('src', '../img/GGFM_Favicon.png')

                djbackground.setAttribute('alt', rt.dj_name)
                djbackground.setAttribute('onclick', `openDJEdit(${index+1})`)
                const djname = document.createElement('p')
                djname.setAttribute('class', 'dj-name')
                djname.innerText = rt.dj_name
                const round = document.createElement('div')
                round.setAttribute('class', 'round-check')
                const checkbox = document.createElement('input')
                checkbox.setAttribute('type', 'checkbox')
                checkbox.setAttribute('name', 'unchecked')
                checkbox.setAttribute('id', `checkbox${index+1}`)
                checkbox.setAttribute('onclick', `huntButton(${index+1})`)
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
                    votedImage.setAttribute('src', `../../uploads/djhunt/images${rt.picture_path}`)
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

                djs.push(checkbox)
            })
            const confirmation = document.getElementById('confirmation')
            const clone = confirmation.cloneNode(true);

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
})

/*----- Open selected Tab -----*/
function openTab(evt, tabName) {
    document.body.style.background = '#ffffff';
    if (tabName == 'Edit') {
        let inactive_content = document.getElementById("votingTab");
        inactive_content.style.display = "none";
        let inactive_tab = document.getElementById("addTab");
        inactive_tab.className = "inactive";

        let active_content = document.getElementById("live");
        active_content.style.display = "block";
        let active_tab = document.getElementById("editTab");
        active_tab.className = "active";
        evt.currentTarget.className += " active";
    } else if (tabName == 'Add') {
        let inactive_content = document.getElementById("live");
        inactive_content.style.display = "none";
        let inactive_tab = document.getElementById("editTab");
        inactive_tab.className = "inactive";

        let active_content = document.getElementById("votingTab");
        active_content.style.display = "block";
        let active_tab = document.getElementById("addTab");
        active_tab.className = "active";
        evt.currentTarget.className += " active";
    }
}

/*----- Open DJ Edit -----*/
function openDJEdit(djNum){

    const dj = djhunt.radio_talents[djNum-1]
    selectedDjID = dj._id

    document.getElementById('update-dj-photo').style.backgroundImage = `url(../../uploads/djhunt/images/${dj.picture_path})`;
    document.getElementById('update-dj-photo').value = dj.picture_path;

    document.getElementById('update-dj_name').placeholder = `DJ ${dj.dj_name}`;
    document.getElementById('update-dj_name').value = dj.dj_name;

    document.getElementById('update-actual_name').placeholder = dj.actual_name;
    document.getElementById('update-actual_name').value = dj.actual_name;

    document.getElementById('update-tagline').placeholder = dj.tagline;
    document.getElementById('update-tagline').value = dj.tagline;

    document.getElementById('update-stinger_path').placeholder = `../../uploads/djhunt/audio/${dj.stinger_path}`;
    document.getElementById('update-stinger_path').value = dj.stinger_path;

    document.getElementById('update-facebook').placeholder = dj.facebook;
    document.getElementById('update-instagram').placeholder = dj.instagram;
    document.getElementById('update-twitter').placeholder = dj.twitter;
    document.getElementById('update-youtube_video').placeholder = dj.youtube_video;
    document.getElementById('update-spotify_playlist').placeholder = dj.spotify_playlist;

    document.getElementById('update-facebook').value = dj.facebook;
    document.getElementById('update-instagram').value = dj.instagram;
    document.getElementById('update-twitter').value = dj.twitter;
    document.getElementById('update-youtube_video').value = dj.youtube_video;
    document.getElementById('update-spotify_playlist').value = dj.spotify_playlist;

    document.getElementById('djPage-desk').style.display = "";
    var desk = document.getElementById("djPage-desk");
    desk.classList.add("chosen-DJPage-desk");
}

/*----- Close DJ Page -----*/
function closeDJEdit() {    
    var desk = document.getElementById("djPage-desk");
    if (desk.classList.contains("chosen-DJPage-desk")) {
        desk.classList.remove("chosen-DJPage-desk");
    }
    desk.style.display = "none";
}

/*----- Enable / Disable vote Button -----*/
function huntButton(djNum) {

    const dj = djhunt.radio_talents[djNum-1]
    
    let value = true;

    

    for (let dj of djs)
        if (dj.checked)
            value = false;

    //document.getElementById("huntSubmit").disabled = value
    document.getElementById("huntDeleteSelected").disabled = value
    if (value) {
        //document.getElementById("huntSubmit").style.cursor = "not-allowed";
        document.getElementById("huntDeleteSelected").style.cursor = "not-allowed";

    } else {
        //document.getElementById("huntSubmit").style.cursor = "pointer";
        document.getElementById("huntDeleteSelected").style.cursor = "not-allowed";

    }

    //console.log(document.getElementById(`checkbox${djNum}`).getAttribute('name'));
    let status = document.getElementById(`checkbox${djNum}`).checked;

    if (status) {
        let id = dj._id;
        selectedDjs.push(id);
    } else {
        selectedDjs = selectedDjs.filter((rt)=>{
            return rt !== dj._id;
        })
    }

   

    

    console.log("selected djs",selectedDjs);
        

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
    document.getElementById("huntDeleteAll").type = "button";
    document.getElementById("huntDeleteSelected").type = "button";
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

/*------------Add-------------*/
/*show Image Preview*/
function showPreview(event){
    if(event.target.files.length > 0){
        var preview = document.getElementById("file-ip-1-preview");
        preview.innerHTML = "";
        const reader = new FileReader();
        reader.onload = function() {
            const result = reader.result;
            preview.style.backgroundImage = "url("+result+")";
        }
        reader.readAsDataURL(event.target.files[0]);
        var upload = document.getElementById("label-file-ip-1");
        upload.innerHTML = "Change Image";
    }
}
/*show Stinger File Preview*/
function showName(event) {
    if (event.target.files.length > 0) {
        var preview = document.getElementById("stinger-label");
        const reader = new FileReader();
        reader.onload = function () {
            preview.innerHTML = event.target.files[0].name;
        }
        reader.readAsDataURL(event.target.files[0]);
    }
}

/*------------Edit------------*/
/*show Image Preview*/
function showUpdatePreview(event) {
    if (event.target.files.length > 0) {
        var preview = document.getElementById("update-dj-photo");
        const reader = new FileReader();
        reader.onload = function () {
            const result = reader.result;
            preview.style.backgroundImage = "url(" + result + ")";
        }
        reader.readAsDataURL(event.target.files[0]);
    }
}

/*show Stinger File Preview*/
function showUpdateName(event) {
    if (event.target.files.length > 0) {
        var preview = document.getElementById("update-stinger-label");
        const reader = new FileReader();
        reader.onload = function () {
            preview.innerHTML = event.target.files[0].name;
        }
        reader.readAsDataURL(event.target.files[0]);
    }
}

const form = document.getElementById("dj-hunt-form")
form.addEventListener('submit', function(event) {
    event.preventDefault()
    const formData = new FormData(this)

    $.ajax({
        method: 'post',
        url: '/admin/home/dj-hunt',
        data: formData,
        processData: false,
        contentType: false,
        success: data => {
            Swal.fire({
                title: 'Success!',
                icon: 'success',
                iconColor: "#569429",
                timer: 10000,
                timerProgressBar: true,
                position: "center",
                confirmButtonText: 'Awesome!',
            })

        },
        error: e => {
            alert('error')
        }
    })
    
})

function logout() {
    $.ajax({
        method: 'get',
        url: '/admin/logout',
        success: data => {
            window.location = "/admin"
        }
    })
}

function deleteConfirmModal(){
    document.getElementById("deleteModal").style.display = "block";

}

function deleteCancelModal(){
    document.getElementById("deleteModal").style.display = "none";

}

function deleteAllDjs(){
    

    document.getElementById("deleteModal").style.display = "none";

    $.ajax({
        method: 'post',
        url: '/admin/dj-hunt/delete/all',
        success: () => {
            Swal.fire({
                title: 'Successfly deleted all djs!',
                icon: 'success',
                iconColor: "#569429",
                timer: 10000,
                timerProgressBar: true,
                position: "center",
                confirmButtonText: 'Awesome!',
            })

        },
        error: e => {
            alert('error')
        }
    })

}

function changeDate() {
    const start_date = document.getElementById('start-date').value
    const end_date = document.getElementById('end-date').value

    if (start_date && end_date) {

        djhunt.start_date = start_date
        djhunt.end_date = end_date

        $.ajax({
            method: 'put',
            url: `/admin/djhunt/${djhunt._id}`,
            data: djhunt,
            success: function (data) {
                Swal.fire({
                    title: 'Success!',
                    icon: 'success',
                    iconColor: "#569429",
                    timer: 10000,
                    timerProgressBar: true,
                    position: "center",
                    confirmButtonText: 'Awesome!',
                })
            },
            error: function () {
                Swal.fire({
                    title: 'Error!',
                    text: 'Invalid date',
                    icon: 'error',
                    confirmButtonText: 'Okay'
                })
            }
        })
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Invalid date',
            icon: 'error',
            confirmButtonText: 'Okay'
        })
    }
}

function openDeleteConfirm(){

    document.getElementById("deleteSelectedModal").style.display = "block";

}

function deleteSelectedCancelModal(){
    document.getElementById("deleteSelectedModal").style.display = "block";

}

function deleteSelectedDjs(){

    document.getElementById("deleteSelectedModal").style.display = "none";

    const selectedData = selectedDjs;
    

    //console.log("THE DATA:",selectedData);

    //alert(selectedData)
    
    $.ajax({
        method: 'post',
        url: '/admin/dj-hunt/delete/selected',
        data: {selectedData:selectedData},
        success: (data) => {
            Swal.fire({
                title: 'Successfly deleted selected djs!',
                icon: 'success',
                iconColor: "#569429",
                timer: 10000,
                timerProgressBar: true,
                position: "center",
                confirmButtonText: 'Awesome!',
            })

        },
        error: e => {
            alert('error')
        }
    })
    
}


const form2 = document.getElementById("dj-hunt-update")
form2.addEventListener('submit', function(event) {
    event.preventDefault()
    const formData = new FormData(this)

    console.log(formData)
    console.log(selectedDjID)
    
    $.ajax({
        method: 'post',
        url: `/admin/dj-hunt/edit/${selectedDjID}`,
        data: formData,
        processData: false,
        contentType: false,
        success: data => {
            Swal.fire({
                title: 'Success!',
                icon: 'success',
                iconColor: "#569429",
                timer: 10000,
                timerProgressBar: true,
                position: "center",
                confirmButtonText: 'Awesome!',
            })

        },
        error: e => {
            alert('error')
        }
    })
    
    
})
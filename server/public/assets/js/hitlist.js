/*-----  VARIABLE REFERENCE -----*/
// 1. song# = row
// 2. song#Check = songCheck
// 3. songNumber = title
// 4. percentNumber = percent

const voteSubmit = document.getElementById("voteSubmit")
const songs = []
let hitlist

$(document).ready(() => {

    $.ajax({
        method: 'get',
        url: '/api/All-Hitlist',
        success: data => {
            hitlist = data.data[0];
            // set dates
            const closing = document.getElementById('hitlist-date')

            const formattedDate = new Date(hitlist.end_date)
            .toLocaleDateString({},
            {timeZone:"UTC",month:"long", day:"2-digit", year:"numeric"}
            )
            const sp = formattedDate.split(' ')
            closing.innerText = `${sp[0]} ${sp[1]} ${sp[2]}`

            setCountdown()
            retrieveSongs()
        }
    })
})

function retrieveSongs() {
    document.getElementById('grid-container-voting-tab').innerHTML = ""
    document.getElementById('grid-container-live-tab').innerHTML = ""
    songs.length = 0

    // get total overall for the percentage
    let totalVotes = 0
    hitlist.songs.map(s => {
        totalVotes += s.vote_count
    })

    // sort in ascending order according to number of votes bc prepend
    const live_songs = [ ...hitlist.songs ]
    live_songs.sort((a, b) => a.vote_count - b.vote_count)

    // set songs
    hitlist.songs.map((s, index) => {
        /*-----  Create Elements -----*/
        const grid_item_voting = document.createElement('div')
        const grid_container_voting = document.createElement('div')
        const grid_item_song_input = document.createElement('div')
        const checkSong = document.createElement('input')
        const grid_item_song = document.createElement('div')
        const label = document.createElement('label')
        const img = document.createElement('img')
        const grid_item_song_voteDesk = document.createElement('div')
        const description_song = document.createElement('p')
        const title = document.createElement('em')
        const grid_item_song_desk = document.createElement('div')
        const description_percent = document.createElement('p')                        
        
        /*----- Set Attributes -----*/
        grid_item_voting.setAttribute('class', 'grid-item-voting')
        grid_item_voting.setAttribute('id', `song${index+1}`)
        grid_container_voting.setAttribute('class', 'grid-container-voting')
        grid_item_song_input.setAttribute('class', 'grid-item-song-input')
        checkSong.setAttribute('class', 'checkSong')
        checkSong.setAttribute('type', 'checkBox')
        checkSong.setAttribute('name', 'checkSong')
        checkSong.setAttribute('id', s._id)
        checkSong.setAttribute('onclick', 'changeBackground()')
        grid_item_song.setAttribute('class', 'grid-item-song')
        label.setAttribute('class', 'label')
        label.setAttribute('for', `song${index+1}`)
        img.setAttribute('class', 'album')
        if (s.picture_path)
            img.setAttribute('src', s.picture_path)
        else
            img.setAttribute('src', 'assets/img/GGFM_Favicon.png')
        img.setAttribute('alt', s.title)
        grid_item_song_voteDesk.setAttribute('class', 'grid-item-song-voteDesk')
        description_song.setAttribute('class', 'description')
        title.setAttribute('class', 'title')
        grid_item_song_desk.setAttribute('class', 'grid-item-song-desk')
        description_percent.setAttribute('class', 'description')

        /*----- Assign variables inside elements -----*/
        const br = document.createElement('br')
        const artist = document.createTextNode(s.artist.length > 35 ? s.artist.substring(0, 32) + "..." : s.artist)
        title.innerText = s.title.length > 56 ? s.title.substring(0, 53) + "..." : s.title
        description_song.appendChild(title)
        description_song.appendChild(br)
        description_song.appendChild(artist)
        description_percent.innerText = `${totalVotes ? ((s.vote_count/totalVotes)*100).toFixed(2) : 0}%`

        /*----- push data to html -----*/
        grid_item_song_desk.appendChild(description_percent)
        grid_item_song_voteDesk.appendChild(description_song)
        label.innerHTML = `<iframe src="${s.spotify_link}" width="80" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`
        grid_item_song.appendChild(label)
        grid_item_song_input.appendChild(checkSong)
        grid_container_voting.appendChild(grid_item_song_input)
        grid_container_voting.appendChild(grid_item_song)
        grid_container_voting.appendChild(grid_item_song_voteDesk)
        grid_container_voting.appendChild(grid_item_song_desk)
        grid_item_voting.appendChild(grid_container_voting)
        document.getElementById('grid-container-voting-tab').prepend(grid_item_voting)
        
        grid_container_voting.setAttribute('id', index)
        grid_container_voting.style.cursor = "pointer"
        grid_item_song_voteDesk.setAttribute('id', index)
        grid_item_song.setAttribute('id', index)
        title.setAttribute('id', index)
        description_song.setAttribute('id', index)
        description_percent.setAttribute('id', index)
        grid_item_song_desk.setAttribute('id', index)
        grid_container_voting.addEventListener('click', selectSong)

        // <div class="grid-item-voting" id="song7">
        //     <div class="grid-container-voting">
        //         <div class="grid-item-song-input">
        //             <input type="checkbox" class="checkSong" id="song7Check" onclick="changeBackground()">
        //         </div>
        //         <div class="grid-item-song">
        //             <label for="song7">
        //                 <img class="album" src="assets\img\7.jpg" alt='The Valley of The Pagans'>
        //             </label>
        //         </div>
        //         <div class="grid-item-song-voteDesk">
        //             <p id="songSeven" class="description"><em class="title">The Valley of The Pagans</em><br />Gorillaz</p>
        //         </div>
        //         <div class="grid-item-song-desk">
        //             <p id="percentSeven" class="description">5%</p>
        //         </div>
        //     </div>
        // </div>

        grid_item_voting.addEventListener('mouseenter', e => {
            grid_item_song_voteDesk.style.backgroundColor = "#DCDCDC";
        });
        grid_item_voting.addEventListener('mouseleave', e => {
            grid_item_song_voteDesk.style.backgroundColor = "";
        });

        /*----- Global Voting Songs Object -----*/
        songs.push({
            row: grid_item_voting,
            desk: grid_item_song_voteDesk,
            songCheck: checkSong,
            title: description_song,
            percentNumber: description_percent
        })

        /*----- Live Tab -----*/
        // const grid_container_live_tab = document.getElementById('grid-container-live-tab')
        // const copy = grid_item_voting.cloneNode(true)
        // copy.setAttribute('class', 'grid-item-live')
        // const grid_container_songs = copy.firstChild // grid-container-voting
        // grid_container_songs.setAttribute('class', 'grid-container-songs')
        // const grid_item_song_number = grid_container_songs.firstChild
        // grid_item_song_number.setAttribute('class', 'grid-item-song-number')
        // grid_item_song_number.innerHTML = hitlist.songs.length-index
        // const grid_item_song_liveDesk = grid_container_songs.childNodes[2]
        // const em_percent = document.createElement('em')
        // em_percent.setAttribute('class', 'percent')
        // em_percent.appendChild(document.createElement('br'))
        // em_percent.appendChild(document.createTextNode(`${totalVotes ? (s.vote_count/totalVotes)*100 : 0}%`))
        // grid_item_song_liveDesk.setAttribute('class', 'grid-item-song-liveDesk')
        // grid_item_song_liveDesk.firstChild.appendChild(em_percent)

        // console.log(copy)
        // copy.addEventListener('mouseenter', e => {})
        // copy.addEventListener('mouseleave', e => {})
        // grid_container_live_tab.prepend(copy)
    })

    live_songs.map((s, index) => {
        /*-----  Create Elements -----*/
        const grid_item_live = document.createElement('div')
        const grid_container_songs = document.createElement('div')
        const grid_item_song_number = document.createElement('div')
        const grid_item_song = document.createElement('div')
        const img = document.createElement('img')
        const grid_item_song_liveDesk = document.createElement('div')
        const description_song = document.createElement('p')
        const title = document.createElement('em')
        const em_percent = document.createElement('em')
        const grid_item_song_desk = document.createElement('div')
        const description_percent = document.createElement('p')
        const br = document.createElement('br')
        const artist = document.createTextNode(s.artist)
        
        /*----- Set Attributes -----*/
        grid_item_live.setAttribute('class', 'grid-item-live')
        grid_container_songs.setAttribute('class', 'grid-container-songs')
        grid_item_song_number.setAttribute('class', 'grid-item-song-number')
        grid_item_song.setAttribute('class', 'grid-item-song')
        img.setAttribute('class', 'album')
        if (s.picture_path)
            img.setAttribute('src', s.picture_path)
        else
            img.setAttribute('src', 'assets/img/GGFM_Favicon.png')
        img.setAttribute('alt', s.title)
        grid_item_song_liveDesk.setAttribute('class', 'grid-item-song-liveDesk')
        description_song.setAttribute('class', 'description')
        title.setAttribute('class', 'title')
        em_percent.setAttribute('class', 'percent')
        grid_item_song_desk.setAttribute('class', 'grid-item-song-desk')
        description_percent.setAttribute('class', 'description')
        grid_item_song_liveDesk.setAttribute('class', 'grid-item-song-liveDesk')
        

        /*----- Assign variables inside elements -----*/
        
        title.innerText = s.title
        em_percent.appendChild(document.createElement('br'))
        em_percent.appendChild(document.createTextNode(`${totalVotes ? ((s.vote_count/totalVotes)*100).toFixed(2) : 0}%`))
        description_percent.innerText = `${totalVotes ? ((s.vote_count/totalVotes)*100).toFixed(2) : 0}%`

        /*----- push data to html -----*/
        grid_item_song_desk.appendChild(description_percent)
        grid_item_song_liveDesk.appendChild(description_song)
        grid_item_song.innerHTML = `<iframe src="${s.spotify_link}" width="80" height="80" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`
        grid_item_song_number.innerText = live_songs.length-index
        grid_container_songs.appendChild(grid_item_song_number)
        grid_container_songs.appendChild(grid_item_song)
        grid_container_songs.appendChild(grid_item_song_liveDesk)
        grid_container_songs.appendChild(grid_item_song_desk)
        description_song.appendChild(title)
        description_song.appendChild(br)
        description_song.appendChild(artist)
        description_song.appendChild(em_percent)
        grid_item_live.appendChild(grid_container_songs)
        document.getElementById('grid-container-live-tab').prepend(grid_item_live)

        grid_item_live.addEventListener('mouseenter', e => {})
        grid_item_live.addEventListener('mouseleave', e => {})
    })

    document.getElementById('grid-container-voting-tab').append(document.createElement('br'))
    document.getElementById('grid-container-voting-tab').append(document.createElement('br'))
    document.getElementById('grid-container-live-tab').append(document.createElement('br'))
    document.getElementById('grid-container-live-tab').append(document.createElement('br'))
}

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

    /*-----  dynamic -----*/
    let value = true

    for (let song of songs) {
        if (song.songCheck.checked == true)
            value = false;
    }
    voteSubmit.disabled = value;
}

function selectSong(event) {
    const index = event.target.id
    if (index!=='' && index < songs.length)
        songs[index].songCheck.click()
    changeBackground()
}

/*----- Change BG of selected songs -----*/
function changeBackground() {

    /*-----  dynamic -----*/
    for (let song of songs) {

        const { songCheck, row, title, desk, percentNumber } = song
        if (songCheck.checked == true) {

            row.addEventListener('mouseenter', e => {
                desk.style.backgroundColor = "#569429cb";
            });
            row.addEventListener('mouseleave', e => {
                desk.style.backgroundColor = "#569429cb";
            });

            desk.style.backgroundColor = "#569429cb";
            title.style.color = "#3a3a3a";
            voteSubmit.disabled = false;

        } else {

            row.addEventListener('mouseenter', e => {
                desk.style.backgroundColor = "#DCDCDC";
            });
            row.addEventListener('mouseleave', e => {
                desk.style.backgroundColor = "";
            });

            desk.style.backgroundColor = "#ffffff";
            title.style.color = "#8d8d8d";
            voteButton()
        }
    }

}

/*----- Confirm Vote -----*/
function openConfirm() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("voteConfirmed").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
}

/*----- Cancel Vote -----*/
function cancel() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("voteConfirmed").style.display = "none";
    document.getElementById("confirmation").style.display = "none";
}

/*----- Vote Submitted -----*/
async function submitVote() {
    // 1. song# = row
    // 2. song#Check = songCheck
    // 3. songNumber = title
    // 4. percentNumber = percent

    $.ajax({
        method: 'get',
        url: '/api/All-Hitlist',
        success: data => {
            hitlist = data.data[0]

            for (let [index, song] of songs.entries()) {
                const { songCheck } = song
                
                if (songCheck.checked)
                    hitlist.songs[index].vote_count++;
            }

            $.ajax({
                method: 'put',
                url: `/api/Hitlist/${hitlist._id}`,
                data: hitlist,
                success: data => {
                    document.getElementById("confirmation").style.display = "none";
                    document.getElementById("voteConfirmed").style.display = "block";
                    retrieveSongs()
                    voteButton()
                },
                error: () => {
                    alert('error')
                }
            })
        }
    })

}

/*----- Close Overlay -----*/
function closeConfirm() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("voteConfirmed").style.display = "none";
    document.getElementById("confirmation").style.display = "none";
    document.getElementById("liveTab").click();
}

/*----- Open selected Tab -----*/
function openTab(evt, tabName) {
    if(tabName == 'Live'){
        let inactive_content = document.getElementById("vote");
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

        let active_content = document.getElementById("vote");
        active_content.style.display = "block";
        let active_tab = document.getElementById("voteTab");
        active_tab.className = "active";
        evt.currentTarget.className += " active";
    }
}

/*----- Countdown Timer -----*/
/* June 1, 2021 20:30:00 */
/* April 20, 2021 11:11:00 */
function setCountdown() {
    var votingPeriod = new Date(hitlist.end_date).getTime();
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
}

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

/*----- Open Dropdown Menu -----*/
function openDrop() {
    document.getElementById('drop-inner-div').style.display = 'flex';
    document.getElementById('drop-polls').style.display = "none";
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
const songs = []
let hitlist

$(document).ready(() => {

    $.ajax({
        method: 'get',
        url: '/admin/All-Hitlist',
        success: data => {
            hitlist = data.data[0];
            // set dates
            document.getElementById('start-date').value = hitlist.start_date.substr(0, 10);
            document.getElementById('end-date').value = hitlist.end_date.substr(0, 10);

            console.log(hitlist.songs)
            // get total overall for the percentage
            let totalVotes = 0
            hitlist.songs.map(s => {
                totalVotes += s.vote_count
            })

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
                const artist = document.createTextNode(s.artist)
                title.innerText = s.title
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
                document.getElementById('grid-container').prepend(grid_item_voting)

                /*----- Global Voting Songs Object -----*/
                songs.push({
                    row: grid_item_voting,
                    songCheck: checkSong,
                    title: description_song,
                    percentNumber: description_percent
                })
                
                grid_container_voting.onclick = () => selectSong(index)

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
                    grid_item_voting.style.backgroundColor = "#DCDCDC";
                });
                grid_item_voting.addEventListener('mouseleave', e => {
                    grid_item_voting.style.backgroundColor = "";
                });

                

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

/*----- Change BG of selected songs -----*/
function changeBackground() {
    /*-----  dynamic -----*/
    for (let song of songs) {

        const { songCheck, row, title, percentNumber } = song
        if (songCheck.checked == true) {

            row.addEventListener('mouseenter', e => {
                row.style.backgroundColor = "#569429cb";
            });
            row.addEventListener('mouseleave', e => {
                row.style.backgroundColor = "#569429cb";
            });

            row.style.backgroundColor = "#569429cb";
            title.style.color = "#3a3a3a";
            percentNumber.style.color = "#f2f2f2";
            document.getElementById("remove").disabled = false;

        } else {
            row.addEventListener('mouseenter', e => {
                row.style.backgroundColor = "#DCDCDC";
            });
            row.addEventListener('mouseleave', e => {
                row.style.backgroundColor = "";
            });

            row.style.backgroundColor = "#ffffff";
            title.style.color = "#8d8d8d";
            percentNumber.style.color = "#8d8d8d";
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

function addSong() {
    const title = document.getElementById('title')
    const artist = document.getElementById('artist')
    const spotify_link = document.getElementById('spotify_link')

    hitlist.songs.push({ 
        title: title.value, 
        artist: artist.value, 
        spotify_link: spotify_link.value
    })

    $.ajax({ // this one works
        method: 'put',
        url: `/admin/hitlist/${hitlist._id}`,
        data: hitlist,
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
            .then(() =>{
                title.value = "";
                artist.value = "";
                spotify_link.value = "";
            })
        },
        error: function () {
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong!',
                icon: 'error',
                confirmButtonText: 'Okay'
              })
        }
    })
}

function changeDate() {
    const start_date = document.getElementById('start-date').value
    const end_date = document.getElementById('end-date').value

    if (start_date && end_date) {

        hitlist.start_date = document.getElementById('start-date').value
        hitlist.end_date = document.getElementById('end-date').value
    
        $.ajax({ // this one works
            method: 'put',
            url: `/admin/hitlist/${hitlist._id}`,
            data: hitlist,
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

/*----- Enable / Disable vote Button -----*/
function voteButton() {
    /*-----  dynamic -----*/
    let value = true

    for (let song of songs) {
        if (song.songCheck.checked == true)
            value = false;
    }
    document.getElementById("remove").disabled = value;
}

function selectSong(index) {
    songs[index].songCheck.click()
    changeBackground()
}
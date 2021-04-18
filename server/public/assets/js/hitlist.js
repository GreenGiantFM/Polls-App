/*-----  VARIABLE REFERENCE -----*/
// 1. song# = row
// 2. song#Check = songCheck
// 3. songNumber = title
// 4. percentNumber = percent

const voteSubmit = document.getElementById("voteSubmit")
const songs = []

$(document).ready(() => {

    $.ajax({
        method: 'get',
        url: '/api/All-Hitlist',
        success: data => {
            const hitlist = data.data[0];
            // set dates
            const closing = document.getElementById('vote_time')
            closing.innerText = `Voting Lines Close by: ${new Date(hitlist.end_date).toDateString()}`
            
            // get total overall for the percentage
            let totalVotes = 0
            hitlist.songs.map(s => {
                totalVotes += s.vote_count
            })

            // sort in ascending order according to number of votes bc prepend
            hitlist.songs.sort((a, b) => a.vote_count - b.vote_count)

            console.log(hitlist.songs)

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
                description_percent.innerText = `${totalVotes ? (s.vote_count/totalVotes)*100 : 0}%`

                /*----- push data to html -----*/
                grid_item_song_desk.appendChild(description_percent)
                grid_item_song_voteDesk.appendChild(description_song)
                label.appendChild(img)
                grid_item_song.appendChild(label)
                grid_item_song_input.appendChild(checkSong)
                grid_container_voting.appendChild(grid_item_song_input)
                grid_container_voting.appendChild(grid_item_song)
                grid_container_voting.appendChild(grid_item_song_voteDesk)
                grid_container_voting.appendChild(grid_item_song_desk)
                grid_item_voting.appendChild(grid_container_voting)
                document.getElementById('grid-container-voting-tab').prepend(grid_item_voting)

                grid_item_voting.addEventListener('mouseenter', e => {
                    grid_item_voting.style.backgroundColor = "#DCDCDC";
                });
                grid_item_voting.addEventListener('mouseleave', e => {
                    grid_item_voting.style.backgroundColor = "";
                });

                /*----- Global Voting Songs Object -----*/
                songs.push({
                    row: grid_item_voting,
                    songCheck: checkSong,
                    title: description_song,
                    percentNumber: description_percent
                })

                /*----- Live Tab -----*/
                const grid_container_live_tab = document.getElementById('grid-container-live-tab')
                const copy = grid_item_voting.cloneNode(true)
                copy.setAttribute('class', 'grid-item-live')
                const grid_container_songs = copy.firstChild // grid-container-voting
                grid_container_songs.setAttribute('class', 'grid-container-songs')
                const grid_item_song_number = grid_container_songs.firstChild
                grid_item_song_number.setAttribute('class', 'grid-item-song-number')
                grid_item_song_number.innerHTML = hitlist.songs.length-index
                const grid_item_song_liveDesk = grid_container_songs.childNodes[2]
                const em_percent = document.createElement('em')
                em_percent.setAttribute('class', 'percent')
                em_percent.appendChild(document.createElement('br'))
                em_percent.appendChild(document.createTextNode(`${totalVotes ? (s.vote_count/totalVotes)*100 : 0}%`))
                grid_item_song_liveDesk.setAttribute('class', 'grid-item-song-liveDesk')
                grid_item_song_liveDesk.firstChild.appendChild(em_percent)

                console.log(copy)
                copy.addEventListener('mouseenter', e => {})
                copy.addEventListener('mouseleave', e => {})
                grid_container_live_tab.prepend(copy)
            })
            console.log(songs)
        }
    })
})

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
    console.log(voteSubmit)
    voteSubmit.disabled = value;
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
            voteSubmit.disabled = false;

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
    // 1. song# = row
    // 2. song#Check = songCheck
    // 3. songNumber = title
    // 4. percentNumber = percent

    for (let song of songs) {
        const { songCheck, row, title, percentNumber } = song
        
        songCheck.checked = false;
        row.style.backgroundColor = "#ffffff";
        title.style.color = "#8d8d8d";
        percentNumber.style.color = "#8d8d8d";
    }

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
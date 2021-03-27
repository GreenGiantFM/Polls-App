

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
    document.getElementById("djvote-overlay").style.display = "block";
    document.getElementById("voteConfirmed").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
}

/*----- Cancel Vote -----*/
function cancelVote() {
    document.getElementById("djvote-overlay").style.display = "none";
    document.getElementById("voteConfirmed").style.display = "none";
    document.getElementById("confirmation").style.display = "none";
}



/*----- Close Overlay -----*/
function closeConfirm() {
    document.getElementById("djvote-overlay").style.display = "none";
    document.getElementById("voteConfirmed").style.display = "none";
    document.getElementById("confirmation").style.display = "none";
}

/*----- Open selected Tab -----*/
function openTab(evt, tabName) {
    if(tabName == 'Live'){
        inactive_content = document.getElementById("vote");
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

        active_content = document.getElementById("vote");
        active_content.style.display = "block";
        active_tab = document.getElementById("voteTab");
        active_tab.className = "active";
        evt.currentTarget.className += " active";
    }
}

/*----- selecting dj card -------*/



  


function voteDj(){
    const votedjbutton = document.getElementsByClassName('round')
    //const votedjbutton = document.querySelectorAll("input[type=checkbox][name=dj-check]");
    //console.log(votedjbutton);

    
    for (let i = 0; i < votedjbutton.length; i++) {
        let button = votedjbutton[i]
        
        buttonCheck = button.children[0]
        
        //console.log(button)
        //console.log(buttonCheck)
        
        //buttonCheck.addEventListener('change', addDj)

        buttonCheck.addEventListener('change', (event) => {
            if (event.currentTarget.checked) {
                addDj(event);
                console.log('checked');
            } else {
                removeDj(event);
                console.log('not checked');
            }
        })

        
       
    }

}

function addDj(event){
    //event.preventDefault();
    console.log(button);
    var button = event.target;
    var addedDj = button.parentElement.parentElement;
    console.log(addedDj)
    var djImage = addedDj.getElementsByClassName('dj-background')[0].src;
    var djName = addedDj.getElementsByClassName('dj-name')[0].innerText;
    
    createVotedDj(djName, djImage);

}

function createVotedDj(name, image){
    var djColumn = document.createElement('div');
    djColumn.classList.add('votedDjCard');
    djCard = document.getElementsByClassName('votedDjs')[0];

    var djCardContent = `<div class="votedDjCard">
    <div class="votedBackground">
        <img class="votedImage"src="${image}" >
    </div>
    <h2 class="votedName">${name}</h2>
    <p class="votedTagline">Tagline</p> 
    </div>`
    console.log(djCard)
    console.log(djColumn)
    djColumn.innerHTML = djCardContent;
    djCard.append(djColumn);

}

function removeDj(event){
    var buttonClicked = event.target
    btnParent =  buttonClicked.parentElement.parentElement;
    votedDjname = btnParent.getElementsByClassName('dj-name')[0].innerText;


    removedDjs = document.querySelectorAll('.votedDjCard');

    for (let i = 0; i < removedDjs.length; i++){
        
        removedDj= removedDjs[i];

        removedName = removedDj.getElementsByClassName('votedName')[0].innerText;

        if (removedName === votedDjname) {
            removedDj.remove();
        }

    }

    //  console.log(removedDjs)


    //console.log(votedDjname);
}

// use as a an arugment to find 

voteDj();


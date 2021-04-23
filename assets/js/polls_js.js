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
    document.getElementById('drop-inner-div').style.display = 'block';
    document.getElementById('drop-polls').style.color = "#569429";
}

/*----- Close Dropdown Menu -----*/
function closeDrop() {
    document.getElementById('drop-inner-div').style.display = 'none';
    document.getElementById('drop-polls').style.color = "#ffffff";
}

/*----- Dropdown Menu -----*/
function clickDrop() {
    var menu = document.getElementById('drop-inner-div');
    console.log(menu.style.display);
    if (menu.style.display == 'block') {
        document.getElementById('drop-inner-div').style.display = 'none';
        document.getElementById('drop-polls').style.color = "#ffffff";
    } else {
        document.getElementById('drop-inner-div').style.display = 'block';
        document.getElementById('drop-polls').style.color = "#569429";
    }
}
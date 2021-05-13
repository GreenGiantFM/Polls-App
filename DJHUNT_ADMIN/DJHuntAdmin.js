/*----- Open selected Tab -----*/
function openTab(evt, tabName) {
    document.body.style.background = '#ffffff';
    if (tabName == 'Add') {
        let inactive_tab = document.getElementById("liveTab");
        inactive_tab.className = "inactive";

        let active_tab = document.getElementById("voteTab");
        active_tab.className = "active";
        evt.currentTarget.className += " active";
        
    } else if (tabName == 'Edit') {
        

        let inactive_tab = document.getElementById("voteTab");
        inactive_tab.className = "inactive";

        let active_tab = document.getElementById("liveTab");
        active_tab.className = "active";
        evt.currentTarget.className += " active";
    }
}

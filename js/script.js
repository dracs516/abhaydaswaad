const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});

function openNav() {
    menuIsOpen = true;
    document.getElementById("sidebar").style.width = "30%";
    document.body.style = "background-color: rgba(0, 0, 0, 0.5);";
}

function closeNav() {
    menuIsOpen = false;
    document.getElementById("sidebar").style.width = "0";
    document.body.style = "opacity:1;";
}


function openNav2() {
    menuIsOpen = true;
    document.getElementById("sidebar2").style.width = "30%";
    document.body.style = "background-color: rgba(0, 0, 0, 0.5);";
}

function closeNav2() {
    menuIsOpen = false;
    document.getElementById("sidebar2").style.width = "0";
    document.body.style = "opacity:1;";
}
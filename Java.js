function updateMode(mode) {
    var body = document.body;
    body.classList.remove( "dark-mode","light-mode");
    body.classList.add(mode);
    
    localStorage.setItem("mode", mode);
}
function loadMode() {
    var mode = localStorage.getItem("mode");

    if (!mode) {
        mode = "dark-mode";
    }

    updateMode(mode);
}
window.onload = loadMode;


//#region 
function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);

    // إغلاق جميع القوائم
    var allDropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < allDropdowns.length; i++) {
        var otherDropdown = allDropdowns[i];
        if (otherDropdown.id !== dropdownId) {
            otherDropdown.classList.remove('show');
        }
    }

    // فتح أو إغلاق القائمة المحددة
    dropdown.classList.toggle("show");
}

// إغلاق القائمة عند النقر خارجها
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
//#endregion



//#region 
// const darkbtn = document.getElementById('darkbtn');
// const body = document.body;

// const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// if (isDarkMode) {
//     body.classList.add('dark-mode');
//     darkbtn.checked = true;
// }

// darkbtn.addEventListener('change', () => {
//     if (darkbtn.checked) {
//         body.classList.add('dark-mode');
//         localStorage.setItem('darkMode', 'enabled');
//     } else {
//         body.classList.remove('dark-mode');
//         localStorage.setItem('darkMode', 'disabled');
//     }
// });
//#endregion
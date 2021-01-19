
function display_menu() {
    var menu = document.getElementById('sidebar-nav-list');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'flex';
    }
}
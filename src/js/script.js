/**
 * Created by frycek on 07.03.17.
 */
/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.height = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.height = "0";
}

document.getElementById('hamburger').addEventListener('click', openNav);
document.getElementById('menuCloseBtn').addEventListener('click', closeNav);


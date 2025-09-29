/* 
Default js for all contents related stuff.
This needs to be sourced for toggle menu to work on mobile or smaller screen 
unless it has its own js file to deal with toggle menu.
 */

/* toggle menu sidenav when using mobile devices or the width of the screen does not exceed maximum size */
const menu = document.getElementById('sidenav');
const burger =  document.getElementById('menu_button');

burger.addEventListener('click', function () { 
  menu.classList.toggle('open');
});

// click anywhere else that is not the navbar or the burger closes the menu
document.addEventListener('click', function(event) { 
  if(menu.classList.contains('open') && !menu.contains(event.target) && !burger.contains(event.target)) { 
    menu.classList.remove('open');
  }
});





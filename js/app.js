/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const grapAllSections = document.querySelectorAll('section');//take all sections to a nodelist(array).
const navList = document.getElementById('navbar__list');//select the ul.
const appendFragment = document.createDocumentFragment();//fragment to append the li.

//build lists for each section
grapAllSections.forEach(function(elemnt, index){
    let li= document.createElement("li");
    let getDataNav = elemnt.getAttribute("data-nav")
    li.setAttribute("class","menu__link")
    //li.style.color = "red";
    li.innerText = getDataNav;
    appendFragment.appendChild(li);
    li.addEventListener("click", function(){
        elemnt.scrollIntoView({behavior: "smooth"});
    })
});

navList.appendChild(appendFragment);

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active

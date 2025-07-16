const Menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const search = document.getElementsByName("searchSubjects")

Menu.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

search.addEventListener("click", (e) => {
    e.preventDefault();
});

// Checks if user has logged in
function loggedIn() {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('email') == true) {
        var a = document.getElementById('nav-wrapper').getElementsByTagName('a'),
        length = a.length; 
        for(var i=0; i< length; i++){
            a[i].href += '?email';
        }
        var a = document.getElementById('enrollButtonHome').getElementsByTagName('a'),
        length = a.length; 
        for(var i=0; i< length; i++){
            a[i].href += '?email';
        }
    }
}
function loggedIn2() {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('email') == true) {
        
    }
}
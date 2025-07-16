var about = document.getElementById('About');
var teachers = document.getElementById('Teachers');
var contact = document.getElementById('Contact');

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Teachers').style.display = 'none';
    document.getElementById('Contact').style.display = 'none';
});

function hideShowAbout() {
    about.style.display = 'block';
    teachers.style.display = 'none';
    contact.style.display = 'none';
}
function hideShowTeachers() {
    about.style.display = 'none';
    teachers.style.display = 'block';
    contact.style.display = 'none';
}
function hideShowContact() {
    about.style.display = 'none';
    teachers.style.display = 'none';
    contact.style.display = 'block';
}

function Validate() {
    const thankYouMessage = document.querySelector('#thank-you-message');
    const fillName = document.querySelector('#fill-name');
    const fillQuestion = document.querySelector('#fill-question');
    var name = document.getElementById("name").value;
    var question = document.getElementById("question").value;
    thankYouMessage.classList.remove('show');
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
    var email = document.getElementById("email").value;
    const validEmail = document.querySelector('#valid-email');
    const fillEmail = document.querySelector('#fill-email');

    if (name  == "") {
        fillName.classList.add('show');
    }
    else {
        fillName.classList.remove('show');
    }
    if (question == "") {
        fillQuestion.classList.add('show');
    }
    else {
        fillQuestion.classList.remove('show');
    }
    

    if(email.match(mailformat)) {
        validEmail.classList.remove('show');
        fillEmail.classList.remove('show');

    }
    else {
        if (email  == "") {
            validEmail.classList.remove('show');
            fillEmail.classList.add('show');
        }
        else {
            fillEmail.classList.remove('show');
            validEmail.classList.add('show');
        }
    }
    if (name  != "" && email.match(mailformat) && question != "") {
        thankYouMessage.classList.add('show');
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("question").value = "";
    }
    
}

// Select the image gallery container
const imageGallery = document.querySelectorAll('.image-gallery');
// Add event listeners for scrolling
imageGallery.forEach(gallery => {
    gallery.addEventListener('wheel', event => {
        event.preventDefault();
        gallery.scrollLeft += event.deltaY;
    });
});

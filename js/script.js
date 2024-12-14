/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };

    });


    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};



/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 1500,
    delay: 50
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' })

ScrollReveal().reveal('.portfolio-heading', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .hobbies-box, .portfolio-box', { origin: 'right' })

ScrollReveal().reveal('  .contact form', { origin: 'bottom' });


/*==================== Contact Form to Email====================*/

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");


function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${mess.value}`;

    // Show loading indicator
    Swal.fire({
        title: "Sending...",
        allowOutsideClick: false,  // Prevent users from closing the popup
        onBeforeOpen: () => {
            Swal.showLoading();
        }
    });

    Email.send({
        SecureToken: "453aa632-76ca-4970-a856-1aed1c449463",
        To: 'vx2.718@gmail.com',
        From: "vx2.718@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message === "OK") {
                // Close the loading indicator popup
                Swal.close();

                // Show success message
                Swal.fire({
                    title: "Great Success!",
                    text: "Your message has been sent successfully!",
                    icon: "success"
                });

                form.reset();  // Reset the form after successful submission
            } else {
                // Handle the case where the email sending fails
                Swal.fire({
                    title: "Error",
                    text: "There was an error sending your message. Please try again later.",
                    icon: "error"
                });
            }
        }
    );
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();

    if (!fullName.classList.contains("error") && !email.classList.contains("error")
        && !subject.classList.contains("error") && !mess.classList.contains("error")) {
        sendEmail();
    }
});



function checkInput() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });


        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");

            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

function checkEmail() {
    const emailRegex = /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3})?$/;
    const errorTextEmail = document.querySelector(" .error-text.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTextEmail.innerText = "Enter a valid email address";
        }
        else {
            errorTextEmail.innerText = "Email Address cannot be blank";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}


/*
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
    if (!fullName.classList.contains("error") && !email.classList.contains
("error") && !subject.classList.contains("error") && 
!mess.classList.contains("error")){
    sendEmail();

    //form.reset();
    //return false;
}

});*/


/*==================== typed js ====================*/




















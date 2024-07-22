// script.js

// Function to copy email to clipboard
function copyEmail() {
    navigator.clipboard.writeText('jayantkumar1614@gmail.com');
    alert('Email copied to clipboard');
}

// Function to change project details on hover
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.backgroundColor = '#27272a';
        item.querySelector('h4').style.color = '#388e3c';
        item.querySelector('a.project-link').style.color = '#fff';
    });

    item.addEventListener('mouseleave', () => {
        item.style.backgroundColor = '#1c1c1e';
        item.querySelector('h4').style.color = '#fff';
        item.querySelector('a.project-link').style.color = '#388e3c';
    });
});

// Function to open project links in a new tab
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        window.open(link.href, '_blank');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Selecting elements
    const hireButton = document.querySelector(".hire");
    const emailButton = document.querySelector(".email");
    const navLinks = document.querySelectorAll("nav .links a");
    const githubLink = document.querySelector(".socials a[href='#']:nth-child(1)");
    const linkedinLink = document.querySelector(".socials a[href='#']:nth-child(2)");
    const twitterLink = document.querySelector(".socials a[href='#']:nth-child(3)");
    const copyEmailMessage = document.createElement("div");

    // Function to copy email to clipboard
    emailButton.addEventListener("click", () => {
        const email = "jayantkumar1614@gmail.com";
        navigator.clipboard.writeText(email).then(() => {
            showCopyMessage();
        }).catch(err => {
            console.error("Failed to copy email: ", err);
        });
    });

    // Function to show copy message
    function showCopyMessage() {
        copyEmailMessage.className = "copy-email-message";
        copyEmailMessage.innerText = "Email copied to clipboard!";
        document.body.appendChild(copyEmailMessage);
        setTimeout(() => {
            document.body.removeChild(copyEmailMessage);
        }, 2000);
    }

    // Hire button click event
    hireButton.addEventListener("click", () => {
        alert("Thank you for your interest! Please send your job request to jayantkumar1614@gmail.com.");
    });

    // Function to highlight active nav link
    function setActiveLink(event) {
        navLinks.forEach(link => link.classList.remove("active"));
        event.currentTarget.classList.add("active");
    }

    // Add click event to nav links
    navLinks.forEach(link => {
        link.addEventListener("click", setActiveLink);
    });

    // Detecting scroll to change nav link active state
    window.addEventListener("scroll", () => {
        let currentPosition = window.scrollY;
        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute("href"));
            if (section && section.offsetTop <= currentPosition && section.offsetTop + section.offsetHeight > currentPosition) {
                navLinks.forEach(link => link.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });

    // Social media links
    githubLink.addEventListener("click", () => {
        window.open("https://github.com/forenus", "_blank");
    });

    linkedinLink.addEventListener("click", () => {
        window.open("https://www.linkedin.com/in/jayant-kumar-6a0280251/", "_blank");
    });

    twitterLink.addEventListener("click", () => {
        window.open("https://twitter.com/forenus16", "_blank");
    });
});

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {
        cards.forEach(item => {
            if (item !== card) {
                item.classList.remove('expanded');
            }
        });
        card.classList.toggle('expanded');
    });
});


document.querySelectorAll('.accordion').forEach(button => {
    button.addEventListener('click', () => {
        
        button.classList.toggle('active');
        
        // Get the corresponding panel
        const panel = button.nextElementSibling;
        
       
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
});

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let isValid = true;

    // Reset error messages
    document.getElementById("name-error").style.display = "none";
    document.getElementById("email-error").style.display = "none";
    document.getElementById("message-error").style.display = "none";

    // Name validation
    if (name.trim() === "") {
        document.getElementById("name-error").style.display = "block";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("email-error").style.display = "block";
        isValid = false;
    }

    // Message validation
    if (message.trim() === "") {
        document.getElementById("message-error").style.display = "block";
        isValid = false;
    }

    return isValid;
}




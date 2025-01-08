/*Establishing Elements*/
const newsLetterPage = document.querySelector('.newsletter-container')
const successPage = document.querySelector('.success-message')
const successMessage = document.getElementById('success-p')
const dismissBtn = document.querySelector('.dismiss-btn')


const subscribeBtn = document.getElementById('subscribe');
const email = document.getElementById('email');
const error = document.getElementById('error');

subscribeBtn.addEventListener('click', () => {

    const emailValue = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(emailValue);

    if (emailValue === '') {
        error.innerText = 'Please enter an email'
        error.style.display = 'block'
    } else if (!isValidEmail){
        error.innerText = 'Valid email required'
        error.style.display = 'block';
    } else {
        newsLetterPage.style.display = 'none'
        successPage.style.display = 'block'
        successMessage.innerHTML = `A confirmation email has been sent to <span class='highlight-email'>${email.value}</span>. Please open it and click the button inside to confirm your subscription`
       
    }

    
    
});

dismissBtn.addEventListener('click', () => {
    successPage.classList.add('fade-out');

    setTimeout(() => {
        location.reload();

    }, 500)

    


});


# Newsletter Sign-Up Page

## Quick Description

This project is a solution to a coding challenge found on Frontend Mentor. It features a responsive newsletter sign-up page where users can submit their email address to subscribe. The design focuses on simplicity and accessibility, with client-side validation to ensure proper email format before submission.

## Resources Used

- HTML
- CSS
- Javasript

## Challenges I Faced

Although this project had it's challenges it was a project that i felt very confident in. After completing this project i felt pride in knowing my skills are growing and i'm ready to take on another challenge. With this said, here's a few challenges i faced and overcame.

### Mobile Responsiveness

The design specs included two success state designs: one for desktop and one for mobile. Initially, I approached this by creating separate designs for both states and toggling them using display: none and display: block. However, this resulted in messy and unmanageable code, and the buttons linked in JavaScript weren’t functional in the mobile view due to this setup.

Realizing the issue, I simplified my approach by using a single success design for both views and leveraging @media queries to style them appropriately for mobile and desktop. This streamlined solution worked perfectly, and although I kicked myself for not doing it sooner, I’m glad I learned from this mistake.

### Selecting the email value in Javascript

In the mobile success state, the confirmation message displays the user’s email in bold text. While creating the email value was straightforward, styling it without affecting the entire <p> tag proved tricky.

To solve this, I created a <span> element in JavaScript, added a class to it for styling, and added it into the message using ${email.value} to pull in the user's email. This allowed me to style the email specifically without impacting the rest of the text.

Example code in JavaScript:
<span class='highlight-email'>${email.value}</span>

# The Overall Takeaway

This project wasn’t the most challenging I’ve undertaken, but it still came with a few hurdles that taught me valuable lessons. I’m extremely happy with the final result and the process of solving these issues. I feel much more confident in my skills and can’t wait to tackle my next project soon.

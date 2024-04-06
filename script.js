
const header = document.querySelector('header');


header.style.position = 'relative';
header.style.backgroundColor = '#333'; /* Dark background color */
header.style.color = 'white'; /* White text color */
header.style.padding = '20px'; /* Add padding to the header */


const profileLink = document.querySelector('header a');


profileLink.style.position = 'absolute';
profileLink.style.top = '10px';
profileLink.style.left = '10px';
profileLink.style.width = '70px';
profileLink.style.height = 'auto';
profileLink.style.borderRadius = '50%'; 
profileLink.style.transition = 'transform 0.3s ease';


profileLink.addEventListener('mouseover', () => {
    profileLink.style.transform = 'scale(1.1)';
});

profileLink.addEventListener('mouseout', () => {
    profileLink.style.transform = 'scale(1)'; 
});


const name = document.querySelector('header h1');
const title = document.querySelector('header h2');


name.style.margin = '0';
name.style.fontFamily = 'Arial, sans-serif'; 
name.style.fontSize = '24px'; 

title.style.margin = '0';
title.style.fontFamily = 'Arial, sans-serif'; 
title.style.fontSize = '18px'; 





const darkModeToggleDiv = document.getElementById('dark-mode-toggle');

const darkModeToggleBtn = document.createElement('button');
darkModeToggleBtn.textContent = 'Toggle Dark Mode';
darkModeToggleBtn.style.position = 'fixed';
darkModeToggleBtn.style.top = '20px';
darkModeToggleBtn.style.right = '20px';

darkModeToggleDiv.appendChild(darkModeToggleBtn);


function toggleDarkMode() {

    document.body.classList.toggle('dark-mode');
}


darkModeToggleBtn.addEventListener('click', toggleDarkMode);




// progress bar
const progressBar = document.createElement('div');
progressBar.id = 'scroll-progress-bar';
progressBar.style.position = 'fixed';
progressBar.style.top = '0';
progressBar.style.left = '0';
progressBar.style.width = '0';
progressBar.style.height = '3px';
progressBar.style.backgroundColor = '#4caf50'; 
progressBar.style.zIndex = '9999';


document.body.appendChild(progressBar);


function updateScrollProgress() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollPercentage + '%';
}


window.addEventListener('scroll', updateScrollProgress);

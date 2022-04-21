
// Variable to know which review is currently being viewed
let currentRev = 0;

// FUNCTION to generate a random set of letters and spaces to produce a lorem like effect in the fake review
const genPara = () => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k' ,'l', 'm' ,'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ''];

    let paragragh = '';
    let letterPicker;
    const paraLength = 215

    for (let i = 0; i < paraLength; i++) {
        let spaceInsert = Math.floor(Math.random() * 6);
        if (spaceInsert === 3) paragragh += ' ';

        letterPicker = Math.floor(Math.random() * 27);
        paragragh += letters[letterPicker];
        
    }
    return paragragh;
}

// Array of reviews on the side with each pice of info
const reviews = [{
    name:   'Lien Font',
    job:    'Web Developer',
    img:    'portraits/lien-profile.jpg'
},
{
    name:   'Darius White',
    job:    'Chef',
    img:    'portraits/pexels-creation-hill-1681010.jpg'

},
{
    name:   'Jessie Mint',
    job:    'Interior Designer',
    img:    'portraits/pexels-andrea-piacquadio-762020.jpg'

},
{
    name:   'Josh Campos',
    job:    'Bank Teller',
    img:    'portraits/pexels-nathan-cowley-1300402.jpg'

},
{
    name:   'Kiara Jason',
    job:    'Teacher',
    img:    'portraits/girl2.jpg'

},
{
    name:   'David Mclinton',
    job:    'Dance Instructor',
    img:    'portraits/pexels-linkedin-sales-navigator-2182970.jpg'

},
{
    name:   'Fiona Harris', 
    job:    'Social Media Manager',
    img:    'portraits/pexels-jeff-denlea-2998528.jpg'
}]

// On loading the page immediately update the review
window.addEventListener("DOMContentLoaded", () => updateReview());

// Function to update the review info in DOM
const updateReview = () => {
    const review = reviews[currentRev];

    document.querySelector('img').src = reviews[currentRev].img;
    document.querySelector('h3').textContent = reviews[currentRev].name;
    document.querySelector('h4').textContent = reviews[currentRev].job;
    document.querySelector('p').textContent = genPara();
}

// Variables to easily target the buttons in the DOM
const nextRvw = document.getElementById('nxt-rvw');
const prvRev = document.getElementById('prv-rvw');
const srpRev = document.getElementById('surprise');


// Functions to manipulate the DOM with the updated info on button click
nextRvw.addEventListener('click', () => {
    //checking if the current count of reviews does not pass the reviews array
    currentRev < 6 ? currentRev++ : currentRev = 0;

    // Running function to update review
    updateReview();

    //Just to see in Console the information
    console.table(reviews[currentRev]);
    console.table(currentRev);
})
prvRev.addEventListener('click', () => {
    currentRev > 1 ? currentRev-- : currentRev = 6 ;

    // Running function to update review
    updateReview();

    console.table(reviews[currentRev]);
})

srpRev.addEventListener('click', () => {
    currentRev = Math.floor(Math.random() * 6);

    // Running function to update review
    updateReview();

    console.table(reviews[currentRev]);
})


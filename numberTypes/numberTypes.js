// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
var reviewTotalDisplay = document.querySelector('#reviews');
var reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
];
var numberOfReviews = function (value, user) {
    reviewTotalDisplay.innerHTML = "Review Total: ".concat(value.toString(), " Last Reviewer: ").concat(user);
};
numberOfReviews(reviews.length, reviews[0].name);

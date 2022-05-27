// Any Type
// 1. Add a description property to Omars review, and give it a value.
// 2. Next try addressing what TypeScript does not like.
// 3. Now, imagine we DON'T know what kind of review object we are going to
// get next.

import { showReviewTotal, populateUser } from "./utils";
import { Permissions, LoyaltyUser } from "./enums";
const propertyContainer = document.querySelector(".properties");
const footer = document.querySelector(".footer");

let isOpen: boolean;

// Reviews
//THIS ACCEPTS AN ARRAY OF EITHER TWO TYPES OF OBJECTS.

//CAN ALSO DO SIMPLY BELOW, WHICH ALLOWS YOU TO HAVE AN ARRAY OF WHATEVER OBJECTS. BUT THE USE OF ANY IS NOT ADVISED.
// const reviews : any[]=
const reviews: (
  | {
      name: string;
      stars: number;
      loyaltyUser: LoyaltyUser;
      date: string;
    }
  | {
      name: string;
      stars: number;
      loyaltyUser: LoyaltyUser;
      date: string;
      description: string;
    }
)[] = [
  {
    name: "Sheia",
    stars: 5,
    loyaltyUser: LoyaltyUser.GOLD_USER,
    date: "01-04-2021",
  },
  {
    name: "Andrzej",
    stars: 3,
    loyaltyUser: LoyaltyUser.BRONZE_USER,
    date: "28-03-2021",
  },
  {
    name: "Omar",
    stars: 4,
    loyaltyUser: LoyaltyUser.SILVER_USER,
    date: "27-03-2021",
    description: "Great hosts, location was a bit further than said",
  },
];

// User
const you = {
  firstName: "Bobby",
  lastName: "Brown",
  permissions: Permissions.ADMIN,
  isReturning: true,
  age: 35,
  stayedAt: ["florida-home", "oman-flat", "tokyo-bungalow"],
};

// Array of Properties
const properties: {
  image: string;
  title: string;
  price: number;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: string;
  };
  contact: [number, string];
  isAvailable: boolean;
}[] = [
  {
    image: "images/colombia-property.jpg",
    title: "Colombian Shack",
    price: 45,
    location: {
      firstLine: "shack 37",
      city: "Bogota",
      code: 45632,
      country: "Colombia",
    },
    contact: [+112343823978921, "marywinkle@gmail.com"],
    isAvailable: true,
  },
  {
    image: "images/poland-property.jpg",
    title: "Polish Cottage",
    price: 34,
    location: {
      firstLine: "no 23",
      city: "Gdansk",
      code: 343903,
      country: "Poland",
    },
    contact: [+1298239028490830, "garydavis@hotmail.com"],
    isAvailable: false,
  },
  {
    image: "images/london-property.jpg",
    title: "London Flat",
    price: 23,
    location: {
      firstLine: "flat 15",
      city: "London",
      code: 35433,
      country: "United Kingdom",
    },
    contact: [+34829374892553, "andyluger@aol.com"],
    isAvailable: true,
  },
];

// Functions
showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

populateUser(you.isReturning, you.firstName);

// Add the properties
for (let i = 0; i < properties.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = properties[i].title;
  const image = document.createElement("img");
  image.setAttribute("src", properties[i].image);
  card.appendChild(image);
  propertyContainer.appendChild(card);
}

let currentLocation: [string, string, number] = ["London", "11.03", 17];
footer.innerHTML =
  currentLocation[0] +
  " " +
  currentLocation[1] +
  " " +
  currentLocation[2] +
  "°";
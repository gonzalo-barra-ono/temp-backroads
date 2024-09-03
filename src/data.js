import imageTour1 from "./images/tour-1.jpeg";
import imageTour2 from "./images/tour-2.jpeg";
import imageTour3 from "./images/tour-3.jpeg";
import imageTour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  {
    id: 1,
    text: "home",
    href: "#home",
  },
  {
    id: 2,
    text: "about",
    href: "#about",
  },
  {
    id: 3,
    text: "services",
    href: "#services",
  },
  {
    id: 4,
    text: "tours",
    href: "#tours",
  },
];

export const socialLinks = [
  {
    id: 1,
    href: "https://www.facebook.com",
    icon: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.facebook.com",
    icon: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.facebook.com",
    icon: "fab fa-squarespace",
  },
  {
    id: 4,
    href: "https://www.facebook.com",
    icon: "fab fa-instagram",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    img: imageTour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "china",
    days: 6,
    price: 2100,
  },
  {
    id: 2,
    img: imageTour2,
    date: "october 1th, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "indonesia",
    days: 11,
    price: 1400,
  },
  {
    id: 3,
    img: imageTour3,
    date: "december 16th, 2020",
    title: "amazon jungle",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "brazil",
    days: 10,
    price: 2500,
  },
  {
    id: 4,
    img: imageTour4,
    date: "february 19th, 2021",
    title: "new zealand",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "new zealand",
    days: 15,
    price: 3200,
  },
];

import data from './path/to/DATA.json';

let restaurantElement = '';
data.restaurants.forEach(resto => {
    restaurantElement += `
            <img src="${resto.pictureId}" alt="${resto.name}">
            ...
    `
});

document.querySelector(".content").innerHTML = restaurantElement;
import camelize from "camelize";
import { mocks, mockImages } from "../mockData/restaurants/index";

// fetch or get restaurants for a particular location
const fetchRestaurants = (location = "-27.49,-58.82") => {
    return new Promise((resolve, reject) => {
        const restaurants = mocks[location];

        setTimeout(() => {
            if (restaurants && restaurants.results.length > 0) {
                resolve(formatRestaurants(restaurants));
            } else {
                reject("Restaurants not found");
            }
        }, 2000);
    });
};

const formatRestaurants = (restaurants) => {
    const formattedRestaurants = camelize(restaurants);

    return formattedRestaurants.results.map((restaurant) => {
        return {
            ...restaurant,
            address: restaurant.vicinity,
            isOpenNow:
                restaurant.openingHours && restaurant.openingHours.openNow,
            isClosedTemporarily:
                restaurant.businessStatus === "CLOSED_TEMPORARILY",
            photos: restaurant.photos.map(() => {
                return mockImages[
                    Math.floor(mockImages.length * Math.random())
                ];
            }),
        };
    });
};

// fetchRestaurants()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

export default fetchRestaurants;

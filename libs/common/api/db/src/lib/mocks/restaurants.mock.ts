import { Restaurant } from '@common/models/common';

export const mockRestaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Spice Palace',
    slug: 'spice-palace',
    menu: {
      lunch: [
        { name: 'Butter Chicken', price: 12.99 },
        { name: 'Vegetable Biryani', price: 10.99 },
        { name: 'Chicken Tikka', price: 8.99 },
      ],
      dinner: [
        { name: 'Lamb Curry', price: 15.99 },
        { name: 'Tandoori Mix Grill', price: 18.99 },
        { name: 'Paneer Tikka Masala', price: 14.99 },
      ],
    },
    address: {
      street: '123 Spice Ave',
      city: 'New York',
      state: 'NY',
      zip: '10001',
    },
  },
  {
    id: '2',
    name: 'Burger Express',
    slug: 'burger-express',
    menu: {
      lunch: [
        { name: 'Classic Burger', price: 9.99 },
        { name: 'Cheeseburger', price: 10.99 },
        { name: 'Veggie Burger', price: 8.99 },
      ],
      dinner: [
        { name: 'Double Deluxe Burger', price: 14.99 },
        { name: 'BBQ Bacon Burger', price: 16.99 },
        { name: 'Mushroom Swiss Burger', price: 15.99 },
      ],
    },
    address: {
      street: '456 Burger Blvd',
      city: 'Chicago',
      state: 'IL',
      zip: '60607',
    },
  },
  {
    id: '3',
    name: 'Pasta Paradise',
    slug: 'pasta-paradise',
    menu: {
      lunch: [
        { name: 'Spaghetti Carbonara', price: 11.99 },
        { name: 'Fettuccine Alfredo', price: 10.99 },
        { name: 'Lasagna', price: 12.99 },
      ],
      dinner: [
        { name: 'Seafood Linguine', price: 18.99 },
        { name: 'Truffle Mushroom Ravioli', price: 19.99 },
        { name: 'Veal Parmesan', price: 21.99 },
      ],
    },
    address: {
      street: '789 Pasta Lane',
      city: 'Boston',
      state: 'MA',
      zip: '02108',
    },
  },
  {
    id: '4',
    name: 'Taco Town',
    slug: 'taco-town',
    menu: {
      lunch: [
        { name: 'Street Tacos (3)', price: 8.99 },
        { name: 'Chicken Quesadilla', price: 9.99 },
        { name: 'Beef Burrito', price: 10.99 },
      ],
      dinner: [
        { name: 'Fajita Platter', price: 16.99 },
        { name: 'Enchiladas Supreme', price: 15.99 },
        { name: 'Carne Asada', price: 18.99 },
      ],
    },
    address: {
      street: '101 Taco Street',
      city: 'Austin',
      state: 'TX',
      zip: '78701',
    },
  },
  {
    id: '5',
    name: 'Sushi Sensation',
    slug: 'sushi-sensation',
    menu: {
      lunch: [
        { name: 'California Roll (6 pcs)', price: 7.99 },
        { name: 'Spicy Tuna Roll (6 pcs)', price: 9.99 },
        { name: 'Bento Box', price: 12.99 },
      ],
      dinner: [
        { name: 'Sushi Boat (24 pcs)', price: 29.99 },
        { name: "Omakase Chef's Special", price: 39.99 },
        { name: 'Sashimi Deluxe', price: 24.99 },
      ],
    },
    address: {
      street: '202 Sushi Way',
      city: 'San Francisco',
      state: 'CA',
      zip: '94105',
    },
  },
  {
    id: '6',
    name: 'Pizza Palace',
    slug: 'pizza-palace',
    menu: {
      lunch: [
        { name: 'Margherita Pizza', price: 11.99 },
        { name: 'Pepperoni Pizza', price: 12.99 },
        { name: 'Vegetarian Pizza', price: 11.99 },
      ],
      dinner: [
        { name: 'Supreme Deep Dish', price: 18.99 },
        { name: "Meat Lover's Pizza", price: 19.99 },
        { name: 'Gourmet Truffle Pizza', price: 22.99 },
      ],
    },
    address: {
      street: '303 Pizza Plaza',
      city: 'Chicago',
      state: 'IL',
      zip: '60614',
    },
  },
  {
    id: '7',
    name: 'Green Garden Vegan',
    slug: 'green-garden-vegan',
    menu: {
      lunch: [
        { name: 'Avocado Toast', price: 9.99 },
        { name: 'Buddha Bowl', price: 12.99 },
        { name: 'Veggie Wrap', price: 10.99 },
      ],
      dinner: [
        { name: 'Plant-Based "Steak"', price: 17.99 },
        { name: 'Mushroom Risotto', price: 16.99 },
        { name: 'Cauliflower "Wings"', price: 13.99 },
      ],
    },
    address: {
      street: '404 Green Street',
      city: 'Portland',
      state: 'OR',
      zip: '97204',
    },
  },
  {
    id: '8',
    name: 'Breakfast All Day',
    slug: 'breakfast-all-day',
    menu: {
      lunch: [
        { name: 'Classic Pancakes', price: 8.99 },
        { name: 'Belgian Waffles', price: 10.99 },
        { name: 'Avocado & Egg Toast', price: 9.99 },
      ],
      dinner: [
        { name: 'Steak & Eggs', price: 18.99 },
        { name: 'Breakfast Burrito Platter', price: 14.99 },
        { name: 'Gourmet French Toast', price: 15.99 },
      ],
    },
    address: {
      street: '505 Morning Ave',
      city: 'Denver',
      state: 'CO',
      zip: '80202',
    },
  },
  {
    id: '9',
    name: 'Seafood Shack',
    slug: 'seafood-shack',
    menu: {
      lunch: [
        { name: 'Fish & Chips', price: 13.99 },
        { name: "Shrimp Po' Boy", price: 12.99 },
        { name: 'Clam Chowder', price: 8.99 },
      ],
      dinner: [
        { name: 'Lobster Tail', price: 29.99 },
        { name: 'Seafood Boil', price: 34.99 },
        { name: 'Grilled Salmon', price: 22.99 },
      ],
    },
    address: {
      street: '606 Ocean Drive',
      city: 'Miami',
      state: 'FL',
      zip: '33139',
    },
  },
  {
    id: '10',
    name: 'BBQ Barn',
    slug: 'bbq-barn',
    menu: {
      lunch: [
        { name: 'Pulled Pork Sandwich', price: 11.99 },
        { name: 'Brisket Plate', price: 14.99 },
        { name: 'BBQ Chicken', price: 12.99 },
      ],
      dinner: [
        { name: 'Full Rack of Ribs', price: 24.99 },
        { name: 'Combo Platter', price: 29.99 },
        { name: 'Smoked Sausage Plate', price: 18.99 },
      ],
    },
    address: {
      street: '707 Smoke Road',
      city: 'Nashville',
      state: 'TN',
      zip: '37203',
    },
  },
];

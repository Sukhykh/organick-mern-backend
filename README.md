# Organick

Welcome to Organick, a comprehensive full-stack project brought to life using the cutting-edge MERN technology stack.
[frontend](https://github.com/Sukhykh/organick-mern-frontend)
## Features

* Fully responsive and cross-browser compatible
* Comprehensive admin panel
* Full-fledged CRUD functionality for products
* Automated email notifications after ordering/subscribing

##  Tech Stack

* Frontend: 
    * React
    * TypeScript
    * React router dom
    * Axios
    * Zustand
    * Sass
* Backend:
    * Node.js
    * Express
    * Express-validator
    * Mongoose
    * Multer
    * Nodemailer
* Database:
    * Mongo DB

## Main Functionality Overview:

* Categories Section: Displays the first 8 categories sorted by decreasing discounted price. "Load More" and "Hide All" buttons manage the display of the remaining products.
* Product Card Interaction: Clicking on a product card overlays detailed product information. Users can add the product to their cart from this overlay.
* Edit Quantity/Remove Items: On the cart page, users can conveniently edit the quantity of items in their cart. Users also have the option to remove items from their cart.
* Cart Page "To Order" Button: The button is available on the cart page only if the cart is not empty.
* Order Form Display: Clicking the "To Order" button reveals an order form. Input data entered into the form is stored in the local storage.
* Server-Side Data Validation: Data validation occurs on the server to ensure the accuracy and integrity of user input.

## Other Functionality Overview:

* Header: Clicking the logo opens the admin panel page.
* Banners: Dynamic banners sourced from an array.
* Testimonial Section: Testimonial data is generated from an array and includes clickable navigation.
* Offer Section: Displays the first four products tagged as vegetables.
* News Section: Renders card information from an array, displaying the first two cards.
* About Page - Team Section: Team member cards are rendered from an array.
* Projects and News Pages: Data on these pages is populated from arrays.
* "Top" Button: A scroll-to-top button becomes visible after scrolling beyond the header.

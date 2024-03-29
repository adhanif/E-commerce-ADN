# E-commerce Fashion ADN

## Overview

E-commerce Fashion ADN is a TypeScript and Redux Toolkit-powered frontend project that connects to the [FakeAPI](https://fakeapi.platzi.com/) to create a dynamic e-commerce platform. The project includes features like product listing, individual product pages, user profiles (accessible upon login), and a shopping cart (implemented as a page or modal).


# Table of Contents
- [E-commerce Fashion ADN](#e-commerce-fashion-adn)
  - [Overview](#overview)
  - [Visit the E-commerce Fashion ADN Live](#visit-the-e-commerce-fashion-adn-live)
  - [APP Images](#app-images)
  - [Technologies Used (Tech Stack)](#technologies-used-tech-stack)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Environment Variables](#environment-variables)
  - [Testing](#testing)
  - [Features](#features)
    - [Redux Store](#redux-store)
      - [Product Reducer](#product-reducer)
      - [User Reducer](#user-reducer)
      - [Cart Reducer](#cart-reducer)
    - [Google Login](#google-login)
  - [Project Folder Structure](#project-folder-structure)
  - [API Endpoint](#api-endpoint)
  - [Scripts](#scripts)
  - [Deployment](#deployment)
  - [License](#license)





## Visit the E-commerce Fashion ADN Live

Explore the products

[![Ecommerce Fashion ADN](https://img.shields.io/badge/Ecommerce_Fashion_ADN-006400?style=for-the-badge&logo=google-chrome&logoColor=000000)](https://ecommerce-fashion-adn.netlify.app/)

## APP Images

![App Screenshot](readmeSnaps/homepage.png)
![App Screenshot](readmeSnaps/featured.png)
![App Screenshot](readmeSnaps/footer.png)
![App Screenshot](readmeSnaps/Filters.png)
![App Screenshot](readmeSnaps/product_detail.png)
![App Screenshot](readmeSnaps/cart.png)

## Technologies Used (Tech Stack)

- **TypeScript**: Provides static typing for enhanced code quality.
- **Redux Toolkit**: Manages state efficiently.
- **RTK Query**: Simplifies data fetching and state management for APIs.
- **React**: The core library for building the user interface.
- **React Router**: Enables navigation between pages.
- **Styled Components**: Utilized for styling components.
- **Lodash**: Utility library for various functionalities.
- **@react-oauth/google**: Google login integration.
- **React Leaflet**: Integration for interactive maps.
- **Material-UI**: Provides a rich set of pre-designed React components for faster and easier development.
- **React Hook Form**: Form handling library for React applications.

## Getting started

1. Clone the repository.

   ```bash
   git clone https://github.com/adhanif/E-commerce-ADN.git

   ```

2. Navigate to the project directory.

   ```bash
   cd E-commerce-ADN

   ```

3. Install dependencies.
   ```bash
   npm install
   ```

# Usage

1. To start the App
   ```bash
   npm start
   ```
2. Use the following command to run tests:
   ```bash
   npm test
   ```

# Environment Variables

`REACT_APP_GOOGLE_CLIENT_ID` = `Your APP_GOOGLE_CLIENT_ID`

# Testing

The testing suite for this project is implemented with Jest and utilizes msw for server mocking. During testing, two mock servers were implemented for products and users using Jest in conjunction with msw. These servers are pivotal for evaluating different facets of the application's functionality, ensuring a comprehensive testing approach.

![App Screenshot](readmeSnaps/tests.png)

# Features

## Redux Store

### Product Reducer

- **Get all products:** Fetches all products from the API.
- **Find a single product:** Retrieves details for a specific product.
- **Filter by categories:** Allows users to filter products by categories.
- **Sort products by price:** Enables sorting of products based on price.
- **CRUD operations:** Admin can create, update, and delete products.

### User Reducer

- **Register and login:** Users can register for an account and log in.

### Cart Reducer

- **Add product to cart:** Adds products to the user's shopping cart.
- **Remove from cart:** Removes products from the cart.
- **Update product quantity in the cart.**

## Google Login

- **Google OAuth Integration:** Users can log in using their Google accounts.

# Project Folder Structure

src  
├─ 📁 components  
│ ├─ 📁 adminProfile  
│ │ └─ 📄AdminTable.tsx  
│ ├─ 📁 cart  
│ │ └─ 📄QuantityControlButton.tsx  
│ ├─ 📁 contact  
│ │ ├─ 📄ContactForm.tsx  
│ │ └─ 📄MapDetail.tsx  
│ ├─ 📁 contextAPI  
│ │ └─ 📄ThemeContext.tsx  
│ ├─ 📁 customStyling  
│ │ ├─ 📄buttons.ts  
│ │ └─ 📄table.ts  
│ ├─ 📁 featuredProducts  
│ │ ├─ 📄FeaturedProductCard.tsx  
│ │ └─ 📄FeaturedProducts.tsx  
│ ├─ 📁 footer  
│ │ └─ 📄Footer.tsx  
│ ├─ 📁 googleLogin  
│ │ └─ 📄GoogleLogIn.tsx  
│ ├─ 📁 heroSection  
│ │ ├─ 📄HeroSection.tsx  
│ │ └─ 📄WhyChooseUs.tsx  
│ ├─ 📁 hooks  
│ │ └─ 📄useDispatchApp.ts  
│ ├─ 📁 images  
│ │ ├─ 📄american.png  
│ │ ├─ 📄cap.jpeg  
│ │ ├─ 📄car.jpg  
│ │ ├─ 📄discover.png  
│ │ ├─ 📄google.png  
│ │ ├─ 📄hero1.jpg  
│ │ ├─ 📄hero2.jpg  
│ │ ├─ 📄hoddie.jpeg  
│ │ ├─ 📄master.png  
│ │ ├─ 📄remote.jpeg  
│ │ └─ 📄visa.png  
│ ├─ 📁 loading  
│ │ └─ 📄Loading.tsx  
│ ├─ 📁 navBar  
│ │ ├─ 📄NavBar.tsx  
│ │ └─ 📄ToggleColorMode.tsx  
│ ├─ 📁 notification  
│ │ └─ 📄NotificationSnackBars.tsx  
│ ├─ 📁 product  
│ │ ├─ 📄FilterProducts.tsx  
│ │ ├─ 📄ProductCard.tsx  
│ │ ├─ 📄ProductCreateForm.tsx  
│ │ └─ 📄ProductEditForm.tsx  
│ ├─ 📁 profileCard  
│ │ └─ 📄ProfileCard.tsx  
│ ├─ 📁 scroller  
│ │ └─ 📄Scroller.tsx  
│ ├─ 📁 theme  
│ │ └─ 📄ThemeContext.ts  
│ └─ 📁 utils  
│ ├─ 📄PrivateRoutes.tsx  
│ └─ 📄products.ts  
├─ 📁 misc  
│ └─ 📄types.ts  
├─ 📁 pages  
│ ├─ 📄Admin.tsx  
│ ├─ 📄Cart.tsx  
│ ├─ 📄Contact.tsx  
│ ├─ 📄GoogleUSerProfile.tsx  
│ ├─ 📄Home.tsx  
│ ├─ 📄LoginForm.tsx  
│ ├─ 📄NoAuthorization.tsx  
│ ├─ 📄ProductDetail.tsx  
│ ├─ 📄ProductsDataFetch.tsx  
│ ├─ 📄RegisterForm.tsx  
│ └─ 📄UserProfile.tsx  
├─ 📁 redux  
│ ├─ 📁 slices  
│ │ ├─ 📄cartSlice.ts  
│ │ ├─ 📄notificationSlice.ts  
│ │ ├─ 📄productSlice.ts  
│ │ └─ userSlice.ts  
│ ├─ 📄productsQuery.ts  
│ ├─ 📄store.ts  
│ └─ 📄userQuery.ts  
├─ 📁 test  
│ ├─ 📁 cart  
│ │ └─ 📄cartReducer.test.ts  
│ ├─ 📁 notification  
│ │ └─ 📄notificationReducer.test.ts  
│ ├─ 📁 product  
│ │ └─ 📄productQuery.test.ts  
│ ├─ 📁 shared  
│ │ ├─ 📄mockData.ts  
│ │ ├─ 📄productServer.ts  
│ │ └─ 📄userServer.ts  
│ └─ 📁 user  
│ └─ 📄userQuery.test.ts  
├─ 📄 App.css  
├─ 📄 App.tsx  
├─ 📄 index.css  
├─ 📄 index.tsx  
├─ 📄 logo.svg  
├─ 📄 react-app-env.d.ts  
├─ 📄 reportWebVitals.ts  
└─ 📄 setupTests.ts

## API Endpoint

- Use the API endpoint [https://fakeapi.platzi.com/](https://fakeapi.platzi.com/).

## Scripts

- `npm start`: Start the development server.
- `npm build`: Build the production-ready application.
- `npm test`: Run unit tests.
- `npm eject`: Eject from create-react-app configuration.

## Deployment

The application is deployed on Netlify. Click the button below to visit the live site:
[![Ecommerce Fashion ADN](https://img.shields.io/badge/Ecommerce_Fashion_ADN-006400?style=for-the-badge&logo=google-chrome&logoColor=000000)](https://ecommerce-fashion-adn.netlify.app/)

## License

This project is licensed under the [MIT License](LICENSE).

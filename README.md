# Fakestore shop application

### How to run the application in a Development environment

In order to run this application, you should run `npm install` in the project directory. Once it finished, you should run `npm run dev`, this will start the application in developer mode on the 3000 port of localhost. You can view the application at the http://localhost:3000/ address.

### About the application

The application mimics a webshop. In the home page, every product is listed. With the navigation in the header section, you can find a page for every category, where the products of the given category are listed.
You can navigate to a product's page by clicking on these items. Here, you can add the desired amount of the product in your cart, or remove the product entirely. The state of the cart remains persistent between refresh and new tabs.

### About the code

This application was created with Next.js, ReduxToolkit and TypeScript.

The source code is inside the `src` folder.

##### Requirements
* Node version: 16.17.1
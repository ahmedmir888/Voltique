# Voltique — E-Commerce Website

Voltique is a responsive front-end e-commerce website for browsing electronic devices and technology products. The project was built with HTML, CSS, and vanilla JavaScript to practice front-end development and implement common online-store interactions.

## Features

- **Home page** with a hero section and featured products.
- **Products page** with product listings, search, category filtering, and sorting options.
- **Product details** page for viewing individual product information.
- **Categories page** for browsing products by category.
- **Shopping cart** with quantity controls and total-price calculation.
- **Wishlist** for saving favorite products.
- **Checkout page** with an order summary.
- **About and Contact pages** with project and contact information.
- **Login page UI**.
- **Responsive layout** for different screen sizes.
- **LocalStorage persistence** for cart and wishlist data across page reloads.

## Built With

- HTML5
- CSS3
- JavaScript (ES6+)
- Browser LocalStorage
- [Google Fonts — Tajawal](https://fonts.google.com/specimen/Tajawal)
- [Boxicons](https://boxicons.com/)

## Project Structure

```text
My-First-E-commerce/
├── index.html
├── css/
│   ├── style.css
│   ├── products.css
│   ├── categories.css
│   ├── details.css
│   ├── cart.css
│   ├── checkout.css
│   ├── wishlist.css
│   ├── about.css
│   ├── contact.css
│   └── login.css
├── js/
│   ├── main.js
│   ├── product-data.js
│   ├── products.js
│   ├── categories.js
│   ├── details.js
│   ├── cart.js
│   ├── checkout.js
│   └── wishlist.js
├── imgs/
└── pages/
    ├── products.html
    ├── categories.html
    ├── details.html
    ├── cart.html
    ├── checkout.html
    ├── wishlist.html
    ├── about.html
    ├── contact.html
    └── login.html
```

## Getting Started

This project does not require a package manager or build step.

1. Clone the repository:

   ```bash
   git clone https://github.com/ahmedmir888/Voltique.git
   ```

2. Open the project folder:

   ```bash
   cd Voltique
   ```

3. Open `index.html` in your browser.

For a more reliable local development experience, you can open the folder in Visual Studio Code and run it with the **Live Server** extension.

## Data and Limitations

- Product information is stored in a JavaScript data file.
- Cart and wishlist selections are stored in the browser's LocalStorage.
- This is a **front-end demonstration project**. It does not include a backend, database, real payment processing, or server-side authentication.
- The login page is part of the interface and should not be considered a production authentication system.
- Google Fonts and Boxicons are loaded from external services, so an internet connection may be required for those assets.

## Future Improvements

- Connect the interface to a backend and database.
- Implement secure user authentication.
- Add a real checkout and payment integration.
- Improve form validation and user feedback.
- Add automated tests and further accessibility improvements.

## Author

**Ahmed Walid Khalaf**

- GitHub: [@ahmedmir888](https://github.com/ahmedmir888)
- LinkedIn: [Ahmed Walid Khalaf](https://www.linkedin.com/in/ahmed-mir-b38703231/)
- Portfolio: [ahmedwalidkhalaf.netlify.app](https://ahmedwalidkhalaf.netlify.app)

---

This project was created for learning and portfolio purposes.

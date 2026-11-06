# Voltique — Bilingual E-Commerce Website

Voltique is a responsive front-end e-commerce website for browsing electronic devices and technology products. It is built with HTML5, CSS3, and vanilla JavaScript, with browser LocalStorage used to preserve selected user data.

The project includes a bilingual interface in **English and Arabic**, with support for left-to-right (LTR) and right-to-left (RTL) layouts.

## Features

- **Home page** with a hero section, featured products, category highlights, special offers, and a brand section.
- **Products page** with product listings, search, category filtering, and sorting options.
- **Product details page** for viewing individual product information and descriptions.
- **Categories page** for browsing products by category.
- **Shopping cart** with quantity controls and total-price calculation.
- **Wishlist** for saving favorite products.
- **Checkout page** with shipping information fields, payment-method selection UI, and an order summary.
- **About and Contact pages** with project and contact information.
- **Login page UI**.
- **Bilingual interface** with English and Arabic language options.
- **Language preference persistence** using LocalStorage, so the selected language is retained across page reloads.
- **RTL/LTR layout switching** based on the selected language.
- **Translated dynamic content**, including product names, product descriptions, categories, cart items, wishlist items, and checkout summaries.
- **Responsive layout** for different screen sizes.
- **LocalStorage persistence** for cart, wishlist, and language preference.

## Built With

- HTML5
- CSS3
- JavaScript (ES6+)
- Browser LocalStorage
- [Google Fonts — Tajawal](https://fonts.google.com/specimen/Tajawal)
- [Boxicons](https://boxicons.com/)

## Internationalization

Voltique supports English and Arabic through a JavaScript translation object.

- Translation strings are organized by language in `translations.js`.
- Elements with `data-i18n` receive translated text.
- Elements with `data-i18n-placeholder` receive translated input placeholders.
- The selected language is stored in LocalStorage.
- The document direction is set to `ltr` for English and `rtl` for Arabic.
- Dynamic sections are re-rendered when the language changes so their content reflects the selected language.

## Project Structure

```text
Voltique/
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
│   ├── translations.js
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

For a more reliable local development experience, open the folder in Visual Studio Code and run it with the **Live Server** extension.

## Data and Limitations

- Product information is stored in JavaScript data files.
- Cart, wishlist, and language preferences are stored in the browser's LocalStorage.
- This is a **front-end demonstration project**. It does not include a backend, database, real payment processing, or server-side authentication.
- The checkout page provides the front-end checkout interface; it does not process real payments or submit orders to a server.
- The login page is part of the interface and should not be considered a production authentication system.
- Google Fonts and Boxicons are loaded from external services, so an internet connection may be required for those assets.

## Future Improvements

- Connect the interface to a backend and database.
- Implement secure user authentication.
- Add real checkout and payment integration.
- Improve form validation and user feedback.
- Add automated tests and further accessibility improvements.
- Continue refining the brand slider animation and cross-language visual behavior.

## Author

**Ahmed Walid Khalaf**

- GitHub: [@ahmedmir888](https://github.com/ahmedmir888)
- LinkedIn: [Ahmed Walid Khalaf](https://www.linkedin.com/in/ahmed-walid-b38703231/)
- Portfolio: [ahmedwalidkhalaf.netlify.app](https://ahmedwalidkhalaf.netlify.app)

---

This project was created for learning and portfolio purposes.

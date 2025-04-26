# Development process

- setup new project
  `ng new angular-ecomm --inline-style --inline-template --skip-tests`
- create a new component
  `ng generate component components/header`
- add tailwind css
  `npm install tailwindcss @tailwindcss/postcss postcss --force`
    - https://tailwindcss.com/docs/installation/framework-guides/angular
- add a button component
  `ng generate component components/primary-button`
- add a product list component
  `ng g component pages/product-list`
- add a product card
  `ng g c pages/product-list/product-card`
- add a service
  `ng g service services/cart`
- add a card page
  `ng g c pages/cart`
  `ng g c pages/cart/cart-item`
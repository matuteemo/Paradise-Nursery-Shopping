# Paradise Nursery Shopping App

A React-based e-commerce app for browsing and purchasing plants online. Built with Vite, Redux Toolkit, and React Router.

## Features

- Browse plants organized by category (Air Purifying, Aromatic, Insect Repellent, Medicinal, Low Maintenance)
- Add plants to a shopping cart
- Increase or decrease item quantities directly from the cart
- View cart total in real time
- Navigate between a landing page and the shop

## Tech Stack

| Tool | Purpose |
|---|---|
| React 19 | UI framework |
| Vite 8 | Dev server and bundler |
| Redux Toolkit | Global state management (cart + inventory) |
| React Redux | Connects Redux store to React components |
| React Router DOM 7 | Client-side routing |

## Project Structure

```
shopping/
├── src/
│   ├── components/
│   │   ├── plantSlice.js       # Redux slice: inventory data + cart reducers
│   │   ├── store.js            # Redux store configuration
│   │   ├── shopping_page.jsx   # Main shop view with plant grid and cart modal
│   │   ├── home_page.jsx       # Landing page
│   │   ├── cart_button.jsx     # Cart icon button with item count
│   │   └── cart_icon.jsx       # SVG cart icon
│   ├── App.jsx                 # Route definitions
│   └── main.jsx                # App entry point (Provider + BrowserRouter)
└── index.html
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd shopping

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Available Scripts

```bash
npm run dev       # Start dev server
npm run build     # Build for production (outputs to /dist)
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

## How It Works

State is managed globally via Redux. The `plantSlice` holds two pieces of state:

- **`inventory`** — array of plant categories, each with a list of plants
- **`cart`** — array of plants the user has added, each with a `quantity` field

When the user clicks **Add to Cart**, the `addToCart` action either adds the plant with `quantity: 1` or increments its quantity if it already exists. The cart modal opens as an overlay and can be dismissed by clicking outside it, the X button, or **Continue Shopping**.
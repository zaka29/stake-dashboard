# Stake Dashboard – README

## Start application
run `npm install && npm start`

## Design Assumptions
- **Tailwind CSS for rapid styling**  
  Tailwind was integrated to speed up layout and visual design.
- **Ionic starter with Tabs layout**  
  CLI tabs starter to quickly scaffold routing and a bottom tab-bar navigation.

## Component Structure
- **Reusable Components**  
  A dedicated `src/app/components/` directory houses reusable UI elements (e.g., `total-equity`, `holdings`, `trending-stock`, `swipe-to-confirm`).
  - Each component encapsulates its own styles and logic.
  - This modular approach simplifies future design or functional updates and allows easy replacement or addition of new UI elements.

## Data & API Design
Possible API endpoints:

| Endpoint                | Purpose                                                                   |
|-------------------------|---------------------------------------------------------------------------|
| `GET /holdings/`        | Returns the user’s current portfolio holdings.                            |
| `GET /trending-stocks/` | Provides a list of trending stocks or assets.                             |
| `GET /price-change/`    | (Planned) Could serve as a live price-change stream for real-time updates. |
| `POST /place-order`     | (Planned) Could be used to create order.                                |

### Data Types

```ts
interface Holding {
  id: string;
  name: string;
  price: string;
  numberOfShares: number;
}

interface Asset {
  id: string;
  name: string;
  price: string;
  type: string;
}

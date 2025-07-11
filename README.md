# Micro UI Client Example

This is a minimal example project showcasing how to use [`@magnumjs/micro-ui`](https://www.npmjs.com/package/@magnumjs/micro-ui), a tiny reactive DOM component library.

## 📦 Installation

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.


🧱 Example Component
This project includes a simple Counter component powered by @magnumjs/micro-ui.

Component Usage
js
Copy
Edit
import { Counter } from './components/Counter.js';

Counter.mountTo('#app');
Counter.update({ count: 0 });


🧩 What is @magnumjs/micro-ui?
A micro-library for building reactive DOM components:

Reactive props

Declarative child slots

Built-in event binding

Simple lifecycle hooks

Minimal footprint

Perfect for showcasing small UI components or embedded widgets without needing React or Vue.

🗂️ Project Structure


📚 Resources
@magnumjs/micro-ui on npm

Micro UI GitHub (if applicable)
# Micro UI Client Example

This is a minimal example project showcasing how to use [`@magnumjs/micro-ui`](https://www.npmjs.com/package/@magnumjs/micro-ui), a tiny reactive DOM component library.

## 📦 Installation

```bash
npm install
npm run dev
```

Then open http://localhost:5173 in your browser.


🧱 Example Component

This project includes a simple Counter component powered by `@magnumjs/micro-ui.`

Component Usage
```js
import { Counter } from './components/Counter.js';

Counter.mountTo('#app');
Counter.update({ count: 0 });
```

Component
```js
import { createComponent } from '@magnumjs/micro-ui';

export const Counter = createComponent(
  ({ count = 0 }) => `
    <div>
      <h2>Count: ${count}</h2>
      <button id="inc">+</button>
      <button id="dec">-</button>
    </div>
  `,
  {
    events: {
      'click #inc': function () {
        this.update({ count: (this.props.count ?? 0) + 1 });
      },
      'click #dec': function () {
        this.update({ count: (this.props.count ?? 0) - 1 });
      },
    },
  }
);
```

🧩 What is `@magnumjs/micro-ui?`

A micro-library for building reactive DOM components:

 - Reactive props

 - Declarative child slots

 - Built-in event binding

 - Simple lifecycle hooks

 - Minimal footprint

Perfect for showcasing small UI components or embedded widgets without needing React or Vue.

🗂️ Project Structure

```
micro-ui-client/
├── components/
│   └── Counter.js        # A sample reactive component
├── index.html            # Root HTML entry point
├── main.js               # Bootstraps and mounts the component
├── package.json
└── vite.config.js        # Dev server config
```

📚 Resources

 - [@magnumjs/micro-ui on npm](https://www.npmjs.com/package/@magnumjs/micro-ui)

 - [Micro UI GitHub](https://github.com/magnumjs/micro-ui)


🛠️ Author

Built with ❤️ by [Tova’s Husband](https://github.com/magnumjs) – using [@magnumjs/micro-ui](https://www.npmjs.com/package/@magnumjs/micro-ui).
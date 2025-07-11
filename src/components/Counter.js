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
# hook-state

An experimental state layer based on React hooks and redux.

```
npm install hook-state
```

## Example

Provider:

```js
import { createStore } from 'redux';
import { Provider } from 'hook-state';

const store = createStore();

<Provider store={store}>
    <App />
</Provider>;
```

Consumer:

```js
import { useSelector } from 'hook-state';

function MyComponent() {
    const name = useSelector(({ name }) => name);

    return <div>My name is {name}</div>;
}
```

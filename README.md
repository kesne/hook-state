# hook-state
> NOTE: The original version of this library was based on Redux. If you want a redux solution for state management with hooks, you can use [`use-substate`](https://github.com/philipp-spiess/use-substate)

An experimental hook-based state layer for React that allows sharing state between components.

```
npm install hook-state
```

## Example

Provider:

```js
import { Provider } from 'hook-state';

<Provider>
    <App />
</Provider>;
```

State reader:

```js
import { useReader } from 'hook-state';

function MyComponent() {
    const name = useReader('name');

    return <div>My name is {name}</div>;
}
```

State writer:

```js
import { useWriter } from 'hook-state';

function ChangeName() {
    const [name, setName] = useWriter('name', '');

    return (
        <div>
            Change name: <input value={name} onChange={e => setName(e.target.value)} />
        </div>
    );
}
```

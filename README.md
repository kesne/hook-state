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
import reducer from './reducer';

const store = createStore(reducer);

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

### Dispatching

```js
import { useSelector, useDispatcher } from 'hook-state';

function ChangeName() {
    const savedName = useSelector(state => state.name);
    const [name, setName] = useState(savedName);
    const saveName = useDispatcher({ type: 'SET_NAME', payload: name });

    return (
        <div>
            Saved name: {name}
            Change name: <input value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => saveName()}>Save</button>
        </div>
    );
}
```

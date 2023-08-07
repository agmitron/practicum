import { observer } from "mobx-react";
import "./App.css";
import Cat from "./Cat";
import catStore from "./store/cats";

const Component = (props) => {
  console.log({ props });
  const onSubmit = (evt) => {
    evt.preventDefault();
    const value = evt.target.elements.text.value;
    const url = `https://cataas.com/cat/says/${value}`;
    catStore.addCat(url);
  };

  return (
    <div className="App">
      <h1>TITLE. Cats count: {props.store.count}</h1>
      <div>DATA</div>
      <form onSubmit={onSubmit}>
        <input type="text" name="text" />
        <button type="submit">Add Cat</button>
      </form>

      {props.store.data.map((cat) => (
        <Cat
          key={cat.id}
          src={cat.url}
          deleteCat={() => catStore.deleteCat(cat.id)}
        />
      ))}
    </div>
  );
};

const App = observer(Component);

export default App;

// 595f2810557291a9750ebfcf
// 595f2810557291a9750ebfd4
// 595f280a557291a9750ebf4a
// 595f280a557291a9750ebf5f
// 595f280c557291a9750ebf82
// 595f280c557291a9750ebf78
// https://cataas.com/api/cats?skip=0&limit=30

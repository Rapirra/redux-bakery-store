import './App.css';
import BakeryCart from './BakeryCart';

import { store } from './store';

function App() {
  return (
    <div className="App">
      <BakeryCart store={store}/>
    </div>
  );
}

export default App;

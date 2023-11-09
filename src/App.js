import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './State/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>hello friends</h1>
      </div>
    </Provider>
   
  );
}

export default App;

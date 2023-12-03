import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './State/store';
import Navbar from './components/Navbar';
import Routers from './components/Routers';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <Routers />
      </div>
    </Provider>
   
  );
}
export default App;


import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header';

import { Provider } from 'react-redux'
import Store from "./Components/Store/Store"

function App() {

  return (<Provider store={Store}>
    <div className="App">
      <Header />
      <Outlet />
    </div>
  </Provider >
  );

}

export default App;

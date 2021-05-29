import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import {BrowserRouter} from 'react-router-dom';

function App({authService}) {
  return <Login authService={authService}/>;
}

export default App;

import {BrowserRouter, Route, Switch } from 'react-router-dom'
import LogInPage from './Components/LogInPage';
import Dashboard from './Components/Dashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/login" component={LogInPage} />
    
    <Route exact path="/" component={Dashboard} />
    </Switch>

    </BrowserRouter>
  )
}

export default App;

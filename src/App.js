import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SportsTeams from './components/SportsTeams/SportsTeams';
import TeamDetals from './components/Team/TeamDetals';

function App() {

  return (

    <BrowserRouter>
    <Header></Header>
    <Switch>
      
      <Route exact path="/">
      <SportsTeams></SportsTeams>
      </Route>

      <Route exact path="/home">
      <SportsTeams></SportsTeams>
      </Route>

      <Route  path="/teamdetails/:teamId">
      <TeamDetals></TeamDetals>
      </Route>
    
    </Switch>
    </BrowserRouter>


  );
}

export default App;

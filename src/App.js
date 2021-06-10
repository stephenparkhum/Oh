import './styles/style.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Main from './components/Main';

// Components
import LoginForm from './components/LoginForm';
import Splash from './components/Splash';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Switch>
            <Route exact path="/">
              <Splash headerText="Oh."/>
              <LoginForm />
            </Route>
            <Route path="/main">
              <Main />
            </Route>
          </Switch>

        </main>
      </div>
    </Router>
  );
}

export default App;

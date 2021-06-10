import './styles/style.css'
import LoginForm from './components/LoginForm';

import Splash from './components/Splash';

function App() {
  return (
    <div className="App">
      <main>
        <Splash headerText="Oh."/>
        <LoginForm />
      </main>
    </div>
  );
}

export default App;

import react from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Books from './Books';
import Websites from './Websites';

function App(){
    return (
    <BrowserRouter>
      <Switch>
        <Route path="/books" component={Books} />
        <Route path="/websites" component={Websites} />
        <Route exact path="/" render={() => <div>LandingPage</div>} />
      </Switch>
    </BrowserRouter>
    );
}

export default App;
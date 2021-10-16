import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Jobs } from './pages/jobs';
import './index.scss';

function App() {
  return (
    <BrowserRouter>
      <Redirect from="*" to="/test/jobs"/>
      <Switch>
        <Route path="/test/jobs" component={Jobs} exact/>        
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'))
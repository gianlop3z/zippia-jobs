import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Jobs } from './pages/jobs';
import './index.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/test/jobs" component={Jobs} exact/>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'))
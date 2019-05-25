
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import $ from 'jquery';
import LogIn from "./components/login.js";
import Suggestions from "./components/suggestions.js";
import MovieRow from './components/MovieRow.js';
import App from './App.js'





class Home extends React.Component {


  render() {
    return (

      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={App} exact />
            <Route path="/login" component={LogIn} />
            <Route path="/suggestions" component={Suggestions} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>


    );
  }
}

ReactDOM.render(<Home />, document.getElementById('app'));

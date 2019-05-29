import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import $ from 'jquery';
import Suggestions from "./components/suggestions.js";
import LogInForm from "./components/login.js";
import LoggedOut from "./components/loggedout.js";
import MovieRow from './components/MovieRow.js';
import App from './App.js'





class Home extends React.Component {


  render() {
    return (

      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={App} exact />
            <Route path="/login" component={LogInForm} />
            <Route path="/suggestions" component={Suggestions} />
            <Route path="/loggedout" component={LoggedOut} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>


    );
  }
}

ReactDOM.render(<Home />, document.getElementById('app'));

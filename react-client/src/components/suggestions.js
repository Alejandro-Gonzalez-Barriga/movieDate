import React from 'react';
import {NavLink} from 'react-router-dom';


class Suggestions extends React.Component {
  render() {
    return (
      <div>
      <NavLink to="/home" >
        <button>Home</button>
      </NavLink>
      <NavLink to="/loggedout" >
        <button>LogOut</button>
      </NavLink>

        <h1>Aqui te sugerimos peliculas basado los gustos de ti y tu media naranja</h1>
      </div>
    );
  }
  }
export default Suggestions;

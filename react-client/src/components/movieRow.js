import React from 'react'
import StarComp from './stars.js';

class MovieRow extends React.Component{
  render(){
    return  <table key={this.props.movie.id}>
      <tbody>
        <tr>
          <td>
            <img alt="poster" width="80" src={this.props.movie.poster_src} />
          </td>
          <td>..
            <p>{this.props.movie.title}</p>
            <p>{this.props.movie.overview}</p>
            <StarComp />

          </td>
      </tr></tbody>
    </table>
  }
}

export default MovieRow;

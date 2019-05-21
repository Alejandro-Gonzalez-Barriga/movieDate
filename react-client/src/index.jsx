
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MovieRow from './components/MovieRow.js'



class App extends React.Component {
  constructor(props){
    super(props)
    console.log("this is my int");

    const movies = [
      {id: 0, poster_src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
       title: "Avengers", overview:"this is the avengers overview"},
      {id: 1, poster_src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
       title: "Avengers2", overview:"this is the second overview"}
    ]

    var movieRows = []
    movies.forEach((movie)=>{
      console.log(movie.title);
      const movieRow = <MovieRow movie={movie}/>
      movieRows.push(movieRow)
    })

    this.state = {rows:movieRows}
};
  render () {
    return (
      <div>
        <table style={{
          backgroundColor: '#000', display: 'block'
        }}>
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="100" src="tmdb logo.png" />
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize:24,
          display: 'block',
          width: '97.8%',
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16

        }} placeholder = "Eneter search term"/>

        {this.state.rows}

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

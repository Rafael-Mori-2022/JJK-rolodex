import React, {Component} from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = { // Value inicialization!
      characters : [],
      filteredCharacters : [],
    };
  }

  componentDidMount() {
    fetch('http://[::1]:5000/api/v1/characters/')
      .then(response => response.json())
      .then(data => this.setState(
        () => {
          return {characters: data, filteredCharacters: data}; // "Re-render()", which means that eventually will execute render again!
        }
        , 
        () => {
        console.log(this.state);
        })
      );
  }

  render() {
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='Search Characters' onChange={(event) => {
          const filteredCharacters = this.state.characters.filter((character) => character.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
          
          if (filteredCharacters.length !== 0) {
            this.setState({filteredCharacters: filteredCharacters})
          } 
        }}/>
        {
          this.state.filteredCharacters.map((character) => {
            return ( 
              <div key={character.id}>
                <h1>{character.name}</h1>
                <p>Status: {character.status !== null && character.status.length ? character.status : 'No info!'}</p>
                <p>Classe: {character.grade !== null && character.grade.length ? character.grade : 'No info!'}</p>
                <a href={character.image_url} target='_blank' rel='noreferrer'><img src={character.image_url} alt={character.name} /></a>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      characters : [],
    };
  }

  componentDidMount() {
    fetch('http://[::1]:5000/api/v1/characters/')
    .then(response => response.json())
    .then(data => { this.setState({characters: data})}, 
    () => {
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="App">
      {
        this.state.characters.map((character) => {
          return ( 
            <div key={character.id}>
              <h1>{character.name}</h1>
              <p>Idade: {character.age}</p>
              <p>Classe: {character.grade}</p>
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

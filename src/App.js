import {Component} from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      characters : []
    };
  }

  componentDidMount() {
    fetch('http://localhost:5000/api/v1/').then(response => console.log(response.body));
  }

  render() {
    return (
      <div className="App">
        {
          this.state.characters.map((characters) => {
            return ( 
            <div key={characters.id}>
              <h1>{characters.name}</h1>
            </div>)
          })
        }
      </div>
    );
  }
}

export default App;

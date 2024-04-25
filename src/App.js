import React, {Component} from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'

class App extends Component {
  constructor() {
    super();
    
    this.state = { // Value inicialization!
      characters : [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('http://[::1]:5000/api/v1/characters/')
      .then(response => response.json())
      .then(data => this.setState(
        () => {
          return {characters: data}; // "Re-render()", which means that eventually will execute render again!
        })
      );
  }

  onSearchChange = (event) => {
    const searchContent = event.target.value.toLocaleLowerCase();

    this.setState( () => {
      return {searchField: searchContent};
      }
    );
  }

  render() {
    // Keep track on the memory! This way you don't have to re-create the track of the data every single time.

    const {characters, searchField} = this.state;
    const {onSearchChange} = this;

    const filteredCharacters = characters.filter((character) =>  {
      return character.name.toLocaleLowerCase().includes(searchField)
    });

    // console.log('Rendered in AppJS');
    return (
      <div className="App">

        <h1 className='app-title'>Jujutsu Rolodex</h1>

        <SearchBox 
        className='search-box' 
        onChangeHandler={onSearchChange} 
        placeholder='Search Characters'
        />

        <CardList 
        characters={filteredCharacters}
        />
      </div>
    );
  }
}

export default App;
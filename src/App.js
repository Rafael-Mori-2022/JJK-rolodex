import { useState, useEffect } from 'react';

import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'

const App = () => { // There are no lifecycles in functional components, so you have to think the coding process in a complete different way!
  // So, you need to structure your code managing pure (complete isolated) and impure (not isolated) functions, also thinking about the side effects of which function!

  // It's important to think that everytime that a variable or props or state (that is/are being used by the function) changes the fuction is ran again
  // React sees info like it's different from one to another if they're in different places in memory

  const [searchField, setSearchField] = useState(''); // useState returns [value, setValue]
  // Using 'useState()' doesn't create objects, it only returns values!

  const [characters, setCharacters] = useState([]);

  const [filteredCharacters, setFilteredCharacters] = useState(characters);

  // Based in the change of the element present in the array! Whenever the content of the array changes the callback function is ran.
  useEffect(() => {
    fetch('http://[::1]:5000/api/v1/characters/')
    .then(response => response.json())
    .then(data => setCharacters(data));
  }, []); // Passing no dependencies, so this func is never going to be ran again!

  useEffect(() => {
    const newFilteredCharacters = characters.filter((character) =>  {
      return character.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredCharacters(newFilteredCharacters);
  }, [characters, searchField]);

  const onSearchChange = (event) => {
    const searchContent = event.target.value.toLocaleLowerCase();
    setSearchField(searchContent);
  }
  
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
  </div>)
}

export default App;
import {Component} from 'react';

import './card-list.styles.css'
import Card from '../card/card.component';

class CardList extends Component { // You cannot have multiples components!

    render() {
        // console.log('Rendered in card-list!');
        // console.log(this.props.characters);
        // Notice that re-render occours when a props is altered, leading to a full re-render in the components that are subsequent to the one that suffered the altering!
        const {characters} = this.props;
        
        return (
            <div className='card-list'>
                {characters.map(character => {
                return ( 
                    <Card character={character}/>
                )})}
            </div>
        );
    }
}

export default CardList; // So you can use this code in another context!
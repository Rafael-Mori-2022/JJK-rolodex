import {Component} from 'react';

import './card-list.styles.css'

class CardList extends Component { // You cannot have multiples components!

    render() {
        // console.log('Rendered in card-list!');
        // console.log(this.props.characters);
        // Notice that re-render occours when a props is altered, leading to a full re-render in the components that are subsequent to the one that suffered the altering!
        const {characters} = this.props;
        
        return (
            <div className='card-list'>
                {characters.map(character => {
                const {id, name, status, grade, image_url} = character;
                return ( 
                    <div className='card-container' key={id}>
                        <h1 >{name}</h1>
                        <img src={image_url} alt={name} />
                        <p>Status: {status !== null && status.length ? status : 'Undefined!'}</p>
                        <p>Grade: {grade !== null && grade.length ? grade : 'Undefined!'}</p>
                    </div>
                )})}
            </div>
        );
    }
}

export default CardList; // So you can use this code in another context!
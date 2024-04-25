import {Component} from 'react'

import "./card.styles.css"

class Card extends Component {
    render() {
        const {id, name, status, grade, image_url} = this.props.character;

        return(
            <div className='card-container' key={id}>
                <h1 >{name}</h1>
                <img src={image_url} alt={name} />
                <p>Status: {status !== null && status.length ? status : 'Undefined!'}</p>
                <p>Grade: {grade !== null && grade.length ? grade : 'Undefined!'}</p>
            </div>
        );
    }
}

export default Card;
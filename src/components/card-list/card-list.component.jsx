import Card from '../card/card.component';
import './card-list.styles.css'

const CardList = ({characters}) =>  {
    return(
        <div className='card-list'>
            {characters.map(character => {
            return ( 
                <Card character={character}/>
            )})}
        </div>
    );
}
    

   
export default CardList; // So you can use this code in another context!